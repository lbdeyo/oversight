"use client";

import AnimatedText from "./components/AnimatedText";

export default function HomeClient() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-2 text-[2.5rem] text-white">
          <span className="bg-black px-2 py-1 inline-block">
            <AnimatedText
              sequence={[
                "A secret commission. A ticking clock. A decision that can't be undone.",
              ]}
              wrapper="span"
              speed={50}
              pageKey="home"
              elementKey="tagline"
            />
          </span>
        </p>
        <h1
          className="text-8xl sm:text-[7.5rem] md:text-[9rem] lg:text-[12rem] tracking-wide text-amber-400 uppercase"
          style={{ fontFamily: '"thunderhouse-pro", sans-serif', fontWeight: 400 }}
        >
          <span className="bg-black px-2 py-1 inline-block">
            <AnimatedText
              sequence={[
                4000,
                "Oversight",
              ]}
              wrapper="span"
              speed={40}
              pageKey="home"
              elementKey="h1"
            />
          </span>
        </h1>
        <p className="mt-2 text-[3rem] text-white whitespace-pre-line">
          <span className="bg-black px-2 py-1 inline-block">
            <AnimatedText
              sequence={[
                4400,
                "A new play by L.B. Deyo.\nComing to Austin, TX in 2026.",
              ]}
              wrapper="span"
              speed={50}
              pageKey="home"
              elementKey="subtitle"
            />
          </span>
        </p>
      </div>
    </div>
  );
}
