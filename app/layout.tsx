import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://markryand.com";

export const metadata: Metadata = {
  title: "Mark Ryan D. | Full-Stack Software Engineer",
  description: "Full-Stack Software Engineer with 6+ years of experience building scalable and secured web applications.",
  metadataBase: new URL(baseUrl),
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Mark Ryan D. | Full-Stack Software Engineer",
    description: "Full-Stack Software Engineer with 6+ years of experience building scalable and secured web applications.",
    url: baseUrl,
    siteName: "Mark Ryan D.",
    images: [
      {
        url: "/og-image.png", // add a 1200×630px image to public/og-image.png
        width: 1200,
        height: 630,
        alt: "Mark Ryan D. - Full-Stack Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Ryan D. | Full-Stack Software Engineer",
    description: "Full-Stack Software Engineer with 6+ years of experience building scalable and secured web applications.",
    images: ["/og-image.png"],
  },  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
