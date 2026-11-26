export const dynamic = "force-static";

export default function sitemap() {
  const base = "https://www.designwithgul.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/brand/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];
}
