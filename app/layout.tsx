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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50`}
      >
        <div className="flex min-h-screen flex-col">
          <nav className="sticky top-0 z-50 w-full bg-gray-950 backdrop-blur-sm border-b border-gray-800">
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="nav-logo-wrapper">
                  <Link href="/">
                    <Image
                      src="/img/oversight-logo.svg"
                      alt="Oversight"
                      width={120}
                      height={32}
                      priority
                      className="h-10 w-auto"
                    />
                  </Link>
                </div>
                <Link 
                  href="/about"
                  className="text-white hover:text-amber-400 transition-colors duration-200"
                  style={{ fontFamily: 'video, sans-serif', fontWeight: 300 }}
                >
                  About
                </Link>
              </div>
            </div>
          </nav>
          <main className="relative mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)]">
            <div className="absolute inset-0 rounded-lg bg-black" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover rounded-lg video-dot-mask opacity-75 md:opacity-50"
            >
              <source src="/vid/oversight-home-bg.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10">
              {children}
            </div>
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
