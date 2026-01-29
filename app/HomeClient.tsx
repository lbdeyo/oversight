"use client";

import AnimatedText from "./components/AnimatedText";

export default function HomeClient() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <p
          className="mb-2 text-xl text-white"
          style={{ fontFamily: "video, sans-serif", fontWeight: 300 }}
        >
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
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide text-amber-400 uppercase"
          style={{ fontFamily: "video, sans-serif", fontWeight: 400 }}
        >
          <span className="bg-black px-2 py-1 inline-block">
            <AnimatedText
              sequence={[
                4000, // Wait for tagline to finish typing (~75 chars * 50ms = 3750ms + buffer)
                "Oversight",
              ]}
              wrapper="span"
              speed={40}
              pageKey="home"
              elementKey="h1"
            />
          </span>
        </h1>
        <p
          className="mt-2 text-2xl text-white whitespace-pre-line"
          style={{ fontFamily: "video, sans-serif", fontWeight: 300 }}
        >
          <span className="bg-black px-2 py-1 inline-block">
            <AnimatedText
              sequence={[
                4400, // Wait for tagline + H1 to finish (4000ms + ~360ms + buffer)
                "A new play by L.B. Deyo.\nJuly 30-August 22, 2026.\nHyde Park Theatre, Austin, TX",
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
