import type { Metadata } from "next";
import HomeClient from "@/app/HomeClient";

export const metadata: Metadata = {
  title: "Oversight",
  description:
    "A play by L.B. Deyo. Presented by The Zahir at Hyde Park Theatre in Austin, 2026.",
  openGraph: {
    title: "Oversight",
    description:
      "A play by L.B. Deyo. Presented by The Zahir at Hyde Park Theatre in Austin, 2026.",
    images: ["/oversight-eye-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oversight",
    description:
      "A play by L.B. Deyo. Presented by The Zahir at Hyde Park Theatre in Austin, 2026.",
    images: ["/oversight-eye-og.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
