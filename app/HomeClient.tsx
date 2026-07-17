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
          <p className="-mt-4 text-[2.25rem] leading-none text-white whitespace-pre-line sm:-mt-4 md:-mt-5 lg:-mt-6">
            A new play by L.B. Deyo, coming to Austin, TX in 2026.
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
              href="https://tickets.atxtheatre.org/events/oversight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-amber-400 px-8 py-3 text-lg leading-none text-zinc-950 transition-colors duration-200 hover:bg-amber-300 sm:text-xl"
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
