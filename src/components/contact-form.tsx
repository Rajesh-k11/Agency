
import { type FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  message: ""
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Errors = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) nextErrors.email = "Please enter your email.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please use a valid email address.";
    }
    if (!values.message.trim()) nextErrors.message = "Please share a short project brief.";
    if (values.message.trim().length > 0 && values.message.trim().length < 20) {
      nextErrors.message = "A little more detail helps us prepare a better response.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);

    if (!validate()) return;

    setSubmitted(true);
    setValues(initialState);
    setErrors({});
  };

  const inputClassName =
    "mt-3 w-full rounded-[1.25rem] border bg-[var(--bg-primary)] px-4 py-4 text-base text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]";

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-tertiary)]">Project inquiry</p>
          <h3 className="mt-5 font-display text-4xl tracking-[-0.05em]">Tell us what you are building.</h3>
        </div>
        <div className="hidden rounded-full border border-[var(--border-subtle)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] sm:block">
          WCAG AA ready
        </div>
      </div>

      <form className="mt-10 space-y-6" noValidate onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-sm text-[var(--text-secondary)]">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            className={`${inputClassName} ${
              errors.name ? "border-[color:var(--warning)]" : "border-[var(--border-subtle)]"
            }`}
            placeholder="Avery Morgan"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-sm text-[var(--warning)]">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm text-[var(--text-secondary)]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            className={`${inputClassName} ${
              errors.email ? "border-[color:var(--warning)]" : "border-[var(--border-subtle)]"
            }`}
            placeholder="avery@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-sm text-[var(--warning)]">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className="text-sm text-[var(--text-secondary)]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={values.message}
            onChange={(event) =>
              setValues((current) => ({ ...current, message: event.target.value }))
            }
            className={`${inputClassName} resize-none ${
              errors.message ? "border-[color:var(--warning)]" : "border-[var(--border-subtle)]"
            }`}
            placeholder="We’re preparing a launch for a product platform and need strategy, website design, and frontend support."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-sm text-[var(--warning)]">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[var(--cta-bg)] px-6 py-4 text-sm font-medium text-[var(--cta-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--card-bg)]"
          >
            Send inquiry
          </button>
          <p className="text-sm text-[var(--text-tertiary)]">Average reply time: under 24 hours</p>
        </div>

        {submitted ? (
          <div
            className="rounded-[1.5rem] border border-[color:var(--success)]/30 bg-[color:var(--success)]/10 px-5 py-4 text-sm text-[var(--success)]"
            role="status"
          >
            Thank you. Your inquiry has been prepared successfully. We’ll be in touch shortly.
          </div>
        ) : null}
      </form>
    </div>
  );
}
