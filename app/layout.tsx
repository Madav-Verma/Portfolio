import type { Metadata } from "next";
import { Caveat, Instrument_Serif, Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-hand",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daksh Verma — Applied AI Solutions Engineer",
  description:
    "Daksh Verma designs and ships production-ready web applications, AI assistants and internal tools that solve real business problems — from idea to deployment.",
  openGraph: {
    title: "Daksh Verma — Applied AI Solutions Engineer",
    description:
      "Building useful software with AI. Production web apps, RAG assistants, ERP/CRM systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${caveat.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-ivory text-ink antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
