import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Oversight",
  description: "A new play by L.B. Deyo. Coming to Austin, TX in 2026.",
  openGraph: {
    title: "Oversight",
    description: "A new play by L.B. Deyo. Coming to Austin, TX in 2026.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oversight",
    description: "A new play by L.B. Deyo. Coming to Austin, TX in 2026.",
    images: ["/og.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
