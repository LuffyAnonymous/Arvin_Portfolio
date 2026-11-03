export const site = {
  name: "Arvin Philip Poliga",
  shortName: "Arvin Poliga",
  role: "Virtual Assistant · Customer Support · Technical Support · Developer",
  location: "Dubai, United Arab Emirates",
  tagline: "Dubai-based virtual assistant, customer support specialist and software developer. Customer operations, CRM, technical support and practical digital solutions.",
  heroSupport: "I bring years of customer-facing experience together with hands-on software development. From managing inquiries and records to building the tools behind the work, I help teams stay organised and customers feel supported.",
  availability: "Open to remote opportunities",
  email: "arvinphilippoliga@gmail.com",
  phone: "+971 54 482 3795",
  linkedin: "https://linkedin.com/in/arvin-philip-poliga-b39914373",
  github: "https://github.com/LuffyAnonymous",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arvinpoliga.com",
} as const;
export const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;
