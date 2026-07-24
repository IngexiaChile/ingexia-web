"use client";

import { useId, useState, type ChangeEvent, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig, contactHref } from "@/config/site";

type Status = "idle" | "loading" | "success";

type Field = "name" | "email" | "message";

type Values = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type Errors = Partial<Record<Field, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) {
    errors.name = "Ingresa tu nombre.";
  }
  if (!values.email.trim()) {
    errors.email = "Ingresa tu correo.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Ingresa un correo válido.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Cuéntanos brevemente tu necesidad (mínimo 10 caracteres).";
  }
  return errors;
}

// No backend exists for this site — submission opens the visitor's email
// client with the message pre-filled via `mailto:`, honestly presented as
// such (no fake "delivered" confirmation). A real delivery guarantee would
// need an API route + email provider, which is out of scope for this pass.
export function ContactForm() {
  const idPrefix = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function handleChange(field: keyof Values) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setValues((prev) => ({ ...prev, [field]: value }));
      if (field in errors) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");

    const subject = values.company
      ? `Consulta de ${values.name} — ${values.company}`
      : `Consulta de ${values.name}`;
    const body = [
      values.message.trim(),
      "",
      `Nombre: ${values.name}`,
      values.company ? `Empresa: ${values.company}` : null,
      `Email: ${values.email}`,
    ]
      .filter((line): line is string => line !== null)
      .join("\n");

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.setTimeout(() => {
      window.location.href = mailto;
      setStatus("success");
    }, 450);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-blue/30 bg-blue-50 p-6 sm:p-7"
      >
        <p className="text-sm font-semibold text-ink">
          Tu cliente de correo debería haberse abierto con el mensaje listo
          para enviar.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-graphite">
          Si no ocurrió automáticamente, escríbenos directamente a{" "}
          <a
            href={contactHref}
            className="font-medium text-blue-dark underline underline-offset-2 hover:text-blue"
          >
            {siteConfig.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-blue-dark transition-colors duration-200 hover:text-blue"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const fieldBase =
    "mt-1.5 w-full border bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-graphite/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue/25";

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor={`${idPrefix}-name`} className="block text-sm font-medium text-ink">
          Nombre
        </label>
        <input
          id={`${idPrefix}-name`}
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
          className={cn(fieldBase, errors.name ? "border-error" : "border-ink/15 focus:border-blue")}
        />
        {errors.name && (
          <p id={`${idPrefix}-name-error`} className="mt-1.5 text-xs text-error">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-email`} className="block text-sm font-medium text-ink">
          Correo
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
          className={cn(fieldBase, errors.email ? "border-error" : "border-ink/15 focus:border-blue")}
        />
        {errors.email && (
          <p id={`${idPrefix}-email-error`} className="mt-1.5 text-xs text-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`${idPrefix}-company`} className="block text-sm font-medium text-ink">
          Empresa <span className="font-normal text-graphite">(opcional)</span>
        </label>
        <input
          id={`${idPrefix}-company`}
          name="company"
          type="text"
          autoComplete="organization"
          value={values.company}
          onChange={handleChange("company")}
          className={cn(fieldBase, "border-ink/15 focus:border-blue")}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`${idPrefix}-message`} className="block text-sm font-medium text-ink">
          Mensaje
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${idPrefix}-message-error` : undefined}
          className={cn(fieldBase, "resize-none", errors.message ? "border-error" : "border-ink/15 focus:border-blue")}
        />
        {errors.message && (
          <p id={`${idPrefix}-message-error`} className="mt-1.5 text-xs text-error">
            {errors.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-blue bg-blue px-7 text-base font-medium text-surface shadow-[0_10px_28px_-12px_rgba(37,84,214,0.55)] transition-all duration-200 ease-out motion-safe:hover:-translate-y-0.5 hover:bg-blue-dark hover:border-blue-dark hover:shadow-[0_16px_36px_-12px_rgba(37,84,214,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === "loading" && (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          )}
          {status === "loading" ? "Preparando tu mensaje…" : "Solicitar una conversación"}
        </button>
      </div>
    </form>
  );
}
