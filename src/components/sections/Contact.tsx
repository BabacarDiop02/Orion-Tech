"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { CONTACT_INFO } from "@/lib/data";

const PROJECT_TYPES = [
  "Site web",
  "Application mobile",
  "Logiciel sur mesure",
  "Plateforme digitale",
  "E-commerce",
  "Autre",
];

const BUDGET_RANGES = [
  "Moins de 2 000 000 FCFA",
  "2 000 000 – 5 000 000 FCFA",
  "5 000 000 – 15 000 000 FCFA",
  "Plus de 15 000 000 FCFA",
  "À discuter",
];

const inputClasses =
  "w-full bg-transparent border-b border-white/15 py-3 text-offwhite placeholder:text-orion-gray/70 focus:outline-none focus:border-orion-cyan transition-colors";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-deepspace py-28 lg:py-36">
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
            <div className="mt-12 space-y-6 text-orion-gray">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-orion-blue shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-orion-gray/70 mb-1">
                    Localisation
                  </p>
                  <p className="text-offwhite">{CONTACT_INFO.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-orion-blue shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-orion-gray/70 mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-offwhite hover:text-orion-cyan transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-orion-blue shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-orion-gray/70 mb-1">
                    Téléphone
                  </p>
                  <p className="text-offwhite">{CONTACT_INFO.phone}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            {submitted ? (
              <div className="rounded-2xl border border-white/10 bg-midnight/60 p-10 text-center">
                <p className="font-display text-2xl text-offwhite">Merci pour votre message.</p>
                <p className="mt-3 text-orion-gray">
                  Notre équipe vous répondra dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Nom
                  </label>
                  <input id="name" name="name" required placeholder="Nom" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="company" className="sr-only">
                    Entreprise
                  </label>
                  <input id="company" name="company" placeholder="Entreprise" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
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
                  <label htmlFor="phone" className="sr-only">
                    Téléphone
                  </label>
                  <input id="phone" name="phone" type="tel" placeholder="Téléphone" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="projectType" className="sr-only">
                    Type de projet
                  </label>
                  <select id="projectType" name="projectType" className={`${inputClasses} appearance-none`}>
                    <option value="" className="bg-deepspace">
                      Type de projet
                    </option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-deepspace">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="sr-only">
                    Budget estimatif
                  </label>
                  <select id="budget" name="budget" className={`${inputClasses} appearance-none`}>
                    <option value="" className="bg-deepspace">
                      Budget estimatif
                    </option>
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range} className="bg-deepspace">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Parlez-nous de votre projet"
                    className={`${inputClasses} resize-none`}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-orion-blue px-8 py-3.5 text-sm font-medium text-offwhite transition-all duration-300 hover:bg-orion-blue/90 hover:gap-3"
                  >
                    Envoyer ma demande
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
