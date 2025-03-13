import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			// disallow: "",
		},
		sitemap: "https://b1o.me/sitemap.xml",
	};
}
