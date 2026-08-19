import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 bg-ink-50">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-ink-900">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-ink-500">
            {site.role} · {site.location}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-600 hover:text-ink-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-1 text-sm text-ink-600">
          <a href={`mailto:${site.email}`} className="hover:text-ink-900">
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-ink-900"
          >
            LinkedIn
          </a>
          {site.github === "[YOUR GITHUB]" ? (
            <span className="text-ink-400">{site.github}</span>
          ) : (
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-ink-900"
            >
              GitHub
            </a>
          )}
        </div>
      </Container>

      <Container className="border-t border-ink-200 py-6">
        <p className="text-xs text-ink-400">
          © {year} {site.name}. Built with Next.js, TypeScript and Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
