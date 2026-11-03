"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, site } from "@/lib/site";
export function Header() {
 const [open,setOpen]=useState(false);
 return <header className="sticky top-0 z-50 border-b border-ink-200 bg-ink-50/95 backdrop-blur-md">
 <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-6 md:px-10 xl:px-16">
 <Link href="/#home" onClick={()=>setOpen(false)} className="font-display text-xl font-semibold tracking-[-.05em] text-ink-900">ARVIN<span className="text-accent-500">.</span><span className="ml-3 hidden border-l border-ink-300 pl-3 font-mono text-[10px] font-normal uppercase tracking-widest text-ink-500 sm:inline">Portfolio / 2026</span></Link>
 <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">{navLinks.map(n=><Link key={n.href} className="text-[13px] font-medium text-ink-600 transition-colors hover:text-ink-900" href={n.href}>{n.label}</Link>)}</nav>
 <Link className="hidden items-center gap-2 border border-ink-800 bg-ink-900 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-ink-50 transition-colors hover:bg-accent-700 lg:inline-flex" href="/#contact">Work with me <ArrowUpRight size={15}/></Link>
 <button className="inline-flex p-2 lg:hidden" type="button" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button>
 </div>
 {open && <nav aria-label="Mobile navigation" className="border-t border-ink-200 bg-ink-50 px-6 py-3 lg:hidden">{navLinks.map(n=><Link onClick={()=>setOpen(false)} key={n.href} href={n.href} className="block border-b border-ink-100 py-3 text-sm font-medium text-ink-800">{n.label}</Link>)}</nav>}
 </header>;
}
