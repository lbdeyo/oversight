import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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
          href="https://use.typekit.net/af/c341fc/00000000000000007736d89b/31/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://use.typekit.net/af/14aa5b/00000000000000007736d89c/31/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`tk-ltc-octic-gothic-two ${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50`}
      >
        <div className="relative flex min-h-screen flex-col">
          {/* Video layer constrained to content area width */}
          <div className="fixed inset-0 z-0 flex justify-center">
            <div className="absolute inset-0 bg-zinc-950" />
            <div className="relative h-full w-full max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="absolute inset-0 rounded-lg bg-black" />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full rounded-lg object-cover object-top opacity-75 md:opacity-50"
              >
                <source src="/vid/oversight-home-bg-sb.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <nav className="sticky top-0 z-50 w-full bg-gray-950 backdrop-blur-sm border-b border-gray-800">
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="nav-logo-wrapper">
                  <Link href="/" className="block">
                    <Image
                      src="/img/oversight-logo2.svg"
                      alt="Oversight"
                      width={140}
                      height={40}
                      priority
                      className="h-[3.125rem] w-auto nav-logo-img"
                    />
                  </Link>
                </div>
                <Link
                  href="/about"
                  className="text-white hover:text-amber-400 transition-colors duration-200"
                >
                  About
                </Link>
              </div>
            </div>
          </nav>
          <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)]">
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
      </body>
    </html>
  );
}
