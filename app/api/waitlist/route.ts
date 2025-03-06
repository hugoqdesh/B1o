import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { email } = await req.json();

		const existingWaitlistEntry = await db.waitlist.findUnique({
			where: { email },
		});

		if (existingWaitlistEntry) {
			return NextResponse.json(
				{ message: "Already on the waitlist!" },
				{ status: 409 }
			);
		}

		await db.waitlist.create({
			data: { email },
		});

		return NextResponse.json({ message: "Added to waitlist!" });
	} catch (error) {
		console.error("Error adding to waitlist:", error);
		return NextResponse.json(
			{ message: "An error occurred." },
			{ status: 500 }
		);
	}
}
