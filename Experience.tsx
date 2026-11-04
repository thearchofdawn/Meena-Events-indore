import { experienceStrengths } from "@/config/content";
import { Reveal } from "@/components/ui/Reveal";

/** Six strengths, set as typographic blocks on a hairline grid. Not cards. */
export function Experience() {
  return (
    <dl className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
      {experienceStrengths.map((item, i) => (
        <Reveal key={item.title} delay={(i % 3) * 0.12} className="border-t border-champagne/50 pt-7">
          <dt className="font-display text-3xl leading-tight text-wine">{item.title}</dt>
          <dd className="mt-4 text-base leading-relaxed text-charcoal/75">{item.text}</dd>
        </Reveal>
      ))}
    </dl>
  );
}
