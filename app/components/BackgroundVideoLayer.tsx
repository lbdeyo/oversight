"use client";

export default function BackgroundVideoLayer() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 top-16 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-top opacity-100"
      >
        <source src="/vid/oversight-video-bg-comp.mp4" type="video/mp4" />
        <source src="/vid/oversight-video-bg-comp.mov" />
      </video>
      <div className="absolute inset-0 bg-black/65" />
    </div>
  );
}
