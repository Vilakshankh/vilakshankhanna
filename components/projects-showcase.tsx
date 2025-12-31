"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ViewToggle } from "@/components/view-toggle"
import { ProjectCard } from "@/components/project-card"

interface ProjectsShowcaseProps {
  variant?: "standalone" | "embedded"
  onViewChange?: (view: "detailed" | "cards") => void
  externalView?: "detailed" | "cards"
  isDark?: boolean
}

export function ProjectsShowcase({ 
  variant = "standalone",
  onViewChange: externalOnViewChange,
  externalView,
  isDark = false
}: ProjectsShowcaseProps) {
  const [internalView, setInternalView] = useState<"detailed" | "cards">("detailed")
  const [isLoading, setIsLoading] = useState(false)

  const view = externalView ?? internalView
  
  const handleViewChange = (newView: "detailed" | "cards") => {
    if (newView !== view) {
      if (externalOnViewChange) {
        externalOnViewChange(newView)
      } else {
        setIsLoading(true)
        setTimeout(() => {
          setInternalView(newView)
          setIsLoading(false)
        }, 500)
      }
    }
  }

  return (
    <>
      {/* View Toggle - only show for standalone variant */}
      {variant === "standalone" && (
        <div className="sticky top-0 z-50 bg-[#1C1C1C] border-b border-white/10 py-4 px-8 md:px-12 lg:px-16 flex justify-end">
          <ViewToggle view={view} onViewChange={handleViewChange} disableList={false} />
        </div>
      )}
      
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[60] bg-[#1C1C1C]/95 flex items-center justify-center">
          <p className="text-white font-helvetica text-sm">Restructuring</p>
        </div>
      )}
      
      {view === "cards" ? (
        <section className={variant === "embedded" ? "py-8 flex flex-col gap-3" : "bg-[#1C1C1C] min-h-screen py-16 md:py-24 px-8 md:px-12 lg:px-16 snap-start snap-always relative"}>
          <div className={variant === "embedded" ? "flex flex-col gap-3" : "max-w-2xl flex flex-col gap-3"}>
            <ProjectCard
              title="555 Studio"
              description="Creative nights event series in Montreal, 1000+ people so far"
              role="Co-organizer | Branding | Community Designer"
              tags={["Branding", "Community Development", "Entrepreneurship", "Design"]}
              links={[
                { label: "Events", href: "https://luma.com/fivefivefive?k=c&period=past" },
                { label: "Instagram", href: "https://www.instagram.com/fivefivefive_studio/" },
                { label: "X", href: "https://x.com/555studio_" },
                { label: "Website", href: "https://fivefivefive.ca" }
              ]}
            />
            <ProjectCard
              title="Trails Legal"
              description="Trails automates manual workflows to help your legal firm deliver fast, high quality output for your clients"
              role="Cofounder | Product Designer | Entrepreneurship | Branding"
              tags={["Product Design", "UI/UX Branding Development", "Web Development", "Business Strategy", "Entrepreneurship", "B2B"]}
              links={[
                { label: "Website", href: "https://trailslegal.com/" },
                { label: "Case Study", href: "/trails-legal-case-study" }
              ]}
            />
            <ProjectCard
              title="The Butterfly Project"
              description="Cowork together and meet new people."
              role="Founder | Product Designer | Community Builder"
              tags={["Product Design", "Community Development", "Business Strategy Development", "Entrepreneurship", "UI/UX", "B2C"]}
            />
          </div>
        </section>
      ) : (
        <>
          {/* FiveFiveFive Studio Section */}
          <section className={variant === "embedded" ? "w-4/5 mx-auto mb-12 flex flex-col" : "relative w-full h-screen overflow-hidden snap-start snap-always"}>
            {variant === "embedded" ? (
              <>
                {/* Logo + Project Name */}
                <div className="flex items-center gap-3 mb-4 pb-2">
                  <Image 
                    src={isDark ? "/Untitled-2_white.png" : "/Untitled-2_black.png"} 
                    alt="555 Studio Logo" 
                    width={32} 
                    height={32}
                    className="object-contain"
                  />
                  <h3 className="font-helvetica text-lg font-medium">555 Studio</h3>
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
                <div className="py-2 flex flex-col gap-3">
                  <span className="inline-flex w-fit px-2 py-0.5 bg-black text-white font-mono text-[10px] mb-1">
                    project
                  </span>
                  <p className="font-helvetica text-xs text-black/60">Co-organizer | Branding | Community Designer</p>
                  <p className="font-helvetica text-xs font-mono tracking-tight">Creative nights event series in Montreal, 1000+ people so far</p>
                  <div className="flex flex-wrap gap-2 text-xs font-helvetica">
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
              </>
            ) : (
              <>
                {/* Standalone variant - keep original overlay layout */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                  <iframe
                    className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
                    src="https://www.youtube.com/embed/y9wt2DvbKVo?autoplay=1&loop=1&mute=1&controls=0&playsinline=1&playlist=y9wt2DvbKVo&modestbranding=1&rel=0&start=0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ pointerEvents: 'none' }}
                  />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
                  <div className="text-white mb-6">
                    <div className="group flex items-center gap-3 mb-2">
                      <Image 
                        src="/Untitled-2_white.png" 
                        alt="555 Studio Logo" 
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                      <p className="text-sm md:text-base font-helvetica">
                        Co-organizer | Branding | Community Designer
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs md:text-sm font-helvetica mb-4">
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
                    <p className="text-xs md:text-sm mb-4 font-helvetica">
                      Creative nights event series in Montreal, 1000+ people so far
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 max-w-md">
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-200 transition-colors cursor-default">Branding</span>
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-200 transition-colors cursor-default">Community Development</span>
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-200 transition-colors cursor-default">Entrepreneurship</span>
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-pink-200 transition-colors cursor-default">Design</span>
                    </div>
                    <div className="group max-w-md">
                      <p className="text-xs md:text-sm mb-4 font-helvetica">
                        FiveFiveFive is a studio that produces creative transformation by exploring and interacting with ideas, people, and spaces.
                      </p>
                      <p className="text-xs md:text-sm mb-6 font-helvetica">
                        The studio creates environments for meaningful interaction, where collaboration and experimentation foster transformation. Through their work, they bridge the gap between vision and reality, crafting experiences that inspire change.
                      </p>
                    </div>
                  </div>
                  <h2 className="group text-4xl md:text-5xl lg:text-6xl font-bold text-white font-helvetica text-right">
                    555 Studio
                  </h2>
                </div>
              </>
            )}
          </section>

          {/* Trails Section */}
          <section className={variant === "embedded" ? "w-4/5 mx-auto mb-12 flex flex-col" : "relative w-full h-screen overflow-hidden snap-start snap-always"}>
            {variant === "embedded" ? (
              <>
                {/* Logo + Project Name */}
                <div className="flex items-center gap-3 mb-4 pb-2">
                  <Image 
                    src="/Asset 15.svg" 
                    alt="Trails Logo" 
                    width={32} 
                    height={32}
                    className="object-contain"
                  />
                  <h3 className="font-helvetica text-lg font-medium">Trails Legal</h3>
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
                <div className="py-2 flex flex-col gap-3">
                  <span className="inline-flex w-fit px-2 py-0.5 bg-black text-white font-mono text-[10px] mb-1">
                    project
                  </span>
                  <p className="font-helvetica text-xs text-black/60">Cofounder | Product Designer | Entrepreneurship | Branding</p>
                  <p className="font-helvetica text-xs font-mono tracking-tight">Trails automates manual workflows to help your legal firm deliver fast, high quality output for your clients</p>
                  <div className="flex flex-wrap gap-2 text-xs font-helvetica">
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
              </>
            ) : (
              <>
                {/* Standalone variant - keep original overlay layout */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                  <Image
                    src="/feature_key legal insights.gif"
                    alt="Trails Background"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 z-[1]" />
                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
                  <div className="text-white mb-6">
                    <div className="group flex items-center gap-3 mb-2">
                      <Image 
                        src="/Asset 15.svg" 
                        alt="Trails Logo" 
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                      <p className="text-sm md:text-base font-helvetica">
                        Cofounder | Product Designer | Entrepreneurship | Branding
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs md:text-sm font-helvetica mb-4">
                      <Link 
                        href="https://trailslegal.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline hover:opacity-70 transition-opacity"
                      >
                        Website
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4 max-w-md">
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-200 transition-colors cursor-default">Product Design</span>
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-indigo-200 transition-colors cursor-default">UI/UX Branding Development</span>
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-teal-500/20 hover:border-teal-500/50 hover:text-teal-200 transition-colors cursor-default">Web Development</span>
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-orange-500/20 hover:border-orange-500/50 hover:text-orange-200 transition-colors cursor-default">Business Strategy</span>
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-200 transition-colors cursor-default">Entrepreneurship</span>
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-yellow-500/20 hover:border-yellow-500/50 hover:text-yellow-200 transition-colors cursor-default">B2B</span>
                    </div>
                    <div className="group max-w-md">
                      <p className="text-xs md:text-sm mb-6 font-helvetica">
                        Trails automates manual workflows to help your legal firm deliver fast, high quality output for your clients
                      </p>
                    </div>
                  </div>
                  <h2 className="group text-4xl md:text-5xl lg:text-6xl font-bold text-white font-helvetica text-right">
                    Trails Legal
                  </h2>
                </div>
              </>
            )}
          </section>

          {/* The Butterfly Project Section */}
          <section className={variant === "embedded" ? "w-4/5 mx-auto flex flex-col" : "relative w-full h-screen overflow-hidden snap-start snap-always"}>
            {variant === "embedded" ? (
              <>
                {/* Logo + Project Name */}
                <div className="flex items-center gap-3 mb-4 pb-2">
                  <Image 
                    src="/WPFQXzXewBVy5FNFqSoY5jaFCWs.webp" 
                    alt="The Butterfly Project Logo" 
                    width={32} 
                    height={32}
                    className="object-contain"
                  />
                  <h3 className="font-helvetica text-lg font-medium">The Butterfly Project</h3>
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
                <div className="py-2 flex flex-col gap-3">
                  <span className="inline-flex w-fit px-2 py-0.5 bg-black text-white font-mono text-[10px] mb-1">
                    project
                  </span>
                  <p className="font-helvetica text-xs text-black/60">Founder | Product Designer | Community Builder</p>
                  <p className="font-helvetica text-xs font-mono tracking-tight">Cowork together and meet new people.</p>
                </div>
              </>
            ) : (
              <>
                {/* Standalone variant - keep original overlay layout */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                  <Image
                    src="/IMG_5698.jpg"
                    alt="The Butterfly Project Background"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 z-[1]" />
                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
                  <div className="text-white mb-6">
                    <div className="group flex items-center gap-3 mb-2">
                      <Image 
                        src="/WPFQXzXewBVy5FNFqSoY5jaFCWs.webp" 
                        alt="The Butterfly Project Logo" 
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                      <p className="text-sm md:text-base font-helvetica">
                        Founder | Product Designer | Community Builder
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4 max-w-md">
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-200 transition-colors cursor-default">Product Design</span>
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-200 transition-colors cursor-default">Community Development</span>
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-orange-500/20 hover:border-orange-500/50 hover:text-orange-200 transition-colors cursor-default">Business Strategy Development</span>
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-200 transition-colors cursor-default">Entrepreneurship</span>
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-200 transition-colors cursor-default">UI/UX</span>
                      <span className="text-xs font-helvetica px-2 py-1 border border-white/30 rounded hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-pink-200 transition-colors cursor-default">B2C</span>
                    </div>
                    <div className="group max-w-md">
                      <p className="text-xs md:text-sm mb-4 font-helvetica">
                        Cowork together and meet new people.
                      </p>
                      <p className="text-xs md:text-sm mb-6 font-helvetica">
                        The parent of 555. The Butterfly projects goal was to cowork and meet new people at the same time. Personality matched together by answering a questionnaire and a new cafe location every coworking session. We made wireframes of product.
                      </p>
                    </div>
                  </div>
                  <h2 className="group text-4xl md:text-5xl lg:text-6xl font-bold text-white font-helvetica text-right">
                    The Butterfly Project
                  </h2>
                </div>
              </>
            )}
          </section>
        </>
      )}
    </>
  )
}

