import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArabeCS Downloads",
  description: "CS1.6 DOWNLOAD CHEATS",
  openGraph: {
    title: "ArabeCS Downloads",
    description: "CS1.6 DOWNLOAD CHEATS",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "ArabeCS Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="ArabeCS Downloads" />
        <meta property="og:description" content="CS1.6 DOWNLOAD CHEATS" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
