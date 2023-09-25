export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/**"],
      disallow: "/private/",
    },
    sitemap: "https://spus.vercel.app/sitemap.xml",
  };
}
