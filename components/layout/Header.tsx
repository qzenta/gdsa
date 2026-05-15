"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#5C0000] shadow-lg"
          : "bg-[#5C0000]/95 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#3D0000] text-white/70 text-xs hidden md:block">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex justify-between items-center">
          <span>Reg: {SITE.registration.number} | NPC</span>
          <div className="flex items-center gap-4">
            <a href={`mailto:${SITE.email}`} className="hover:text-[#E8B84B] transition-colors">
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="bg-white rounded-lg overflow-hidden flex items-center justify-center h-10 w-10">
              <Image src="/logo.png" alt="Ghana Diaspora SA" width={40} height={40} className="object-contain w-full h-full" priority />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-white text-base leading-tight">
                Ghana Diaspora SA
              </div>
              <div className="text-[#E8B84B] text-[10px] tracking-widest uppercase">
                Community · Advocacy · Empowerment
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center whitespace-nowrap px-3 py-2 text-sm font-medium rounded transition-colors ${
                    isActive(link.href)
                      ? "text-[#E8B84B]"
                      : "text-white/90 hover:text-[#E8B84B]"
                  }`}
                >
                  {link.label}
                </Link>

                {/* Invisible bridge fills gap so mouse moving into dropdown doesn't close it */}
                {link.children && <div className="absolute top-full left-0 w-full h-2" />}

                {link.children && activeDropdown === link.href && (
                  <div className="absolute top-full left-0 pt-2 w-56 z-50">
                    <div className="bg-[#3D0000] rounded-lg shadow-xl border border-white/10 py-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-[#E8B84B] hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-[#C8960C] text-white text-sm font-semibold rounded-lg hover:bg-[#E8B84B] transition-colors"
            >
              Donate
            </Link>
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle mobile menu"
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav
            className="lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto pb-4 border-t border-white/10"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                {link.children ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-2 py-3 text-white/90 font-medium text-sm"
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === link.href ? null : link.href
                        )
                      }
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileExpanded === link.href ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileExpanded === link.href && (
                      <div className="pl-4 pb-2 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-sm text-white/70 hover:text-[#E8B84B]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-2 py-3 text-sm font-medium ${
                      isActive(link.href) ? "text-[#E8B84B]" : "text-white/90"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2">
              <Link
                href="/donate"
                className="block text-center py-3 bg-[#C8960C] text-white text-sm font-semibold rounded-lg"
              >
                Donate Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
