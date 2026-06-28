import RichText from "@/app/components/RichText";

export default function AboutClient() {
  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div>
        <h1
          className="text-8xl sm:text-[7.5rem] md:text-[9rem] lg:text-[12rem] tracking-wide text-amber-400 uppercase"
          style={{
            fontFamily: '"thunderhouse-pro", sans-serif',
            fontWeight: 400,
          }}
        >
          <span className=" px-2 py-1 inline-block">About</span>
        </h1>
        <p className="mt-2 text-[1.875rem] text-orange-400 whitespace-pre-line">
          <span className="px-2 py-1 inline-block">
            <RichText>
              *Oversight* is a thriller that traps its audience inside a closed
              committee hearing as lawmakers confront a consequential threat.
            </RichText>
          </span>
        </p>
        <p className="mt-2 text-[1.875rem] text-white whitespace-pre-line">
          <span className=" px-2 py-1 inline-block">
            &ldquo;I have just alluded to the unusual nature of our security
            procedures. You should already be aware of most of this, but
            I&apos;ll try to read these directives into the record. First of all,
            this is going to be a no-communications session. Absolutely no
            personal communication with the outside. No personal electronic
            devices, no phones, no cameras, no laptops. There will be no record
            of this meeting at all other than what good old Ms. Cromwell there
            jots down on her trusty stenotype machine.&rdquo; &mdash; Rep. Erin
            Johnston, Committee Chair
          </span>
        </p>
        <p className="mt-2 text-[1.875rem] text-white whitespace-pre-line">
          <span className=" px-2 py-1 inline-block">
            &ldquo;It would be superfluous in me, Senator, to remind you that
            this is war.&rdquo; &mdash; OpenBrain CEO Adam Harriman
          </span>
        </p>
      </div>
    </div>
  );
}
