import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Meena Events collects and uses the details you share through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-28 pt-40 sm:px-10">
      <h1 className="text-5xl leading-tight">Privacy policy</h1>
      <p className="mt-6 rounded-none border-l-2 border-champagne bg-ivory-soft px-5 py-4 text-sm leading-relaxed text-charcoal/80">
        Draft for review. Meena Events must review and confirm this policy with its legal adviser before publishing.
      </p>
      <div className="mt-12 space-y-6 text-base leading-relaxed text-charcoal/80">
        <p>
          When you submit an enquiry, we collect the details you provide, such as your name, phone number, email address,
          event details and any message you write. We use these details only to respond to your enquiry and to plan your
          event.
        </p>
        <p>
          If you choose to contact us on WhatsApp, the message you send is handled by WhatsApp under its own terms and
          privacy policy.
        </p>
        <p>
          Contact us using the details on the Contact page if you want to ask about your information or request changes.
        </p>
      </div>
    </article>
  );
}
