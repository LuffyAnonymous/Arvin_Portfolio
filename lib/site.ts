export const site = {
  name: "Arvin Philip Poliga",
  role: "Automation & Data Engineer",
  location: "Dubai, United Arab Emirates",
  tagline:
    "I build practical business automations, dashboards, and data workflows that eliminate repetitive work and help teams work faster.",
  email: "arvinphilippoliga@gmail.com",
  phone: "+971 54 482 3795",
  linkedin: "https://linkedin.com/in/arvin-philip-poliga-b39914373",
  github: "[YOUR GITHUB]",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arvinpoliga.com",
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
