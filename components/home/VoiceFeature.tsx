export function VoiceFeature() {
  return (
    <section className="bg-night-top text-night-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-2">
        <div className="order-2 flex justify-center lg:order-1">
          <Waveform />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            The MoonPage difference
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Hear it in your voice.
          </h2>
          <p className="mt-4 max-w-md text-lg text-night-muted">
            Professional narration, original music, device read-aloud — or
            your own recording. Away for the night? They can still hear Mom
            or Dad reading, right on schedule.
          </p>
        </div>
      </div>
    </section>
  );
}

function Waveform() {
  const bars = [8, 20, 32, 44, 30, 50, 22, 38, 14, 46, 26, 18, 34, 12, 40];
  return (
    <div className="flex h-40 items-center gap-1.5 rounded-3xl bg-white/5 px-8" aria-hidden>
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-2 rounded-full bg-gradient-to-t from-accent to-gold"
          style={{ height: `${h * 2}px` }}
        />
      ))}
    </div>
  );
}
