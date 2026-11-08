import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="site-footer"><div className="content-width footer-inner"><div><Link href="/#home" className="footer-name">{site.name}</Link><p>{site.role}</p></div><nav aria-label="Footer links"><Link href="/#about">About</Link><Link href="/#experience">Experience</Link><Link href="/#projects">Projects</Link><Link href="/#contact">Contact</Link></nav><div className="footer-social"><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={`mailto:${site.email}`}>Email</a></div></div><div className="content-width footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>Dubai, United Arab Emirates</span></div></footer>;
}
