import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Licensing / EPK | Oversight",
  description:
    "Licensing information and electronic press kit for Oversight, a play by L.B. Deyo presented by The Zahir.",
  openGraph: {
    title: "Licensing / EPK | Oversight",
    description:
      "Licensing information and electronic press kit for Oversight, a play by L.B. Deyo presented by The Zahir.",
    images: ["/oversight-eye-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Licensing / EPK | Oversight",
    description:
      "Licensing information and electronic press kit for Oversight, a play by L.B. Deyo presented by The Zahir.",
    images: ["/oversight-eye-og.png"],
  },
};

export default function LicensingPage() {
  return (
    <div className="flex flex-col gap-10 max-w-3xl">
      <div>
        <h1
          className="text-8xl sm:text-[7.5rem] md:text-[9rem] lg:text-[12rem] leading-none tracking-wide text-amber-400 uppercase"
          style={{
            fontFamily: '"thunderhouse-pro", sans-serif',
            fontWeight: 400,
          }}
        >
          Oversight
        </h1>
        <p className="-mt-2 text-[1.125rem] leading-tight text-zinc-400 sm:-mt-3 sm:text-[1.25rem]">
          By L.B. Deyo, winner of Outstanding Original Script, Austin Theatre
          Critics Awards 2025-2026
        </p>
      </div>

      <figure>
        <Image
          src="/img/oversight-production.jpg"
          alt="Oversight - production photo"
          width={1080}
          height={566}
          sizes="(max-width: 768px) 100vw, 768px"
          className="h-auto w-full rounded-lg border border-zinc-800"
          priority
        />
        <figcaption className="mt-2 text-sm text-zinc-500">
          Oversight - production photo
        </figcaption>
      </figure>

      <div>
        <Link
          href="https://www.the-zahir.org/docs/oversight-epk.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-amber-400 px-10 py-4 text-[1.5rem] leading-none text-zinc-950 transition-colors duration-200 hover:bg-amber-300 sm:text-[1.6875rem]"
        >
          Download EPK
        </Link>
      </div>

      <section className="flex flex-col gap-3">
        <h2
          className="text-5xl sm:text-6xl leading-none tracking-wide text-amber-400 uppercase"
          style={{
            fontFamily: '"thunderhouse-pro", sans-serif',
            fontWeight: 400,
          }}
        >
          Synopsis
        </h2>
        <p className="text-[1.375rem] leading-snug text-white text-pretty sm:text-[1.5rem]">
          A secret commission. A ticking clock. A decision that can&apos;t be
          undone. <em>Oversight</em> is a fast-paced political and psychological
          thriller that traps its audience inside a closed committee hearing as
          lawmakers confront a consequential threat at the intersection of
          artificial intelligence and national security.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2
          className="text-5xl sm:text-6xl leading-none tracking-wide text-amber-400 uppercase"
          style={{
            fontFamily: '"thunderhouse-pro", sans-serif',
            fontWeight: 400,
          }}
        >
          Press
        </h2>
        <blockquote className="text-[1.375rem] leading-tight text-pretty sm:text-[1.5rem]">
          <Link
            href="https://sunnewsaustin.com/2026/07/31/oversight-who-should-decide-ais-future/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 transition-colors duration-200 hover:text-amber-300"
          >
            &ldquo;Philosophical, political, deeply human and unnervingly
            timely... an ambitious and provocative and well written work that
            lingers long after the curtain falls.&rdquo;
            <cite className="mt-1 block not-italic text-zinc-400">
              - Elise Krentzel, <em>Sun News Austin</em>
            </cite>
          </Link>
        </blockquote>
        <blockquote className="text-[1.375rem] leading-tight text-pretty sm:text-[1.5rem]">
          <Link
            href="https://ctxlivetheatre.com/reviews/20260814-review-3-of-3-oversight-by-lb-deyo-the-za/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 transition-colors duration-200 hover:text-amber-300"
          >
            &ldquo;Oversight is the very first production of the Zahir... and
            the company couldn&apos;t have hoped for a more powerful and
            engrossing debut.&rdquo;
            <cite className="mt-1 block not-italic text-zinc-400">
              - Brian Paul Scipione, <em>CTX Live Theatre</em>
            </cite>
          </Link>
        </blockquote>
      </section>
    </div>
  );
}
