"use client";

import AnimatedText from "../components/AnimatedText";

export default function AboutClient() {
  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide text-amber-400 uppercase"
          style={{
            fontFamily: '"ltc-octic-gothic-one", sans-serif',
            fontWeight: 400,
          }}
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
        <p className="mt-2 text-xl text-orange-400 whitespace-pre-line">
          <span className="bg-black px-2 py-1 inline-block">
            <AnimatedText
              sequence={[
                300,
                "Oversight is a thriller that traps its audience inside a closed committee hearing as lawmakers confront a consequential threat.",
              ]}
              wrapper="span"
              speed={85}
              pageKey="about"
              elementKey="description"
            />
          </span>
        </p>
        <p className="mt-2 text-xl text-white whitespace-pre-line">
          <span className="bg-black px-2 py-1 inline-block">
            <AnimatedText
              sequence={[
                2600,
                '"I have just alluded to the unusual nature of our security procedures, and, ah, well. You should already be aware of most of this, but I\'ll try to read these directives into the record. First of all, this is going to be a no-communications session. Absolutely no personal communication with the outside. No personal electronic devices, no phones, no cameras, no laptops. There will be no record of this meeting at all other than what good old Ms. Cromwell there jots down on her trusty stenotype machine." -- Rep. Erin Johnston, Committee Chair',
              ]}
              wrapper="span"
              speed={85}
              pageKey="about"
              elementKey="quote1"
            />
          </span>
        </p>
        <p className="mt-2 text-xl text-white whitespace-pre-line">
          <span className="bg-black px-2 py-1 inline-block">
            <AnimatedText
              sequence={[
                12800,
                '"It would be superfluous in me, Senator, to remind you that this is war." -- OpenBrain CEO Adam Harriman',
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
