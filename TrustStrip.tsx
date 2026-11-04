import { trustStats } from "@/config/content";
import { StatValue } from "@/components/ui/StatValue";

/** Statistics strip. Only enabled and verified statistics are shown. Edit them in config/content.ts. */
export function TrustStrip() {
  const stats = trustStats.filter((s) => s.enabled && s.verified);
  if (stats.length === 0) return null;

  return (
    <section aria-label="Meena Events at a glance" className="border-y border-champagne/40 bg-ivory-soft">
      <dl
        className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-12 px-6 py-16 sm:px-10 lg:grid-cols-4 lg:px-12"
      >
        {stats.map((stat) => (
          <div key={stat.id} className="text-center lg:text-left">
            <dt className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-charcoal/70">
              {stat.label}
            </dt>
            <dd className="font-display text-5xl text-wine sm:text-6xl">
              <StatValue value={stat.value} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
