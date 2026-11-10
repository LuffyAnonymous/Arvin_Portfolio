"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link.href.split("#")[1])).filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.35, 0.6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <header className="site-header"><div className="content-width header-inner">
    <Link href="/#home" className="wordmark" aria-label="Arvin Philip Poliga, home" onClick={() => setOpen(false)}><span>AP<span className="wordmark-dot">.</span></span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map((link) => <Link key={link.href} href={link.href} className={active === link.href.split("#")[1] ? "active" : undefined} aria-current={active === link.href.split("#")[1] ? "location" : undefined}>{link.label}</Link>)}</nav>
    <a className="header-cv" href="/Arvin_Poliga_CV_Cheshno_Updated.pdf" download="Arvin_Poliga_CV_Cheshno_Updated.pdf"><Download size={15} aria-hidden="true" /> Download CV</a>
    <button className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
  </div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map((link) => <Link key={link.href} href={link.href} className={active === link.href.split("#")[1] ? "active" : undefined} aria-current={active === link.href.split("#")[1] ? "location" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}<a href="/Arvin_Poliga_CV_Cheshno_Updated.pdf" download="Arvin_Poliga_CV_Cheshno_Updated.pdf" onClick={() => setOpen(false)}><Download size={16} aria-hidden="true" /> Download CV</a></nav>}</header>;
}
