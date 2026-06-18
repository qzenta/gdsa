import Link from "next/link";
import Image from "next/image";
import { SITE, SUPPORT_SERVICES } from "@/lib/site";
import { Mail, MapPin } from "lucide-react";

const supportLinks = SUPPORT_SERVICES.slice(0, 6);

const SOCIAL_ICONS = [
  { href: SITE.social.facebook, label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { href: SITE.social.twitter, label: "X (Twitter)", path: "M4 4l16 16M4 20L20 4" },
  { href: SITE.social.instagram, label: "Instagram", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M2 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" },
  { href: SITE.social.youtube, label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z" },
  { href: SITE.social.linkedin, label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" },
];

export default function Footer() {
  return (
    <footer className="bg-[#8B1A1A] relative overflow-hidden text-white/80">
      {/* Watermark logo */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <Image
          src="/logo.png"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          sizes="100vw"
        />
      </div>

      {/* Main footer */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="bg-white rounded-xl overflow-hidden inline-block p-1">
                <Image src="/logo.png" alt="Ghana Diaspora SA" width={160} height={64} className="h-16 w-auto object-contain" />
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Empowering African migrants. Building community. Advancing rights in South Africa since 2020.
            </p>
            <div className="flex gap-3">
              {SOCIAL_ICONS.map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center hover:bg-[#C8960C] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Migrant Support
            </h3>
            <ul className="space-y-2.5">
              {supportLinks.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/support/${s.slug}`}
                    className="text-sm hover:text-[#E8B84B] transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/support" className="text-sm text-[#E8B84B] hover:underline">
                  All support services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Organisation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Organisation
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "About GDSA", href: "/about" },
                { label: "News & Advocacy", href: "/news" },
                { label: "Events", href: "/events" },
                { label: "Membership", href: "/membership" },
                { label: "Resource Centre", href: "/resources" },
                { label: "Donate", href: "/donate" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-[#E8B84B] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8B84B] mt-0.5 shrink-0" />
                <span className="text-sm">{SITE.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E8B84B] shrink-0" />
                <a href={`mailto:${SITE.email}`} className="text-sm hover:text-[#E8B84B] transition-colors">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-white/10 rounded-lg border border-white/15">
              <p className="text-xs text-white/60 mb-1">Registration</p>
              <p className="text-xs text-white font-mono">{SITE.registration.number}</p>
              <p className="text-xs text-white/60 mt-1">{SITE.registration.type}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Ghana Diaspora SA (GDSA). All rights reserved. NPC Reg: {SITE.registration.number}
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/80 transition-colors">
              Terms of Use
            </Link>
            <span className="text-white/20">·</span>
            <a href="https://qzenta.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Powered by Qzenta</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
