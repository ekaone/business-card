import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Business Card Generator",
  description:
    "Create, customize, and export modern digital business cards instantly.",
  openGraph: {
    title: "Business Card Generator",
    description:
      "Create, customize, and export modern digital business cards instantly.",
    url: "https://ekaone-business-card.vercel.app/", // Update to your deployed URL if needed
    siteName: "Business Card Generator",
    images: [
      {
        url: "/og-image.png", // Place your og-image.png in public/
        width: 1200,
        height: 630,
        alt: "Business Card Generator Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Card Generator",
    description:
      "Create, customize, and export modern digital business cards instantly.",
    images: ["/og-image.png"],
    creator: "@ekaone",
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
