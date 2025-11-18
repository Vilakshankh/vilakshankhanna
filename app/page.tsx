"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ViewToggle } from "@/components/view-toggle"
import { ProjectCard } from "@/components/project-card"
import { HeroNavigation } from "@/components/hero-navigation"

export default function Home() {
  const [view, setView] = useState<"detailed" | "cards">("detailed")
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<"work" | "projects">("projects")
  const scrollPositionRef = useRef<number>(0)
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section")
    if (projectsSection) {
      setActiveTab("projects")
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  const scrollToWork = () => {
    scrollPositionRef.current = window.scrollY
    setActiveTab("work")
    const projectsSection = document.getElementById("projects-section")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  const handleViewChange = (newView: "detailed" | "cards") => {
    if (newView !== view) {
      setIsLoading(true)
      setTimeout(() => {
        setView(newView)
        setIsLoading(false)
      }, 500)
    }
  }

  // Preserve scroll position when switching tabs
  useEffect(() => {
    const handleScroll = () => {
      scrollPositionRef.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Disable scroll snap when work tab is active
    if (activeTab === "work") {
      document.documentElement.style.scrollSnapType = 'none'
      // Restore scroll position after render with multiple attempts
      const restoreScroll = () => {
        if (scrollPositionRef.current > 0) {
          window.scrollTo({ top: scrollPositionRef.current, behavior: 'instant' })
        }
      }
      // Use layout effect timing
      setTimeout(() => {
        restoreScroll()
        requestAnimationFrame(() => {
          restoreScroll()
          setTimeout(restoreScroll, 10)
          setTimeout(restoreScroll, 50)
        })
      }, 0)
    } else {
      document.documentElement.style.scrollSnapType = 'y mandatory'
    }
    
    return () => {
      // Cleanup
      if (activeTab === "work") {
        document.documentElement.style.scrollSnapType = ''
      }
    }
  }, [activeTab])

  return (
    <main className="flex flex-col" style={{ scrollSnapType: 'none' }}>
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center p-24 snap-start snap-always relative">
        {/* Navigation */}
        <div className="absolute top-8 left-0 right-0 z-20 flex justify-center">
          <HeroNavigation onProjectsClick={scrollToProjects} onWorkClick={scrollToWork} />
        </div>
        <div className="z-10 max-w-5xl w-full flex flex-col items-center font-helvetica text-sm">
          <h1 className="text-3xl text-center tracking-tight mb-6 md:mb-2 whitespace-nowrap">
            Vilakshan Khanna
          </h1>
          <h1 className="text-3xl text-center mb-8 md:mb-4 tracking-normal font-serif">Branding, Design, & Development</h1>
          <p className="text-black/40 text-center text-base/5 max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mb-8 md:mb-6">
          Always asking why because understanding is the first step to learning and ultimately to connecting.        
          </p>
          <div className="flex justify-center mb-6 md:mb-0">
            <Button 
              onClick={scrollToProjects}
              className="rounded-xl font-helvetica font-medium bg-black/80"
            >
              See my work
            </Button>
          </div>
          <p className="text-center text-xs text-black/40 mt-6 md:mt-4">
            or learn more with a{" "}
            <Link href="https://cal.com/vilakshankh" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/50 transition-colors">
              free call
            </Link>
          </p>
        </div>
        
        {/* Scroll Down Arrow */}
        <button
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-black/40 hover:text-black/60 transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animation: 'bounce-down 2s ease-in-out infinite' }}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </section>

      {/* Projects View - Cards or Detailed */}
      <div id="projects-section" className="relative snap-none">
        {/* Sticky Header Section with Toggle - Only appears above project section */}
        <div className="sticky top-0 z-50 bg-[#1C1C1C] border-b border-white/10 py-4 px-8 md:px-12 lg:px-16">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <button 
                onClick={(e) => {
                  e.preventDefault()
                  scrollPositionRef.current = window.scrollY
                  setActiveTab("work")
                }}
                className={activeTab === "work" ? "text-white hover:text-white/90 font-helvetica text-sm transition-colors" : "text-white/60 hover:text-white/80 font-helvetica text-sm transition-colors"}
              >
                work
              </button>
              <button 
                onClick={() => {
                  setActiveTab("projects")
                  scrollToProjects()
                }}
                className={activeTab === "projects" ? "text-white hover:text-white/90 font-helvetica text-sm transition-colors" : "text-white/60 hover:text-white/80 font-helvetica text-sm transition-colors"}
              >
                projects
              </button>
            </div>
            <ViewToggle view={view} onViewChange={handleViewChange} disableList={activeTab === "work"} />
          </div>
        </div>
        
        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 z-[60] bg-[#1C1C1C]/95 flex items-center justify-center">
            <p className="text-white font-helvetica text-sm">Restructuring</p>
          </div>
        )}
        
        {activeTab === "work" ? (
          <section className="bg-[#1C1C1C] py-16 md:py-24 px-8 md:px-12 lg:px-16" style={{ scrollSnapAlign: 'none', scrollSnapStop: 'normal' }}>
            <div className="max-w-3xl mx-auto text-white font-helvetica">
              {/* Header */}
              <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 font-instrument-serif">Vilakshan Khanna</h1>
                <p className="text-base text-white/80 mb-4">Startup | Product & Experience Designer | Creative Strategist</p>
                <p className="text-sm text-white/60 mb-2">📍Montréal, QC (open to relocation) | 📩vilakshank20@gmail.com | <Link href="#" className="underline hover:text-white/80">Vilakshan&apos;s Linktree</Link></p>
                <p className="text-sm text-white/70 mt-4">Five years in high-intensity startup environments have shaped Vilakshan into a builder who thrives on autonomy, solves complex problems with clarity, moves quickly without sacrificing quality, and adapts instantly as requirements evolve.</p>
              </div>

              {/* Skills */}
              <div className="mb-12 space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-3">Technical</h2>
                  <p className="text-sm text-white/70">React, Next.js, TypeScript, React Native, SwiftUI, Flutter, Javascript, Component Architecture</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3">Design & AI</h2>
                  <p className="text-sm text-white/70">Figma, Design Systems, Interaction Design, v0.dev, Cursor, ChatGPT/LLM workflows</p>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-8 mb-12">
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold">Trails | Co-Founder, Product Designer</h3>
                      <p className="text-sm text-white/60">Legal-Tech AI Startup | Montréal, QC | 2025–Present</p>
                    </div>
                  </div>
                  <ul className="text-sm text-white/70 space-y-2 mt-3 list-disc list-inside">
                    <li>Designed and built UI for 10+ U.S. law firms, using Figma, React, Next.js, and TypeScript with AI tools like v0.dev and Cursor to turn complex legal workflows into intuitive interfaces, improving firm productivity by 86.7% and driving $500K+ projected revenue.</li>
                    <li>Prototyped and shipped features quickly using Cursor and v0.dev, shortening sprint cycles and supporting a lean, iterative development process with usability testing early.</li>
                    <li>Owned product components end-to-end: product reqs, UX architecture, component design, prototyping, QA, and implementation handoff, ensuring smooth translation from Figma into React, React Native, and SwiftUI.</li>
                    <li>Completed 200+ interviews and used ChatGPT + NotebookLM to reduce research analysis time by 70% and speed up prototyping by 3×.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold">Matrox | Associate Product Manager</h3>
                      <p className="text-sm text-white/60">Montréal, QC | 2023–2024</p>
                    </div>
                  </div>
                  <ul className="text-sm text-white/70 space-y-2 mt-3 list-disc list-inside">
                    <li>Closed a $1M contract by designing UI/UX in Figma, testing, and demoing features for major media companies; worked directly with PMs, engineers, and sales teams to drive adoption across 3 business units.</li>
                    <li>Led development of 5 GPU and networking features, using customer insights and KPIs to guide engineering, QA, and PM teams through testing, refinement, and post-release fixes.</li>
                    <li>Reduced support queries by 95% by building 10 technical product guides covering GPU architecture and networking protocols, collaborating with engineering to address recurring customer issues.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold">Tecnishe | Co-founder, Product Designer</h3>
                      <p className="text-sm text-white/60">Med-Tech AI Startup | Montréal, QC | 2021–2023</p>
                    </div>
                  </div>
                  <ul className="text-sm text-white/70 space-y-2 mt-3 list-disc list-inside">
                    <li>Cut ER wait times by 5 hours by building an LLM-powered SaaS using GPT-4, directing low-acuity patients to telehealth and improving hospital flow.</li>
                    <li>Prototyped and validated workflows using Figma wireframes, React/Next.js web prototypes, and Flutter mobile prototypes, enabling rapid iteration and usability testing early.</li>
                    <li>Led UX architecture for the triage system, mapping decision flows, user journeys, and state logic across mobile and web to support accurate patient routing.</li>
                    <li>Completed 200+ interviews with patients, clinicians, and administrators, forming partnerships with two telehealth companies, a public hospital, and a government innovation hub.</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl font-bold mb-3">Education</h2>
                <p className="text-sm text-white/70">Computer Science and Business Administration (Specializing in UI/UX Design and Video Game Design)</p>
                <p className="text-sm text-white/60 mt-1">Memorial University of Newfoundland (BSc. 2024)</p>
              </div>
            </div>
          </section>
        ) : view === "cards" ? (
          <section className="bg-[#1C1C1C] min-h-screen py-16 md:py-24 px-8 md:px-12 lg:px-16 snap-start snap-always relative">
          <div className="max-w-2xl flex flex-col gap-3">
            <ProjectCard
              title="FiveFiveFive Studio"
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
                { label: "Website", href: "https://trailslegal.com/" }
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
          <section className="relative w-full h-screen overflow-hidden snap-start snap-always">
            {/* YouTube Video Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <iframe
                className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
                src="https://www.youtube.com/embed/y9wt2DvbKVo?autoplay=1&loop=1&mute=1&controls=0&playsinline=1&playlist=y9wt2DvbKVo&modestbranding=1&rel=0&start=0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ pointerEvents: 'none' }}
              />
            </div>
            
            {/* Text Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
              <div className="text-white mb-6">
                <div className="group flex items-center gap-3 mb-2">
                  <Image 
                    src="/Untitled-2_white.png" 
                    alt="FiveFiveFive Studio Logo" 
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
                FiveFiveFive Studio
              </h2>
            </div>
          </section>

          {/* Trails Section */}
          <section className="relative w-full h-screen overflow-hidden snap-start snap-always">
            {/* GIF Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <Image
                src="/feature_key legal insights.gif"
                alt="Trails Background"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            
            {/* Overlay for better text readability */}
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
          </section>

          {/* The Butterfly Project Section */}
          <section className="relative w-full h-screen overflow-hidden snap-start snap-always">
            {/* Image Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <Image
                src="/IMG_5698.jpg"
                alt="The Butterfly Project Background"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Overlay for better text readability */}
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
          </section>
          </>
        )}
      </div>
    </main>
  );
}

