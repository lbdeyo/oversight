"use client";

import { usePathname } from "next/navigation";

export default function BackgroundVideoLayer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="fixed inset-0 z-0 flex justify-center">
      <div className="absolute inset-0 bg-zinc-950" />
      {!isHome && (
        <div className="relative h-full w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 rounded-lg bg-black" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full rounded-lg object-cover object-top opacity-75 md:opacity-50"
          >
            <source src="/vid/oversight-site-bg.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}
