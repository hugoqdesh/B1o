import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			// disallow: "",
		},
		sitemap: "https://b1-o.vercel.app/sitemap.xml",
	};
}
