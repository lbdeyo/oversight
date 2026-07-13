import type { Metadata } from "next";
import AboutClient from "@/app/about/AboutClient";

export const metadata: Metadata = {
  title: "About | Oversight",
  description:
    "Oversight is a real-time thriller set entirely inside a government chamber.",
  openGraph: {
    title: "About | Oversight",
    description:
      "Oversight is a real-time thriller set entirely inside a government chamber.",
    images: ["/oversight-eye-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Oversight",
    description:
      "Oversight is a real-time thriller set entirely inside a government chamber.",
    images: ["/oversight-eye-og.png"],
  },
};

export default function About() {
  return <AboutClient />;
}
