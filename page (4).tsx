import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms and Conditions",
  description: "Terms and conditions for using the Meena Events website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-28 pt-40 sm:px-10">
      <h1 className="text-5xl leading-tight">Terms and conditions</h1>
      <p className="mt-6 border-l-2 border-champagne bg-ivory-soft px-5 py-4 text-sm leading-relaxed text-charcoal/80">
        Draft for review. Meena Events must review and confirm these terms with its legal adviser before publishing.
      </p>
      <div className="mt-12 space-y-6 text-base leading-relaxed text-charcoal/80">
        <p>
          The information on this website is provided for general guidance. Services, packages and pricing are confirmed
          individually after a consultation and in writing.
        </p>
        <p>
          Images on this website that are marked as placeholders are illustrative and do not depict completed Meena Events
          projects.
        </p>
        <p>Submitting an enquiry does not create a contract. A booking is confirmed only when agreed in writing.</p>
      </div>
    </article>
  );
}
