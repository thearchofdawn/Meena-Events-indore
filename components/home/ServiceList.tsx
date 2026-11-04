import { services } from "@/config/content";
import { ServiceFeature } from "@/components/home/ServiceFeature";

/** The five core services, shown as alternating editorial rows on the homepage. */
export function ServiceList() {
  return (
    <div className="space-y-28 lg:space-y-40">
      {services.map((service, i) => (
        <ServiceFeature
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          inclusions={[...service.inclusions]}
          image={service.image}
          href={service.href}
          cta={service.cta}
          reverse={i % 2 === 1}
        />
      ))}
    </div>
  );
}
