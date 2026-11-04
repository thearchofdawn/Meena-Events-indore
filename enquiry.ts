import { budgetRanges, enquiryServiceOptions, eventTypes } from "@/config/content";

export type EnquiryValues = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  location: string;
  guestCount: string;
  budget: string;
  services: string[];
  details: string;
  consent: boolean;
};

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

export const emptyEnquiry: EnquiryValues = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  eventDate: "",
  location: "",
  guestCount: "",
  budget: "",
  services: [],
  details: "",
  consent: false,
};

export const enquiryFieldOrder: (keyof EnquiryValues)[] = [
  "name",
  "phone",
  "email",
  "eventType",
  "eventDate",
  "location",
  "guestCount",
  "budget",
  "services",
  "details",
  "consent",
];

/** Removes spaces, hyphens and brackets so any common Indian format is accepted. */
export function normalisePhone(value: string): string {
  return value.replace(/[\s\-()]/g, "");
}

/** Accepts 10-digit mobiles starting 6–9, optionally prefixed by +91, 91 or 0. */
export function isValidIndianMobile(value: string): boolean {
  return /^(\+?91|0)?[6-9]\d{9}$/.test(normalisePhone(value));
}

function localIsoDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function validateEnquiry(values: EnquiryValues, today: Date = new Date()): EnquiryErrors {
  const errors: EnquiryErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Enter your full name.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Enter a phone number so we can reply.";
  } else if (!isValidIndianMobile(values.phone)) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter an email address in the format name@example.com.";
  }

  if (!values.eventType || !(eventTypes as readonly string[]).includes(values.eventType)) {
    errors.eventType = "Choose the type of event.";
  }

  if (values.eventDate && values.eventDate < localIsoDate(today)) {
    errors.eventDate = "Choose today or a future date.";
  }

  if (values.location.trim().length < 2) {
    errors.location = "Tell us where the event will take place.";
  }

  if (values.guestCount.trim()) {
    const n = Number(values.guestCount);
    if (!Number.isInteger(n) || n < 1 || n > 20000) {
      errors.guestCount = "Enter a whole number between 1 and 20,000.";
    }
  }

  if (values.budget && !(budgetRanges as readonly string[]).includes(values.budget)) {
    errors.budget = "Choose a budget from the list, or leave it blank.";
  }

  const validServices = values.services.filter((s) =>
    (enquiryServiceOptions as readonly string[]).includes(s)
  );
  if (validServices.length === 0) {
    errors.services = "Select at least one service.";
  }

  if (values.details.length > 1000) {
    errors.details = "Keep additional details under 1,000 characters.";
  }

  if (!values.consent) {
    errors.consent = "Please agree to be contacted about your enquiry.";
  }

  return errors;
}

/** Builds the pre-filled WhatsApp message from whatever the visitor has entered. */
export function buildEnquiryMessage(values: Partial<EnquiryValues>): string {
  const lines: string[] = ["Hello Meena Events, I would like to enquire about an event."];
  const add = (label: string, value?: string) => {
    if (value && value.trim()) lines.push(`${label}: ${value.trim()}`);
  };

  add("Name", values.name);
  add("Phone", values.phone);
  add("Email", values.email);
  add("Event type", values.eventType);
  add("Event date", values.eventDate);
  add("Location", values.location);
  add("Guests (estimated)", values.guestCount);
  add("Budget", values.budget);
  if (values.services && values.services.length) add("Services", values.services.join(", "));
  add("Details", values.details);

  return lines.join("\n");
}
