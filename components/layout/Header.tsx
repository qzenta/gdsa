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
          ? "bg-white shadow-md border-b border-[#EDE8E0]"
          : "bg-white/95 backdrop-blur-sm border-b border-[#EDE8E0]"
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#8B1A1A] text-white/80 text-xs hidden md:block">
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
          <Link href="/" className="flex items-center shrink-0">
            <div className="bg-white rounded-xl overflow-hidden inline-block p-1 shadow-sm ring-1 ring-[#EDE8E0]">
              <Image
                src="/logo.png"
                alt="Ghana Diaspora SA"
                width={140}
                height={56}
                className="h-14 w-auto object-contain"
                priority
              />
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
                      ? "text-[#8B1A1A]"
                      : "text-[#1C1C1C]/75 hover:text-[#8B1A1A]"
                  }`}
                >
                  {link.label}
                </Link>

                {/* Invisible bridge fills gap so mouse moving into dropdown doesn't close it */}
                {link.children && <div className="absolute top-full left-0 w-full h-2" />}

                {link.children && activeDropdown === link.href && (
                  <div className="absolute top-full left-0 pt-2 w-56 z-50">
                    <div className="bg-white rounded-lg shadow-xl border border-[#EDE8E0] py-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-[#3A3A3A] hover:text-[#8B1A1A] hover:bg-[#F7F4EF] transition-colors"
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
              className="lg:hidden p-2 text-[#1C1C1C]"
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
            className="lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto pb-4 bg-[#5C0000] border-t border-white/10"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                {link.children ? (
                  <>
                    <div className="flex items-center justify-between border-b border-white/10">
                      <Link
                        href={link.href}
                        className={`flex-1 px-4 py-3 text-sm font-medium ${
                          isActive(link.href) ? "text-[#E8B84B]" : "text-white/90"
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        className="px-4 py-3 text-white/60"
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === link.href ? null : link.href
                          )
                        }
                        aria-label={`Toggle ${link.label} submenu`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${mobileExpanded === link.href ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {mobileExpanded === link.href && (
                      <div className="pl-6 pb-2 space-y-1 bg-[#3D0000]">
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
                    className={`block px-4 py-3 text-sm font-medium border-b border-white/10 ${
                      isActive(link.href) ? "text-[#E8B84B]" : "text-white/90"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 px-4 border-t border-white/10 mt-2">
              <Link
                href="/donate"
                className="block text-center py-3 bg-[#C8960C] text-white text-sm font-semibold rounded-lg hover:bg-[#E8B84B] transition-colors"
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
