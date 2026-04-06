import type { Metadata } from "next";
import NewsletterClient from "@/app/newsletter/NewsletterClient";

export const metadata: Metadata = {
  title: "Newsletter | Oversight",
  description:
    "Sign up for the Oversight newsletter — news and updates about the play by L.B. Deyo.",
  openGraph: {
    title: "Newsletter | Oversight",
    description:
      "Sign up for the Oversight newsletter — news and updates about the play by L.B. Deyo.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter | Oversight",
    description:
      "Sign up for the Oversight newsletter — news and updates about the play by L.B. Deyo.",
    images: ["/og.png"],
  },
};

export default function NewsletterPage() {
  return <NewsletterClient />;
}
