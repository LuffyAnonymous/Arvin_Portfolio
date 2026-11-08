export const site = {
  name: "Arvin Philip Poliga",
  shortName: "Arvin Poliga",
  role: "IT Professional · Systems & Automation · Software Development",
  location: "Dubai, United Arab Emirates",
  tagline: "Explore the professional portfolio of Arvin Philip Poliga, a Dubai-based IT professional specializing in technical support, systems operations, workflow automation, and software development.",
  heroSupport: "A technology professional connecting IT support, operations, automation and software development.",
  availability: "Open to suitable UAE and international opportunities",
  email: "arvinphilippoliga@gmail.com",
  phone: "+971 54 482 3795",
  linkedin: "https://linkedin.com/in/arvin-philip-poliga-b39914373",
  github: "https://github.com/LuffyAnonymous",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arvinpoliga.com",
} as const;
export const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
] as const;
