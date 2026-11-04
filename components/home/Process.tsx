import { processSteps } from "@/config/content";
import { Reveal } from "@/components/ui/Reveal";

/** Five-stage process. Numbering is used because the content is a genuine sequence. */
export function Process() {
  return (
    <ol className="grid gap-14 md:grid-cols-5 md:gap-8">
      {processSteps.map((step, i) => (
        <li key={step.title}>
        <Reveal delay={i * 0.14} className="relative border-t border-champagne/60 pt-7">
          <span className="font-display text-4xl leading-none text-champagne">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="font-display mt-5 text-3xl text-ivory">{step.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-ivory/75">{step.text}</p>
        </Reveal>
        </li>
      ))}
    </ol>
  );
}
