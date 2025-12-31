"use client"

import Link from "next/link"
import Image from "next/image"

interface ProjectsShowcaseProps {
  variant?: "standalone" | "embedded"
  isDark?: boolean
}

export function ProjectsShowcase({ 
  variant = "embedded",
  isDark = false
}: ProjectsShowcaseProps) {
  return (
    <>
      {/* FiveFiveFive Studio Section */}
      <section className="w-[750px] mx-auto mb-12 flex flex-col">
        {/* Logo + Project Name */}
        <div className="flex items-center gap-3 mb-4 pb-2">
          <Image 
            src={isDark ? "/Untitled-2_white.png" : "/Untitled-2_black.png"} 
            alt="555 Studio Logo" 
            width={32} 
            height={32}
            className="object-contain"
          />
          <h3 className="font-helvetica text-xl font-medium">555 Studio</h3>
        </div>
        
        {/* Media Container */}
        <div className="w-full aspect-[16/10] relative overflow-hidden rounded-sm mb-4">
          <iframe
            className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 scale-150"
            src="https://www.youtube.com/embed/y9wt2DvbKVo?autoplay=1&loop=1&mute=1&controls=0&playsinline=1&playlist=y9wt2DvbKVo&modestbranding=1&rel=0&start=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ pointerEvents: 'none' }}
          />
        </div>
        
        {/* Metadata */}
        <div className="py-2 flex flex-col gap-2.5">
          <span className="inline-flex w-fit px-2 py-0.5 bg-black text-white font-mono text-[11px]">
            project
          </span>
          <p className="font-helvetica text-sm text-black/60">Co-organizer | Branding | Community Designer</p>
          <p className="font-helvetica text-sm font-mono tracking-tight">Creative nights event series in Montreal, 1000+ people so far</p>
          <div className="flex flex-wrap gap-2 text-sm font-helvetica">
            <Link 
              href="https://luma.com/fivefivefive?k=c&period=past" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              Events
            </Link>
            <Link 
              href="https://www.instagram.com/fivefivefive_studio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              Instagram
            </Link>
            <Link 
              href="https://x.com/555studio_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              X
            </Link>
            <Link 
              href="https://fivefivefive.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              Website
            </Link>
          </div>
        </div>
      </section>

      {/* Trails Section */}
      <section className="w-[750px] mx-auto mb-12 flex flex-col">
        {/* Logo + Project Name */}
        <div className="flex items-center gap-3 mb-4 pb-2">
          <Image 
            src="/Asset 10.svg" 
            alt="Trails Logo" 
            width={32} 
            height={32}
            className="object-contain"
          />
          <h3 className="font-helvetica text-xl font-medium">Trails Legal</h3>
        </div>
        
        {/* Media Container */}
        <div className="w-full aspect-[16/10] relative overflow-hidden rounded-sm mb-4">
          <Image
            src="/feature_key legal insights.gif"
            alt="Trails Background"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        
        {/* Metadata */}
        <div className="py-2 flex flex-col gap-2.5">
          <span className="inline-flex w-fit px-2 py-0.5 bg-black text-white font-mono text-[11px]">
            project
          </span>
          <p className="font-helvetica text-sm text-black/60">Cofounder | Product Designer | Entrepreneurship | Branding</p>
          <p className="font-helvetica text-sm font-mono tracking-tight">Trails automates manual workflows to help your legal firm deliver fast, high quality output for your clients</p>
          <div className="flex flex-wrap gap-2 text-sm font-helvetica">
            <Link 
              href="https://trailslegal.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              Website
            </Link>
            <Link 
              href="/trails-legal-case-study" 
              className="underline hover:opacity-70 transition-opacity"
            >
              Case Study
            </Link>
          </div>
        </div>
      </section>

      {/* The Butterfly Project Section */}
      <section className="w-[750px] mx-auto flex flex-col">
        {/* Logo + Project Name */}
        <div className="flex items-center gap-3 mb-4 pb-2">
          <Image 
            src="/WPFQXzXewBVy5FNFqSoY5jaFCWs.webp" 
            alt="The Butterfly Project Logo" 
            width={32} 
            height={32}
            className="object-contain"
          />
          <h3 className="font-helvetica text-xl font-medium">The Butterfly Project</h3>
        </div>
        
        {/* Media Container */}
        <div className="w-full aspect-[16/10] relative overflow-hidden rounded-sm mb-4">
          <Image
            src="/IMG_5698.jpg"
            alt="The Butterfly Project Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Metadata */}
        <div className="py-2 flex flex-col gap-2.5">
          <span className="inline-flex w-fit px-2 py-0.5 bg-black text-white font-mono text-[11px]">
            project
          </span>
          <p className="font-helvetica text-sm text-black/60">Founder | Product Designer | Community Builder</p>
          <p className="font-helvetica text-sm font-mono tracking-tight">Cowork together and meet new people.</p>
        </div>
      </section>
    </>
  )
}

