"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { budgetRanges, enquiryServiceOptions, eventTypes } from "@/config/content";
import { Button } from "@/components/ui/Button";
import {
  buildEnquiryMessage,
  emptyEnquiry,
  enquiryFieldOrder,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryValues,
} from "@/lib/enquiry";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Status = "idle" | "submitted";

const fieldBase =
  "w-full border-0 border-b border-charcoal/25 bg-transparent px-0 py-3 text-base text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-wine focus:outline-none focus-visible:outline-none aria-[invalid=true]:border-wine disabled:opacity-60";

function Field({
  id,
  label,
  error,
  hint,
  children,
  className = "",
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-charcoal">
        {label}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-2 text-xs text-charcoal/55">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-wine">
          {error}
        </p>
      )}
    </div>
  );
}

export function EnquiryForm() {
  const [values, setValues] = useState<EnquiryValues>(emptyEnquiry);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [banner, setBanner] = useState("");
  const submittingRef = useRef(false);

  const update = <K extends keyof EnquiryValues>(key: K, value: EnquiryValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) {
      setErrors((e) => {
        const next = { ...e };
        delete next[key];
        return next;
      });
    }
  };

  const toggleService = (service: string, checked: boolean) => {
    const next = checked
      ? [...values.services, service]
      : values.services.filter((s) => s !== service);
    update("services", next);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Prevent accidental duplicate submissions (double clicks, Enter key repeats).
    if (submittingRef.current || status === "submitted") return;

    const found = validateEnquiry(values);
    setErrors(found);

    const firstError = enquiryFieldOrder.find((key) => found[key]);
    if (firstError) {
      setBanner("Please check the highlighted fields and try again.");
      const target =
        firstError === "services"
          ? document.getElementById("field-services")
          : document.getElementById(`field-${firstError}`);
      target?.focus();
      return;
    }

    // Keep the guard active until the visitor explicitly starts a new enquiry.
    // This prevents rapid repeat submissions before React commits the status update.
    submittingRef.current = true;
    setBanner("");
    setStatus("submitted");
  };

  const startAgain = () => {
    submittingRef.current = false;
    setValues(emptyEnquiry);
    setErrors({});
    setBanner("");
    setStatus("idle");
  };

  const message = buildEnquiryMessage(values);
  const invalid = (key: keyof EnquiryValues) => (errors[key] ? true : undefined);
  const describedBy = (key: keyof EnquiryValues, hasHint = false) => {
    const ids: string[] = [];
    if (errors[key]) ids.push(`field-${key}-error`);
    if (hasHint && !errors[key]) ids.push(`field-${key}-hint`);
    return ids.length ? ids.join(" ") : undefined;
  };

  if (status === "submitted") {
    return (
      <div className="border-t border-champagne/60 pt-10" role="status" aria-live="polite">
        <h2 className="font-display text-4xl leading-tight text-wine">Thank you, {values.name.trim().split(" ")[0]}.</h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/80">
          Your enquiry is ready. Send it to our team on WhatsApp so we can reply to you. The message is pre-filled with
          the details you entered. Review it, then press send in WhatsApp. Nothing is sent until you do.
        </p>

        <details className="mt-8 max-w-xl border-t border-champagne/50 pt-6">
          <summary className="cursor-pointer text-sm font-medium text-wine">Review your message</summary>
          <pre className="mt-4 whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-charcoal/80">
            {message}
          </pre>
        </details>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href={buildWhatsAppUrl(message)} external variant="primary">
            Continue to WhatsApp
          </Button>
          <Button variant="secondary" onClick={startAgain}>
            Start a new enquiry
          </Button>
        </div>
        <p className="mt-8 text-sm text-charcoal/60">
          Prefer to browse first? <Link href="/portfolio" className="text-wine underline underline-offset-4">View our portfolio</Link>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-x-10 gap-y-9 md:grid-cols-2" aria-describedby={banner ? "form-banner" : undefined}>
      {banner && (
        <p id="form-banner" role="alert" className="md:col-span-2 border border-wine/30 bg-wine/5 px-5 py-4 text-sm text-wine">
          {banner}
        </p>
      )}

      <Field id="field-name" label="Full name *" error={errors.name}>
        <input
          id="field-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={invalid("name")}
          aria-describedby={describedBy("name")}
          className={fieldBase}
        />
      </Field>

      <Field id="field-phone" label="Phone number *" error={errors.phone} hint="Indian mobile number. We reply on this number or WhatsApp.">
        <input
          id="field-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
          aria-invalid={invalid("phone")}
          aria-describedby={describedBy("phone", true)}
          className={fieldBase}
        />
      </Field>

      <Field id="field-email" label="Email (optional)" error={errors.email}>
        <input
          id="field-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={invalid("email")}
          aria-describedby={describedBy("email")}
          className={fieldBase}
        />
      </Field>

      <Field id="field-eventType" label="Type of event *" error={errors.eventType}>
        <select
          id="field-eventType"
          name="eventType"
          required
          value={values.eventType}
          onChange={(e) => update("eventType", e.target.value)}
          aria-invalid={invalid("eventType")}
          aria-describedby={describedBy("eventType")}
          className={`${fieldBase} appearance-none bg-[length:0.6rem] bg-[right_0.25rem_center] bg-no-repeat pr-6`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' fill='none' stroke='%234B1729' stroke-width='1.2'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="">Select an event type</option>
          {eventTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field id="field-eventDate" label="Event date (optional)" error={errors.eventDate} hint="If you have a date in mind. Leave blank if you are still deciding.">
        <input
          id="field-eventDate"
          name="eventDate"
          type="date"
          value={values.eventDate}
          onChange={(e) => update("eventDate", e.target.value)}
          aria-invalid={invalid("eventDate")}
          aria-describedby={describedBy("eventDate", true)}
          className={fieldBase}
        />
      </Field>

      <Field id="field-location" label="Event location *" error={errors.location} hint="City, venue or area.">
        <input
          id="field-location"
          name="location"
          type="text"
          required
          value={values.location}
          onChange={(e) => update("location", e.target.value)}
          aria-invalid={invalid("location")}
          aria-describedby={describedBy("location", true)}
          className={fieldBase}
        />
      </Field>

      <Field id="field-guestCount" label="Estimated guest count (optional)" error={errors.guestCount}>
        <input
          id="field-guestCount"
          name="guestCount"
          type="number"
          inputMode="numeric"
          min={1}
          max={20000}
          step={1}
          value={values.guestCount}
          onChange={(e) => update("guestCount", e.target.value)}
          aria-invalid={invalid("guestCount")}
          aria-describedby={describedBy("guestCount")}
          className={fieldBase}
        />
      </Field>

      <Field id="field-budget" label="Approximate budget (optional)" error={errors.budget}>
        <select
          id="field-budget"
          name="budget"
          value={values.budget}
          onChange={(e) => update("budget", e.target.value)}
          aria-invalid={invalid("budget")}
          aria-describedby={describedBy("budget")}
          className={`${fieldBase} appearance-none`}
        >
          <option value="">Select a range</option>
          {budgetRanges.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </Field>

      <fieldset id="field-services" tabIndex={-1} className="md:col-span-2 focus:outline-none" aria-invalid={invalid("services")} aria-describedby={describedBy("services")}>
        <legend className="text-sm font-medium text-charcoal">Services required *</legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {enquiryServiceOptions.map((service) => {
            const checked = values.services.includes(service);
            return (
              <label key={service} className="flex min-h-11 cursor-pointer items-center gap-3 text-sm text-charcoal/85">
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={checked}
                  onChange={(e) => toggleService(service, e.target.checked)}
                  className="h-4 w-4 accent-[var(--color-wine)]"
                />
                <span>{service}</span>
              </label>
            );
          })}
        </div>
        {errors.services && (
          <p id="field-services-error" role="alert" className="mt-3 text-sm text-wine">
            {errors.services}
          </p>
        )}
      </fieldset>

      <Field id="field-details" label="Tell us more (optional)" error={errors.details} className="md:col-span-2" hint="Themes, traditions, must-have elements or anything we should know.">
        <textarea
          id="field-details"
          name="details"
          rows={4}
          maxLength={1000}
          value={values.details}
          onChange={(e) => update("details", e.target.value)}
          aria-invalid={invalid("details")}
          aria-describedby={describedBy("details", true)}
          className={`${fieldBase} resize-y`}
        />
      </Field>

      <div className="md:col-span-2">
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-charcoal/85">
          <input
            id="field-consent"
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            aria-invalid={invalid("consent")}
            aria-describedby={describedBy("consent")}
            className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-wine)]"
          />
          <span>
            I agree that Meena Events may contact me about this enquiry by phone, WhatsApp or email. *
          </span>
        </label>
        {errors.consent && (
          <p id="field-consent-error" role="alert" className="mt-3 text-sm text-wine">
            {errors.consent}
          </p>
        )}
      </div>

      <div className="md:col-span-2 flex flex-col gap-6 pt-2">
        <p className="text-xs text-charcoal/60">* Required. We use your details only to reply to this enquiry.</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Button type="submit" variant="primary">
            Continue to WhatsApp
          </Button>
          <Button href={buildWhatsAppUrl(message)} external variant="secondary">
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </form>
  );
}
