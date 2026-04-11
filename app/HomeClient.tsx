"use client";

import Link from "next/link";
import AnimatedText from "./components/AnimatedText";

export default function HomeClient() {
  return (
    <div className="flex flex-col gap-4 -mt-4 sm:-mt-2">
      <div className="flex flex-col gap-0">
        <p className="text-[2.5rem] leading-tight text-white">
          <AnimatedText
            sequence={[
              "A secret commission. A ticking clock. A decision that can't be undone.",
            ]}
            wrapper="span"
            speed={50}
            pageKey="home"
            elementKey="tagline"
          />
        </p>
        <div className="-mt-3 flex flex-col sm:-mt-4 md:-mt-5 lg:-mt-4">
          <h1
            className="text-8xl sm:text-[7.5rem] md:text-[9rem] lg:text-[12rem] leading-none tracking-wide text-amber-400 uppercase"
            style={{
              fontFamily: '"thunderhouse-pro", sans-serif',
              fontWeight: 400,
            }}
          >
            <AnimatedText
              sequence={[4000, "Oversight"]}
              wrapper="span"
              speed={40}
              pageKey="home"
              elementKey="h1"
            />
          </h1>
          <p className="-mt-4 text-[3rem] leading-tight text-white whitespace-pre-line sm:-mt-4 md:-mt-5 lg:-mt-6">
            <AnimatedText
              sequence={[
                4400,
                "A new play by L.B. Deyo, coming to Austin, TX in 2026.",
              ]}
              wrapper="span"
              speed={50}
              pageKey="home"
              elementKey="subtitle"
            />
          </p>
          <p className="-mt-1 text-3xl font-normal uppercase leading-tight tracking-wide text-zinc-300 sm:-mt-2 sm:text-4xl">
            July 30–August 22 at{" "}
            <Link
              href="https://www.hydeparktheatre.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit transition-colors duration-200 hover:text-amber-400"
            >
              Hyde Park Theatre
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full max-w-4xl">
        <div className="relative aspect-video overflow-hidden rounded-lg border border-zinc-800 bg-black">
          <iframe
            src="https://www.youtube.com/embed/qSPlg1qkSA4?si=gje_OrABBdxWoGqw"
            title="Oversight video"
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
