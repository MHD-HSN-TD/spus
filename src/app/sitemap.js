export default function sitemap() {
  return [
    {
      url: "https://spus.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://spus.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://spus.vercel.app/unis/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://spus.vercel.app/unis/*",
      lastModified: new Date(),
      changeFrequency: "weakly",
      priority: 0.6,
    },
  ];
}
