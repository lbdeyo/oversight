export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide" style={{ fontFamily: 'video, sans-serif' }}>
          <span className="bg-black px-2 py-1 inline-block">Oversight</span>
        </h1>
        <p className="mt-2 text-2xl text-zinc-400" style={{ fontFamily: 'video, sans-serif', fontWeight: 300 }}>
          <span className="bg-black px-2 py-1 inline-block">
            A new play by L.B. Deyo. Coming to Austin, TX in 2026.
          </span>
        </p>
      </div>
    </div>
  );
}
