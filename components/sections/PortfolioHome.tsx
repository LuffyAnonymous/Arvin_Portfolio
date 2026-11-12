import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2, Database, GraduationCap, MapPin, MonitorCog, Phone, Workflow } from "lucide-react";
import { site } from "@/lib/site";
import { Contact } from "@/components/sections/Contact";

const capabilities = [
  { icon: MonitorCog, title: "IT & technical support", detail: "Troubleshooting, incident resolution, systems monitoring and day-to-day IT operations." },
  { icon: BriefcaseBusiness, title: "Systems & business operations", detail: "Ticketing workflows, CRM platforms, customer experience and process improvement." },
  { icon: Workflow, title: "Automation & data", detail: "Python, SQL, n8n, data validation, reporting and connected workflows." },
  { icon: Code2, title: "Software development", detail: "Next.js, React, TypeScript, Flask, PostgreSQL and Supabase." },
];

const projects = [
  { title: "Drawn Light", category: "Architectural technology", description: "An architecture website with immersive 3D viewing and interactive room navigation.", stack: "Next.js · React Three Fiber · Supabase", image: "/project-gallery/drawn-light/01.webp", alt: "Drawn Light architectural visualization website", href: "/work/drawn-light", caseStudy: "/work/drawn-light" },
  { title: "QR Dine In / SettleSeat", category: "Restaurant operations", description: "A table ordering experience connecting guest menus, orders and staff workflows.", stack: "Next.js · TypeScript · PostgreSQL", image: "/project-gallery/qr-dine-in/01.webp", alt: "QR Dine In restaurant ordering experience", href: "/work/qr-dine-in", caseStudy: "/work/qr-dine-in" },
  { title: "GenlinkLab", category: "Internal operations software", description: "A platform for membership records, link management and administrative workflows.", stack: "Python · Flask · SQL", image: "/project-gallery/genlinklab/01.webp", alt: "GenlinkLab membership and operations platform", href: "/work/genlinklab", caseStudy: "/work/genlinklab" },
  { title: "BudgetFlow", category: "Personal finance", description: "A finance application for transactions, budgets, savings goals and reporting.", stack: "Next.js · TypeScript · Prisma · PostgreSQL", image: "/project-gallery/budgetflow/01.webp", alt: "BudgetFlow personal finance application", href: "/work/budgetflow", caseStudy: "/work/budgetflow" },
];

const experience = [
  { role: "Technical Support Specialist", company: "Ticketshop", date: "Aug 2025 – Present", detail: "Monitor ticketing and operational systems, investigate order and data issues, maintain records, and build Python, SQL and n8n automations for reporting and support workflows." },
  { role: "Senior Associate, Customer Support (Healthcare Account)", company: "WNS Global Services", date: "May 2024 – Jun 2025", detail: "Supported healthcare customers by phone and email, processed service requests, maintained records and coordinated escalations with internal teams." },
  { role: "Customer Service Representative / Sales Associate", company: "Foundever", date: "May 2022 – Apr 2024", detail: "Resolved financial services inquiries and account issues, managed cases in Salesforce and Genesys, and recommended relevant products and services." },
];

const skills = [
  ["Programming", "Python · TypeScript · JavaScript · SQL"],
  ["Frameworks", "Next.js · React · Flask · Tailwind CSS · Prisma"],
  ["Automation & data", "n8n · Selenium · Playwright · Excel · Google Sheets"],
  ["Platforms & systems", "PostgreSQL · Supabase · Salesforce · Genesys · REST APIs"],
  ["Creative & visual content", "Adobe Photoshop · Illustrator · Canva · CapCut · ChatGPT · Higgsfield"],
];

export function PortfolioHome() {
  return (
    <div className="site-main">
      <section id="home" className="hero-section">
        <div className="content-width hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> IT PROFESSIONAL <span aria-hidden="true">·</span> DUBAI, UAE</p>
            <h1>Hello, I’m<br /><span>Arvin Philip Poliga.</span></h1>
            <p className="hero-lede">Technology, systems and solutions that make a difference.</p>
            <p className="hero-description">I’m a Computer Science graduate and technology professional specializing in IT support, technical operations, workflow automation, and software development. I enjoy solving technical problems, improving business processes, and building practical digital solutions.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} aria-hidden="true" /></Link>
              <a className="button button-outline" href="/Arvin_Poliga_CV.pdf" download="Arvin_Poliga_CV.pdf">Download my CV <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="hero-meta"><span><MapPin size={16} aria-hidden="true" /> Dubai, United Arab Emirates</span><span>Open to suitable UAE and international opportunities</span></div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-accent" aria-hidden="true" />
            <Image src="/arvin-photo.jpg" alt="Arvin Philip Poliga" fill priority sizes="(max-width: 767px) 90vw, (max-width: 1100px) 42vw, 500px" className="hero-portrait" />
            <div className="portrait-caption"><span className="portrait-caption-dot" /> IT · OPERATIONS · SOFTWARE</div>
          </div>
        </div>
        <div className="content-width facts-strip" aria-label="Professional overview">
          <div><strong>4+ years</strong><span>Customer support & operations experience</span></div>
          <div><strong>BSc</strong><span>Computer Science</span></div>
          <div><strong>Dubai</strong><span>Based in the UAE</span></div>
          <div><strong>Across teams</strong><span>Technical support & customer operations</span></div>
        </div>
      </section>

      <section id="about" className="section section-about">
        <div className="content-width about-layout">
          <div className="section-intro"><p className="section-kicker">ABOUT</p><h2>More than technology.<br /><span>A problem-solving mindset.</span></h2></div>
          <div className="about-copy"><p>I’m a technology professional with a background in IT support, customer operations, and software development. Throughout my career, I’ve worked across different industries, developing practical experience in troubleshooting, systems monitoring, CRM platforms, operational support, and process improvement.</p><p>Outside my professional roles, I enjoy building web applications, experimenting with automation, and exploring technologies that help solve real-world problems. I believe effective technology is about more than making systems work. It’s about making them useful, reliable, and easier for people to work with.</p></div>
        </div>
        <div className="content-width capability-wrap"><div className="capability-heading"><p className="section-kicker">WHAT I BRING</p><h3>Experience that connects people, systems and software.</h3></div><div className="capability-grid">{capabilities.map(({ icon: Icon, title, detail }) => <article className="capability" key={title}><Icon size={21} strokeWidth={1.7} aria-hidden="true" /><h4>{title}</h4><p>{detail}</p></article>)}</div></div>
      </section>

      <section id="projects" className="section section-projects">
        <div className="content-width"><div className="section-heading-row"><div><p className="section-kicker">SELECTED WORK</p><h2>Turning ideas into practical solutions.</h2></div><span className="section-aside">A mix of product development and operational problem-solving.</span></div>
          <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><Link href={project.href} className="project-image-link" aria-label={`View ${project.title}`}><Image src={project.image} alt={project.alt} width={960} height={540} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 45vw" className="project-image" /><span className="image-link-icon"><ArrowUpRight size={18} aria-hidden="true" /></span></Link><div className="project-card-content"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="project-stack">{project.stack}</p><div className="project-links"><Link href={project.href}>View project <ArrowUpRight size={15} aria-hidden="true" /></Link><Link href={project.caseStudy}>Case study <ArrowRight size={15} aria-hidden="true" /></Link></div></div></article>)}</div>
          <p className="project-footnote">Project images are screenshots from the project galleries. GenlinkLab screenshots show interface views and do not expose sensitive records.</p>
          <div className="additional-work"><div><p className="section-kicker">ALSO IN THE WORK</p><h3>Ticketing operations automation</h3><p>Python and SQL tools, data collection, reporting and workflow monitoring built around operational needs.</p></div><Link href="/projects/ticket-operations-automation" className="text-link">Read the case study <ArrowRight size={16} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section id="experience" className="section section-experience">
        <div className="content-width"><div className="section-heading-row"><div><p className="section-kicker">EXPERIENCE & EDUCATION</p><h2>Built through service, systems and hands-on work.</h2></div><span className="section-aside">Professional experience across ticketing, healthcare and financial services.</span></div>
          <div className="experience-layout"><div className="timeline">{experience.map((job) => <article className="timeline-item" key={job.company}><div className="timeline-date">{job.date}</div><div className="timeline-content"><span className="timeline-marker" aria-hidden="true" /><h3>{job.role}</h3><p className="timeline-company">{job.company}</p><p>{job.detail}</p></div></article>)}</div>
            <aside className="credentials"><div className="education-card"><GraduationCap size={22} aria-hidden="true" /><p className="section-kicker">EDUCATION</p><h3>Bachelor of Science<br />in Computer Science</h3></div><div className="skills-panel"><Database size={20} aria-hidden="true" /><p className="section-kicker">SKILLS & TOOLS</p>{skills.map(([label, items]) => <div className="skill-group" key={label}><h4>{label}</h4><p>{items}</p></div>)}</div></aside>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section"><div className="content-width contact-layout"><div><p className="section-kicker">CONTACT</p><h2>Let’s connect and build something meaningful.</h2><p className="contact-lede">I’m always interested in connecting with professionals, exploring new opportunities, and contributing to teams building meaningful technology solutions.</p><div className="contact-details"><a href={`mailto:${site.email}`}>{site.email}<ArrowUpRight size={16} aria-hidden="true" /></a><a href={`tel:${site.phone.replace(/\s/g, "")}`}><Phone size={16} aria-hidden="true" />{site.phone}</a><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={16} aria-hidden="true" /></a><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={16} aria-hidden="true" /></a><span><MapPin size={16} aria-hidden="true" /> Dubai, UAE</span></div></div><Contact /></div></section>
    </div>
  );
}

const previewImages: Record<string, { src: string; alt: string; width: number; height: number }> = {
  qr: { src: "/project-gallery/qr-dine-in/01.webp", alt: "QR Dine In restaurant ordering screenshots", width: 1800, height: 1032 },
  drawn: { src: "/project-gallery/drawn-light/01.webp", alt: "Drawn Light architectural visualization", width: 1800, height: 1017 },
  gen: { src: "/project-gallery/genlinklab/01.webp", alt: "GenlinkLab membership platform", width: 1800, height: 1023 },
  budget: { src: "/project-gallery/budgetflow/01.webp", alt: "BudgetFlow personal finance app", width: 1800, height: 1170 },
};

export function Preview({ kind }: { kind: string }) {
  const preview = previewImages[kind];
  if (!preview) return null;
  return <Image src={preview.src} alt={preview.alt} width={preview.width} height={preview.height} sizes="(max-width: 700px) 100vw, 600px" className="h-auto w-full object-cover" />;
}
