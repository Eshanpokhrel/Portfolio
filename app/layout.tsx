import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import Sidebar from "@/components/Sidebar";
import ClientLayout from "@/components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eshan Pokhrel",
  description: "Eshan Pokhrel's personal portfolio. A skilled web developer specializing in technologies like HTML, CSS, JavaScript, React, NextJs, Tailwind, etc. Explore my projects and professional achievements.",
  metadataBase: new URL("https://eshanpokhrel.com.np"),
  openGraph: {
    title: "Eshan Pokhrel",
    description:
      "Explore the portfolio of Eshan Pokhrel, a proficient web developer skilled in HTML, CSS, JavaScript, and React. Check out my projects.",
    url: "https://eshanpokhrel.com.np",
    siteName: "Eshan Pokhrel",
    type: "website",
    images: [ 
      {
        url: "/images/SS.png",
        width: 1200,
        height: 630,
        alt: "Eshan Pokhrel Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="HwB0wHJNENYXOCTn0NwxYy9krbpfDaXKunRK9j7ZDqo" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>
          <Sidebar />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
