export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://designwithgul.com/sitemap.xml",
    host: "https://designwithgul.com",
  };
}
