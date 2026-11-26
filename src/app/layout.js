import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AmbientBackground from "@/components/layout/AmbientBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = localFont({
  src: "../../public/font/Bricolage_Grotesque/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf",
  variable: "--font-bricolage-grotesque",
  display: "swap",
});

const playfairDisplay = localFont({
  src: "../../public/font/Bricolage_Grotesque,Playfair_Display/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair-display",
  display: "swap",
});

const helveticaNeue = localFont({
  src: [
    {
      path: "../../public/font/helvetica_neue/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/helvetica_neue/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/helvetica_neue/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
});

const SITE_URL = "https://designwithgul.com";
const SITE_DESCRIPTION =
  "LinkedIn profile strategist for fractional CMOs, CFOs, CTOs and COOs. Profile rewrites, banners and done-for-you content that turn your LinkedIn into a client pipeline in 90 days.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gul e Arzoo | LinkedIn Profile Strategist for Fractional Executives",
    template: "%s | Gul e Arzoo",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "LinkedIn profile strategist",
    "LinkedIn for fractional executives",
    "fractional CMO LinkedIn",
    "fractional CFO LinkedIn",
    "fractional CTO LinkedIn",
    "fractional COO LinkedIn",
    "LinkedIn profile optimization",
    "LinkedIn banner design",
    "LinkedIn ghostwriting",
    "LinkedIn content management",
    "personal branding for executives",
  ],
  authors: [{ name: "Gul e Arzoo", url: SITE_URL }],
  creator: "Gul e Arzoo",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Design with Gul",
    title: "Gul e Arzoo | LinkedIn Profile Strategist for Fractional Executives",
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gul e Arzoo, LinkedIn Profile Strategist for fractional executives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gul e Arzoo | LinkedIn Profile Strategist for Fractional Executives",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#gul`,
      name: "Gul e Arzoo",
      jobTitle: "LinkedIn Profile Strategist",
      url: SITE_URL,
      image: `${SITE_URL}/home_page/Arzoo.png`,
      address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
      sameAs: [
        "https://www.linkedin.com/in/gul-executive-branding/",
        "https://www.behance.net/gulearzoo82542",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Design with Gul",
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      founder: { "@id": `${SITE_URL}/#gul` },
      areaServed: ["United States", "United Kingdom", "Switzerland"],
      serviceType: [
        "LinkedIn profile optimization",
        "LinkedIn content management",
        "LinkedIn banner design",
        "1:1 LinkedIn consultation",
      ],
      offers: [
        { "@type": "Offer", name: "Founder-Ready LinkedIn Profile", price: "149", priceCurrency: "USD" },
        { "@type": "Offer", name: "1:1 LinkedIn Consultation", price: "100", priceCurrency: "USD" },
        { "@type": "Offer", name: "90-Day LinkedIn Management" },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} ${playfairDisplay.variable} ${helveticaNeue.variable} h-full overflow-x-clip antialiased`}
    >
      <body className="flex min-h-full min-w-0 flex-col overflow-x-clip bg-[#1B0002] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AmbientBackground />
        <Navbar />
        <main className="relative z-[1] min-w-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
