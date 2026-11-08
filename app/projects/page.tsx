import Link from "next/link";
import {ArrowRight,ArrowUpRight} from "lucide-react";
import {Preview} from "@/components/sections/PortfolioHome";

export const metadata = {
  title: "Projects | Arvin Poliga",
  description: "Explore web applications, technical operations tools, and digital products built by Arvin Poliga.",
};

const projects = [
  {slug:"qr-dine-in",name:"QR Dine In",category:"Restaurant technology",description:"Mobile-first QR table ordering, digital menus, shared bills, and staff-managed order approval.",stack:"Next.js · Prisma · PostgreSQL",visual:"qr",live:"https://qr-dine-in-six.vercel.app/"},
  {slug:"drawn-light",name:"Drawn Light",category:"Architectural visualisation",description:"Cinematic architecture portfolio with interactive 3D scenes, floor plans, and room exploration.",stack:"Next.js · Three.js · Supabase",visual:"drawn",live:"https://drawnlight.net/"},
  {slug:"genlinklab",name:"GenlinkLab",category:"Operations platform",description:"Internal administration platform for membership records, digital links, and bulk operations.",stack:"Python · Flask · PostgreSQL",visual:"gen",live:"https://www.genlinklab.com/"},
  {slug:"budgetflow",name:"BudgetFlow",category:"Personal finance",description:"A financial dashboard for tracking transactions, categorising spending, and managing budgets.",stack:"Next.js · Prisma · PostgreSQL",visual:"budget",live:"https://budgetflow-drab-nine.vercel.app/login"},
  {slug:"automation-data-tools",name:"Automation & Data Tools",category:"Automation",description:"Python, SQL, and workflow tools for streamlining data validation, reporting, and operations.",stack:"Python · SQL · n8n",visual:"automation",live:null},
] as const;

export default function ProjectsPage(){
  return <main className="min-h-screen bg-[#101413] text-[#f0efeb]">
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 lg:px-12">
      <p className="font-mono text-xs uppercase tracking-[.2em] text-[#c6a47b]">03 / Selected work</p>
      <div className="mt-5 flex flex-col justify-between gap-6 border-b border-white/15 pb-12 md:flex-row md:items-end">
        <div><h1 className="font-display text-5xl font-medium tracking-tight sm:text-7xl">All projects<span className="text-[#c6a47b]">.</span></h1><p className="mt-5 max-w-2xl text-base leading-7 text-[#bfc5be]">A closer look at the products, platforms, and practical tools I&apos;ve built. Open a project to see its features and screenshots.</p></div>
        <Link href="/#projects" className="inline-flex shrink-0 items-center gap-2 text-sm text-[#d6b891] hover:text-white">Back to portfolio <ArrowRight size={17}/></Link>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.map(project=><article key={project.slug} className="overflow-hidden rounded-xl border border-white/15 bg-[#161c19] transition-colors hover:border-[#c6a47b]/60">
          <Link href={`/work/${project.slug}`} className="block" aria-label={`View ${project.name} case study`}>
            <div className="aspect-[16/10] overflow-hidden bg-[#202a25]"><Preview kind={project.visual}/></div>
            <div className="px-6 pt-6"><p className="font-mono text-xs uppercase tracking-[.16em] text-[#c6a47b]">{project.category}</p><div className="mt-3 flex items-center justify-between gap-4"><h2 className="font-display text-2xl font-medium">{project.name}</h2><ArrowUpRight size={21} className="shrink-0 text-[#c6a47b]"/></div><p className="mt-3 text-sm leading-6 text-[#bfc5be]">{project.description}</p><p className="mt-4 text-xs text-[#9ea69e]">{project.stack}</p></div>
          </Link>
          <div className="flex flex-wrap gap-5 px-6 pb-6 pt-5 text-sm"><Link href={`/work/${project.slug}`} className="text-[#d6b891] hover:text-white">View case study →</Link>{project.live&&<a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[#bfc5be] hover:text-white">Live website ↗</a>}</div>
        </article>)}
      </div>
    </div>
  </main>;
}
