import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#E9E7E1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Uttamraj Singh — Software & AI Engineer | Portfolio",
  description:
    "Personal portfolio of Uttamraj Singh. Computer Science engineering student specializing in AI/ML, full-stack systems, and AI-powered products. Making ideas feel real.",
  keywords: [
    "Uttamraj Singh",
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Computer Science",
    "Agentic Workflows",
    "Next.js",
    "Python",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: "Uttamraj Singh" }],
  creator: "Uttamraj Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uttamrajsingh.dev",
    title: "Uttamraj Singh — Software & AI Engineer",
    description:
      "Making ideas feel real. Software and AI-powered products engineered from first principles to production details.",
    siteName: "Uttamraj Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uttamraj Singh — Software & AI Engineer",
    description:
      "Making ideas feel real. Software and AI-powered products engineered from first principles to production details.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-[#E9E7E1] text-[#20221F] selection:bg-[#C4E36C] selection:text-[#20221F] paper-grain">
        {children}
      </body>
    </html>
  );
}
