import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: "https://b1o.me/",
			lastModified: new Date(),
			priority: 1,
		},
	];
}
