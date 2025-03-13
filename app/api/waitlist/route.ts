import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		// Parse the incoming JSON payload
		const { email } = await req.json();

		// Validate that an email was provided
		if (!email) {
			return NextResponse.json(
				{ message: "Email is required." },
				{ status: 400 }
			);
		}

		// Check if the email is already on the waitlist
		const existingWaitlistEntry = await db.waitlist.findUnique({
			where: { email },
		});

		// If found, return a conflict response
		if (existingWaitlistEntry) {
			return NextResponse.json(
				{ message: "Already on the waitlist!" },
				{ status: 409 }
			);
		}

		// Create a new waitlist entry with the provided email
		await db.waitlist.create({
			data: { email },
		});

		// Return a success message
		return NextResponse.json({ message: "Added to waitlist!" });
	} catch (error) {
		// Log any errors and return a server error response
		console.error("Error adding to waitlist:", error);
		return NextResponse.json(
			{ message: "An error occurred." },
			{ status: 500 }
		);
	}
}
