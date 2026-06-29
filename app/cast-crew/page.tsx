import type { Metadata } from "next";
import Image from "next/image";
import RichText from "@/app/components/RichText";
import { formatMemberTitle, getCastCrewMembers } from "@/app/cast-crew/cast-crew";

export const metadata: Metadata = {
  title: "Cast & Crew | Oversight",
  description: "Meet the cast and crew of Oversight.",
  openGraph: {
    title: "Cast & Crew | Oversight",
    description: "Meet the cast and crew of Oversight.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cast & Crew | Oversight",
    description: "Meet the cast and crew of Oversight.",
    images: ["/og.png"],
  },
};

export default function CastCrewPage() {
  const members = getCastCrewMembers();

  return (
    <div className="flex flex-col gap-10 max-w-5xl">
      <div>
        <h1
          className="text-6xl sm:text-[4.6875rem] md:text-[5.625rem] lg:text-[7.5rem] leading-none tracking-wide text-amber-400 uppercase"
          style={{
            fontFamily: '"thunderhouse-pro", sans-serif',
            fontWeight: 400,
          }}
        >
          Cast &amp; Crew
        </h1>
        <p className="mt-4 text-xl text-zinc-300 sm:text-[1.875rem]">
          The people behind <RichText>*Oversight*</RichText>.
        </p>
      </div>

      <ul className="columns-1 gap-x-8 sm:columns-2 lg:columns-3">
        {members.map((member) => (
          <li
            key={member.imageSrc}
            className="mb-8 break-inside-avoid flex flex-col overflow-hidden rounded-lg border border-zinc-800 bg-black/50"
          >
            <div className="relative aspect-square w-full bg-zinc-900">
              <Image
                src={member.imageSrc}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-3 p-5">
              <h2 className="text-lg leading-none text-white sm:text-xl">
                {member.name}
              </h2>
              <p className="text-base leading-none text-amber-400 sm:text-lg">
                {formatMemberTitle(member.title)}
              </p>
              <p className="text-base leading-snug text-zinc-400 sm:text-lg">
                <RichText>{member.bio}</RichText>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
