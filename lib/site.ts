export const site = {
  name: "Arvin Philip Poliga",
  role: "Automation & Data Engineer",
  location: "Dubai, United Arab Emirates",
  tagline:
    "Automation and data engineering services in Dubai. I build business process automation, API integrations, n8n workflows, dashboards and internal tools.",
  heroSupport:
    "I build practical automation workflows, API integrations, dashboards and internal tools that remove repetitive manual work.",
  availability: "Available for freelance projects",
  email: "arvinphilippoliga@gmail.com",
  phone: "+971 54 482 3795",
  linkedin: "https://linkedin.com/in/arvin-philip-poliga-b39914373",
  github: "https://github.com/LuffyAnonymous",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arvinpoliga.com",
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
