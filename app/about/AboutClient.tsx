"use client";

import AnimatedText from "../components/AnimatedText";

export default function AboutClient() {
  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide text-amber-400 uppercase"
          style={{ fontFamily: "video, sans-serif", fontWeight: 400 }}
        >
          <span className="bg-black px-2 py-1 inline-block">
            <AnimatedText
              sequence={["About"]}
              wrapper="span"
              speed={40}
              pageKey="about"
              elementKey="h1"
            />
          </span>
        </h1>
        <p
          className="mt-2 text-3xl text-orange-500 whitespace-pre-line"
          style={{ fontFamily: "video, sans-serif", fontWeight: 300 }}
        >
          <span className="bg-black px-2 py-1 inline-block">
            <AnimatedText
              sequence={[
                300, // Wait for H1 to finish (~200ms + buffer)
                "Oversight is a thriller that locks its audience in a legislative conference room to witness secret deliberations.",
              ]}
              wrapper="span"
              speed={85}
              pageKey="about"
              elementKey="quote1"
            />
          </span>
        </p>
        <p
          className="mt-2 text-xl text-white whitespace-pre-line"
          style={{ fontFamily: "video, sans-serif", fontWeight: 300 }}
        >
          <span className="bg-black px-2 py-1 inline-block">
            <AnimatedText
              sequence={[
                2600, // Wait for p1 to finish (~200ms + buffer)
                '"I have just alluded to the unusual nature of our security procedures, and, ah, well. You should already be aware of most of this, but I\'ll try to read these directives into the record. First of all, this is going to be a no-communications session. Absolutely no personal communication with the outside. No personal electronic devices, no phones, no cameras, no laptops. There will be no record of this meeting at all other than what good old Ms. Cromwell there jots down on her trusty stenotype machine." \n-- Rep. Erin Johnston, Committee Chair',
              ]}
              wrapper="span"
              speed={85}
              pageKey="about"
              elementKey="quote1"
            />
          </span>
        </p>
        <p
          className="mt-2 text-xl text-white whitespace-pre-line"
          style={{ fontFamily: "video, sans-serif", fontWeight: 300 }}
        >
          <span className="bg-black px-2 py-1 inline-block">
            <AnimatedText
              sequence={[
                12800, // Wait for H1 to finish (~200ms + buffer)
                '"It would be superfluous in me, Senator, to remind you that this is war." \n-- OpenBrain CEO Adam Harriman',
              ]}
              wrapper="span"
              speed={50}
              pageKey="about"
              elementKey="quote2"
            />
          </span>
        </p>
      </div>
    </div>
  );
}
