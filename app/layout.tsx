import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "../app/providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";
import PointerGlow from "../components/PointerGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TAREK AMMARI — Full‑Stack Developer",
  description:
    "Portfolio and shop to present and sell projects (WordPress, Next.js, React, HTML/CSS) and courses by TAREK AMMARI.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "TAREK AMMARI — Full‑Stack Developer",
    description:
      "Portfolio and shop to present and sell projects and courses by TAREK AMMARI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <PageContainer>
              <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
              </main>
            </PageContainer>
            <Footer />
          </div>
        </Providers>
        <PointerGlow />
      </body>
    </html>
  );
}
