"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { BUDGET_RANGES, CONTACT_INFO, PROJECT_TYPES } from "@/lib/data";

const inputClasses =
  "w-full bg-transparent border-b border-white/15 py-3 text-offwhite placeholder:text-orion-muted/70 focus:outline-none focus:border-orion-cyan transition-colors";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        throw new Error(payload?.error ?? "Une erreur est survenue.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  };

  return (
    <section id="contact" className="relative bg-navy py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="08" label="Contact" light />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl text-offwhite text-balance">
              Parlons de votre projet.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 space-y-6 text-orion-muted">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-orion-muted/70 mb-1">
                  Localisation
                </p>
                <p className="text-offwhite">{CONTACT_INFO.city}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-orion-muted/70 mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-offwhite hover:text-orion-cyan transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-orion-muted/70 mb-1">
                  Téléphone
                </p>
                <p className="text-offwhite">{CONTACT_INFO.phone}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            {status === "success" ? (
              <div className="rounded-2xl border border-white/10 bg-midnight/60 p-10 text-center">
                <p className="font-display text-2xl text-offwhite">Merci pour votre message.</p>
                <p className="mt-3 text-orion-muted">
                  Notre équipe vous répondra dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
                <div>
                  <label htmlFor="name" className="sr-only">Nom</label>
                  <input id="name" name="name" required placeholder="Nom" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="company" className="sr-only">Entreprise</label>
                  <input id="company" name="company" placeholder="Entreprise" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Téléphone</label>
                  <input id="phone" name="phone" type="tel" placeholder="Téléphone" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="projectType" className="sr-only">Type de projet</label>
                  <select id="projectType" name="projectType" className={`${inputClasses} appearance-none`}>
                    <option value="" className="bg-navy">Type de projet</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-navy">{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="sr-only">Budget estimatif</label>
                  <select id="budget" name="budget" className={`${inputClasses} appearance-none`}>
                    <option value="" className="bg-navy">Budget estimatif</option>
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range} className="bg-navy">{range}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    minLength={10}
                    placeholder="Parlez-nous de votre projet"
                    className={`${inputClasses} resize-none`}
                  />
                </div>
                <div className="sm:col-span-2 flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center gap-2 rounded-full bg-orion-blue px-8 py-3.5 text-sm font-medium text-offwhite transition-all duration-300 hover:bg-orion-blue/90 hover:gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Envoi en cours..." : "Envoyer ma demande"}
                    {status !== "submitting" && (
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-sm text-red-400">{errorMessage}</p>
                  )}
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
