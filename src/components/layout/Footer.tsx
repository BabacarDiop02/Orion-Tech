import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_INFO, NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";
import Constellation from "@/components/ui/Constellation";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-midnight pt-20 pb-10 overflow-hidden">
      <div className="absolute -top-6 right-6 lg:right-16 opacity-50">
        <Constellation density="footer" className="w-32 h-16 lg:w-44 lg:h-20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          <div className="lg:col-span-5">
            <p className="font-display text-2xl tracking-[0.15em] text-offwhite">
              ORION<span className="text-orion-cyan">·</span>TECH
            </p>
            <p className="mt-4 text-orion-muted max-w-xs">
              Solutions digitales. Conçues avec intention.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.2em] uppercase text-orion-muted mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-offwhite/80 hover:text-orion-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.2em] uppercase text-orion-muted mb-5">
              Réseaux
            </p>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-sm text-offwhite/80 hover:text-orion-cyan transition-colors"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.2em] uppercase text-orion-muted mb-5">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-offwhite/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orion-blue shrink-0" aria-hidden="true" />
                {CONTACT_INFO.city}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orion-blue shrink-0" aria-hidden="true" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-orion-cyan transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orion-blue shrink-0" aria-hidden="true" />
                {CONTACT_INFO.phone}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-orion-muted tracking-wide">
          <p>© 2026 Orion Tech. Tous droits réservés.</p>
          <p className="uppercase tracking-[0.2em]">Conçu à Dakar. Connecté au monde.</p>
        </div>
      </div>
    </footer>
  );
}
