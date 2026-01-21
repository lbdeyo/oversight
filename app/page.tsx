'use client';

import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-wide" style={{ fontFamily: 'video, sans-serif', fontWeight: 400 }}>
          <span className="bg-black px-2 py-1 inline-block">
            <TypeAnimation
              sequence={['Oversight']}
              wrapper="span"
              speed={75}
              repeat={0}
              cursor={false}
            />
          </span>
        </h1>
        <p className="mt-2 text-2xl text-white" style={{ fontFamily: 'video, sans-serif', fontWeight: 300 }}>
          <span className="bg-black px-2 py-1 inline-block">
            <TypeAnimation
              sequence={[
                300, // Wait 0.3 second after H1 finishes
                'A new play by L.B. Deyo. Coming to Austin, TX in 2026.',
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
            />
          </span>
        </p>
      </div>
    </div>
  );
}
