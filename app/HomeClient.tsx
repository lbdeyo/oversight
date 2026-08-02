import Link from "next/link";

export default function HomeClient() {
  return (
    <div className="flex flex-col gap-4 -mt-4 sm:-mt-2">
      <div className="flex flex-col gap-0">
        <blockquote className="mb-4 text-[1.375rem] leading-tight text-pretty sm:text-[1.5rem]">
          <Link
            href="https://sunnewsaustin.com/2026/07/31/oversight-who-should-decide-ais-future/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 transition-colors duration-200 hover:text-amber-300"
          >
            &ldquo;Philosophical, political, deeply human and unnervingly
            timely...an ambitious and provocative and well written work that
            lingers long after the curtain falls.&rdquo;{" "}
            <cite className="whitespace-nowrap not-italic text-zinc-400">
              - Elise Krentzel, <em>Sun News Austin</em>
            </cite>
          </Link>
        </blockquote>
        <blockquote className="mb-4 text-[1.375rem] leading-tight text-pretty sm:text-[1.5rem]">
          <Link
            href="https://www.broadwayworld.com/austin/article/Review-OVERSIGHT-at-Hyde-Park-Theatre-20260801"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 transition-colors duration-200 hover:text-amber-300"
          >
            &ldquo;Ambitious... unsettling... maintains a brisk pace...
            relevant... fascinating... timely... introduces an extraordinary
            range of ideas... increasingly urgent... thought-provoking... a
            steadily escalating political thriller.&rdquo;{" "}
            <cite className="whitespace-nowrap not-italic text-zinc-400">
              - Sabrina Wallace, <em>Broadway World Austin</em>
            </cite>
          </Link>
        </blockquote>
        <p className="text-[1.875rem] leading-none text-white text-pretty">
          A secret commission. A ticking clock. A decision that can&apos;t
          be&nbsp;undone.
        </p>
        <div className="mt-5 flex flex-col sm:-mt-4 md:-mt-5 lg:-mt-2">
          <h1
            className="text-8xl sm:text-[7.5rem] md:text-[9rem] lg:text-[12rem] leading-none tracking-wide text-amber-400 uppercase"
            style={{
              fontFamily: '"thunderhouse-pro", sans-serif',
              fontWeight: 400,
            }}
          >
            Oversight
          </h1>
          <p className="-mt-4 text-[2.25rem] leading-none text-white whitespace-pre-line sm:-mt-4 md:-mt-5 lg:-mt-6">
            A new play by L.B. Deyo, now playing.
          </p>
          <p className="mt-4 text-[1.375rem] font-normal leading-none tracking-wide text-zinc-300 sm:mt-5 sm:text-[1.6875rem]">
            July 30-August 22 at{" "}
            <Link
              href="https://www.hydeparktheatre.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit transition-colors duration-200 hover:text-amber-400"
            >
              Hyde Park Theatre
            </Link>
          </p>
          <div className="mt-6 sm:mt-7">
            <Link
              href="https://tickets.atxtheatre.org/organizations/the-zahir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-amber-400 px-12 py-4.5 text-[1.6875rem] leading-none text-zinc-950 transition-colors duration-200 hover:bg-amber-300 sm:text-[1.875rem]"
            >
              Get tickets
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl">
        <div className="relative aspect-video overflow-hidden rounded-lg border border-zinc-800 bg-black">
          <iframe
            src="https://www.youtube.com/embed/qSPlg1qkSA4?si=gje_OrABBdxWoGqw"
            title="Announcing Oversight"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
