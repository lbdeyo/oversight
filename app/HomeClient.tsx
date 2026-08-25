import Link from "next/link";

export default function HomeClient() {
  return (
    <div className="flex flex-col gap-4 -mt-4 sm:-mt-2">
      <div className="flex flex-col gap-0">
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
          <div className="-mt-4 flex flex-col gap-1 sm:-mt-4 md:-mt-5 lg:-mt-6">
            <p className="text-[1.125rem] leading-tight text-zinc-400 sm:text-[1.25rem]">
              A play by L.B. Deyo, winner of Outstanding Original Script,
              Austin Theatre Critics Awards 2025-2026.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4 sm:mt-6">
        <blockquote className="text-[1.375rem] leading-tight text-amber-400 text-pretty sm:text-[1.5rem]">
          &ldquo;OVERSIGHT is an impeccable intellectual thriller given an
          impeccable staging by The Zahir at Hyde Park Theatre. Everybody in
          America should see it. Austin writer L.B. Deyo&apos;s play uncoils
          with the audacity of a Hitchcock masterpiece. Marcus McQuirter
          directs a cast flawless in every detail, who populate a setting as
          inescapable as the terrifyingly timely narrative.&rdquo;
          <cite className="mt-1 block not-italic text-zinc-400">
            - Michael Barnes, <em>Austin American-Statesman</em>
          </cite>
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
            <cite className="mt-1 block whitespace-nowrap not-italic text-zinc-400">
              - Brian Paul Scipione, <em>CTX Live Theatre</em>
            </cite>
          </Link>
        </blockquote>
        <blockquote className="text-[1.375rem] leading-tight text-pretty sm:text-[1.5rem]">
          <Link
            href="https://sunnewsaustin.com/2026/07/31/oversight-who-should-decide-ais-future/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 transition-colors duration-200 hover:text-amber-300"
          >
            &ldquo;Philosophical, political, deeply human and unnervingly
            timely...an ambitious and provocative and well written work that
            lingers long after the curtain falls.&rdquo;
            <cite className="mt-1 block whitespace-nowrap not-italic text-zinc-400">
              - Elise Krentzel, <em>Sun News Austin</em>
            </cite>
          </Link>
        </blockquote>
        <blockquote className="text-[1.375rem] leading-tight text-pretty sm:text-[1.5rem]">
          <Link
            href="https://www.broadwayworld.com/austin/article/Review-OVERSIGHT-at-Hyde-Park-Theatre-20260801"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 transition-colors duration-200 hover:text-amber-300"
          >
            &ldquo;Ambitious... unsettling... maintains a brisk pace...
            relevant... fascinating... timely... introduces an extraordinary
            range of ideas... increasingly urgent... thought-provoking... a
            steadily escalating political thriller.&rdquo;
            <cite className="mt-1 block whitespace-nowrap not-italic text-zinc-400">
              - Sabrina Wallace, <em>Broadway World Austin</em>
            </cite>
          </Link>
        </blockquote>
      </div>
    </div>
  );
}
