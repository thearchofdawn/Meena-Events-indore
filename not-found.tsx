import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80svh] max-w-3xl flex-col items-start justify-center px-6 pt-32 pb-24 sm:px-10">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-wine">Page not found</p>
      <h1 className="mt-6 text-balance text-5xl leading-tight sm:text-6xl">This page has moved, or never existed.</h1>
      <p className="mt-6 text-base leading-relaxed text-charcoal/75">
        Explore our services and celebrations, or contact the team and we will point you in the right direction.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button href="/">Back to home</Button>
        <Button href="/portfolio" variant="secondary">
          View portfolio
        </Button>
      </div>
      <Link href="/contact" className="mt-8 text-sm text-wine underline underline-offset-4">
        Contact Meena Events
      </Link>
    </section>
  );
}
