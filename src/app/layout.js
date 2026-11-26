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

export const metadata = {
  title: "Gul e Arzoo | LinkedIn for Fractional Executives",
  description:
    "LinkedIn profiles and content for fractional CMOs, CFOs, CTOs and COOs. Turn your LinkedIn into a client pipeline in 90 days.",
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} ${playfairDisplay.variable} ${helveticaNeue.variable} h-full overflow-x-clip antialiased`}
    >
      <body className="flex min-h-full min-w-0 flex-col overflow-x-clip bg-[#1B0002] text-white">
        <AmbientBackground />
        <Navbar />
        <main className="min-w-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
