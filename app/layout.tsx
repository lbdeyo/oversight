import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Script from "next/script";
import "./globals.css";
import BackgroundVideoLayer from "./components/BackgroundVideoLayer";
import SiteNav from "./components/SiteNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oversight",
  description: "Oversight site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/auu6bfp.css" />
        <link
          rel="preload"
          href="https://use.typekit.net/af/7411e2/000000000000000077359a44/31/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://use.typekit.net/af/4861e8/00000000000000007735c849/31/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`tk-t26-carbon normal-case ${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50`}
      >
        <div className="relative flex min-h-screen flex-col">
          <BackgroundVideoLayer />
          <SiteNav />
          <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 min-h-[calc(100vh-4rem)]">
            <div className="relative z-10">{children}</div>
            <a
              href="https://the-zahir.org"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 z-20 zahir-logo-link"
            >
              <Image
                src="/img/zahir-logo.svg"
                alt="Zahir"
                width={300}
                height={96}
                className="h-[3.75rem] w-auto"
              />
            </a>
          </main>
        </div>
        <Script
          id="hs-script-loader"
          src="https://js-na2.hs-scripts.com/244639378.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
