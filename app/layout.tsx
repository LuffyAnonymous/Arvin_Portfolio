import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";
import "./globals.css";
const display = Space_Grotesk({variable:"--font-space-grotesk",subsets:["latin"],weight:["500","600","700"]});
const sans = IBM_Plex_Sans({variable:"--font-plex-sans",subsets:["latin"],weight:["400","500","600"]});
const mono = IBM_Plex_Mono({variable:"--font-plex-mono",subsets:["latin"],weight:["400","500"]});
const title = "Arvin Poliga — Virtual Assistant, Support & Developer | Dubai";
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:title,template:`%s | ${site.name}`},description:site.tagline,keywords:["virtual assistant Dubai","remote virtual assistant UAE","customer support specialist Dubai","technical support Dubai","web developer Dubai","CRM support"],authors:[{name:site.name}],alternates:{canonical:"/"},openGraph:{type:"website",locale:"en_AE",url:site.url,siteName:site.name,title,description:site.tagline},twitter:{card:"summary_large_image",title,description:site.tagline}};
export const viewport:Viewport={themeColor:"#142019"};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {return <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}><body className="flex min-h-screen flex-col"><Header/><main className="flex-1">{children}</main><Footer/></body></html>}
