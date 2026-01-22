'use client';

import { TypeAnimation } from 'react-type-animation';

export default function About() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide text-amber-400 uppercase" style={{ fontFamily: 'video, sans-serif', fontWeight: 400 }}>
          <span className="bg-black px-2 py-1 inline-block">
            <TypeAnimation
              sequence={['About']}
              wrapper="span"
              speed={40}
              repeat={0}
              cursor={false}
            />
          </span>
        </h1>
        <p className="mt-2 text-xl text-white whitespace-pre-line" style={{ fontFamily: 'video, sans-serif', fontWeight: 300 }}>
          <span className="bg-black px-2 py-1 inline-block">
            <TypeAnimation
              sequence={[
                300, // Wait for H1 to finish (~200ms + buffer)
                'Oversight is a real-time thriller set entirely inside a government chamber. Drawing on the language of hearings, briefings, and classified testimony, the play locks its audience in a room where decisions are made that can\'t be reversed.\n\nNever offering answers, Oversight invites confrontation. Between elected officials, military leaders, scientists, and private interests. Between urgency and restraint. Between fear and responsibility. The play unfolds as a collision of competing worldviews.\n\n Oversight asks what happens when secrecy becomes necessary, time becomes an enemy, and the people in power must decide how much authority they are willing to claim, and what they\'re willing to sacrifice.',
              ]}
              wrapper="span"
              speed={75}
              repeat={0}
              cursor={false}
            />
          </span>
        </p>
      </div>
    </div>
  );
}
