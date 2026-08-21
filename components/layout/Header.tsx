"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-ink-50/95 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? "border-ink-200" : "border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="#home"
            className="font-display text-xl font-semibold tracking-tight text-ink-900"
            onClick={() => setOpen(false)}
          >
            {site.shortName}
          </Link>
          <span
            className="hidden items-center gap-1.5 border-l border-ink-200 pl-3 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-ink-400 xl:flex"
            aria-hidden
          >
            n8n · Python · TypeScript
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative inline-block py-1 text-sm transition-[transform,color] duration-150 ease-out hover:scale-110 ${
                  isActive ? "text-accent-600" : "text-ink-600 hover:text-ink-900"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent-500 transition-[width] duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <Link
          href="#contact"
          className="hidden rounded-full bg-accent-600 px-5 py-2.5 text-sm font-medium text-ink-50 transition-colors duration-150 hover:bg-accent-700 md:inline-flex"
        >
          Let’s Talk
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-ink-800 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open ? (
        <nav
          className="border-t border-ink-200 bg-ink-50 px-6 py-6 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base text-ink-800 hover:bg-ink-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
