"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Calendar } from "lucide-react"
import { useState, useMemo, useEffect, Suspense } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ArticleContent } from "./article-content"
import { ProjectsShowcase } from "./projects-showcase"

interface FeedProps {
  isDark: boolean
}

interface ArticleMeta {
  slug: string
  title: string
  description: string
  date: string
  videoSrc: string
}

interface UnifiedFeedItem {
  id: string
  type: "article" | "stub" | "project"
  directory: string
  title: string
  description: string
  slug?: string
  videoSrc?: string
  imageSrc?: string
  youtubeEmbed?: string
  logoSrc?: string
  role?: string
  date?: string
}

interface WorkExperience {
  id: string
  company: string
  role: string
  location: string
  period: string
  description: string
  achievements: string[]
}

function FeedContent({ isDark }: FeedProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const directory = searchParams.get("directory")
  const article = searchParams.get("article")
  
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [articles, setArticles] = useState<ArticleMeta[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Fetch articles when directory=articles OR for unified feed (no directory)
  useEffect(() => {
    if (directory === "articles" || directory === null) {
      setIsLoading(true)
      fetch("/api/articles")
        .then(res => res.json())
        .then(data => {
          setArticles(data)
          setIsLoading(false)
        })
        .catch(err => {
          console.error("Failed to fetch articles:", err)
          setIsLoading(false)
        })
    }
  }, [directory])

  // Sort articles by date
  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
      if (sortOrder === "desc") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      }
    })
  }, [articles, sortOrder])

  // Work experience data
  const workExperiences: WorkExperience[] = [
    {
      id: "trails",
      company: "Trails",
      role: "Co-Founder, Product Designer",
      location: "Legal-Tech AI Startup | Montréal, QC",
      period: "2025–Present",
      description: "Legal-Tech AI Startup | Montréal, QC | 2025–Present",
      achievements: [
        "Designed and built UI for 10+ U.S. law firms, using Figma, React, Next.js, and TypeScript with AI tools like v0.dev and Cursor to turn complex legal workflows into intuitive interfaces, improving firm productivity by 86.7% and driving $500K+ projected revenue.",
        "Prototyped and shipped features quickly using Cursor and v0.dev, shortening sprint cycles and supporting a lean, iterative development process with usability testing early.",
        "Owned product components end-to-end: product reqs, UX architecture, component design, prototyping, QA, and implementation handoff, ensuring smooth translation from Figma into React, React Native, and SwiftUI.",
        "Completed 200+ interviews and used ChatGPT + NotebookLM to reduce research analysis time by 70% and speed up prototyping by 3×."
      ]
    },
    {
      id: "matrox",
      company: "Matrox",
      role: "Associate Product Manager",
      location: "Montréal, QC",
      period: "2023–2024",
      description: "Montréal, QC | 2023–2024",
      achievements: [
        "Closed a $1M contract by designing UI/UX in Figma, testing, and demoing features for major media companies; worked directly with PMs, engineers, and sales teams to drive adoption across 3 business units.",
        "Led development of 5 GPU and networking features, using customer insights and KPIs to guide engineering, QA, and PM teams through testing, refinement, and post-release fixes.",
        "Reduced support queries by 95% by building 10 technical product guides covering GPU architecture and networking protocols, collaborating with engineering to address recurring customer issues."
      ]
    },
    {
      id: "tecnishe",
      company: "Tecnishe",
      role: "Co-founder, Product Designer",
      location: "Med-Tech AI Startup | Montréal, QC",
      period: "2021–2023",
      description: "Med-Tech AI Startup | Montréal, QC | 2021–2023",
      achievements: [
        "Cut ER wait times by 5 hours by building an LLM-powered SaaS using GPT-4, directing low-acuity patients to telehealth and improving hospital flow.",
        "Prototyped and validated workflows using Figma wireframes, React/Next.js web prototypes, and Flutter mobile prototypes, enabling rapid iteration and usability testing early.",
        "Led UX architecture for the triage system, mapping decision flows, user journeys, and state logic across mobile and web to support accurate patient routing.",
        "Completed 200+ interviews with patients, clinicians, and administrators, forming partnerships with two telehealth companies, a public hospital, and a government innovation hub."
      ]
    }
  ]

  // Create stub cards for other directories
  const stubCards: UnifiedFeedItem[] = [
    {
      id: "projects-stub",
      type: "stub",
      directory: "projects",
      title: "Projects",
      description: "Coming soon — showcase of selected work and experiments",
    },
    {
      id: "work-stats-stub",
      type: "stub",
      directory: "work-stats",
      title: "Work Stats",
      description: "Coming soon — metrics and insights from ongoing projects",
    },
    {
      id: "socials-stub",
      type: "stub",
      directory: "socials",
      title: "Socials",
      description: "Coming soon — connect across platforms",
    },
    {
      id: "music-stub",
      type: "stub",
      directory: "music",
      title: "Music",
      description: "Coming soon — what I'm listening to",
    },
  ]

  // Build unified feed items (articles + projects)
  const unifiedFeedItems: UnifiedFeedItem[] = useMemo(() => {
    const articleItems: UnifiedFeedItem[] = sortedArticles.map(article => ({
      id: article.slug,
      type: "article" as const,
      directory: "articles",
      title: article.title,
      description: article.description,
      slug: article.slug,
      videoSrc: article.videoSrc,
      date: article.date,
    }))
    
    const projectItems: UnifiedFeedItem[] = [
      {
        id: "fivefivefive-studio",
        type: "project" as const,
        directory: "projects",
        title: "555 Studio",
        description: "Creative nights event series in Montreal, 1000+ people so far",
        role: "Co-organizer | Branding | Community Designer",
        logoSrc: "/Untitled-2_white.png",
        youtubeEmbed: "https://www.youtube.com/embed/y9wt2DvbKVo?autoplay=1&loop=1&mute=1&controls=0&playsinline=1&playlist=y9wt2DvbKVo&modestbranding=1&rel=0&start=0",
      },
      {
        id: "trails-legal",
        type: "project" as const,
        directory: "projects",
        title: "Trails Legal",
        description: "Trails automates manual workflows to help your legal firm deliver fast, high quality output for your clients",
        role: "Cofounder | Product Designer | Entrepreneurship | Branding",
        logoSrc: "/Asset 10.svg",
        imageSrc: "/feature_key legal insights.gif",
      },
      {
        id: "butterfly-project",
        type: "project" as const,
        directory: "projects",
        title: "The Butterfly Project",
        description: "Cowork together and meet new people.",
        role: "Founder | Product Designer | Community Builder",
        logoSrc: "/WPFQXzXewBVy5FNFqSoY5jaFCWs.webp",
        imageSrc: "/IMG_5698.jpg",
      },
    ]
    
    return [...articleItems, ...projectItems]
  }, [sortedArticles])

  const toggleSort = () => {
    setSortOrder(prev => prev === "desc" ? "asc" : "desc")
  }

  const handleArticleClick = (slug: string) => {
    router.push(pathname + `?directory=articles&article=${slug}`, { scroll: false })
  }

  const handleBreadcrumbClick = (path: string) => {
    router.push(path, { scroll: false })
  }

  const handleUnifiedItemClick = (item: UnifiedFeedItem) => {
    if (item.type === "article" && item.slug) {
      router.push(pathname + `?directory=articles&article=${item.slug}`, { scroll: false })
    } else if (item.type === "project" || item.type === "stub") {
      router.push(pathname + `?directory=${item.directory}`, { scroll: false })
    }
  }

  // Get current article data for breadcrumb
  const currentArticle = article ? articles.find(a => a.slug === article) : null
  
  // Helper to format directory name for display
  const formatDirectoryName = (dir: string) => {
    return dir
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <section className={`py-8 border-r overflow-y-auto ${isDark ? 'border-white/10' : 'border-black/10'}`}>
      <div className="flex items-center justify-between mb-8 min-h-[32px] px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              {directory ? (
                <BreadcrumbLink asChild>
                  <button 
                    onClick={() => handleBreadcrumbClick(pathname)}
                    className="font-helvetica text-sm font-medium tracking-tight hover:opacity-70"
                  >
                    Feed
                  </button>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="font-helvetica text-sm font-medium tracking-tight">Feed</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {directory && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {article ? (
                    <BreadcrumbLink asChild>
                      <button 
                        onClick={() => handleBreadcrumbClick(pathname + `?directory=${directory}`)}
                        className="font-helvetica text-sm font-medium tracking-tight hover:opacity-70"
                      >
                        {formatDirectoryName(directory)}
                      </button>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="font-helvetica text-sm font-medium tracking-tight">
                      {formatDirectoryName(directory)}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </>
            )}
            {article && currentArticle && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-helvetica text-sm font-medium tracking-tight">
                    {currentArticle.title.length > 30 
                      ? currentArticle.title.substring(0, 30) + "..." 
                      : currentArticle.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="w-8 h-8 flex items-center justify-center">
          {directory === "articles" && !article && (
            <button
              onClick={toggleSort}
              className={`p-1 rounded hover:bg-black/5 transition-colors ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}
              title={`Sort ${sortOrder === "desc" ? "oldest first" : "newest first"}`}
            >
              <Calendar className={`w-4 h-4 ${sortOrder === "asc" ? "rotate-180" : ""} transition-transform`} />
            </button>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="min-h-[400px] px-1">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <p className={`font-helvetica text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              Loading...
            </p>
          </div>
        ) : article ? (
          // Article view
          <ArticleContent slug={article} isDark={isDark} />
        ) : directory === "articles" ? (
          // Articles list
          <div className="flex flex-col gap-6 animate-in fade-in duration-500">
            {sortedArticles.map((item) => (
              <button
                key={item.slug}
                onClick={() => handleArticleClick(item.slug)}
                className="w-4/5 mx-auto flex flex-col relative group cursor-pointer text-left"
              >
                <div className="w-full aspect-[16/10] relative">
                  <video
                    src={item.videoSrc}
                    className="w-full h-full object-cover rounded-sm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  />
                </div>
                <div className={`py-2 flex flex-col gap-2 ${isDark ? 'bg-black' : 'bg-white'}`}>
                  <span className="inline-flex w-fit px-2 py-0.5 bg-black text-white font-mono text-[10px] mb-1">
                    article
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className={`font-helvetica text-lg font-medium transition-colors ${isDark ? 'group-hover:text-white/70' : 'group-hover:text-black/70'}`}>
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className={`font-helvetica text-xs font-mono tracking-tight transition-colors ${isDark ? 'text-white/60 group-hover:text-white/80' : 'text-black/60 group-hover:text-black/80'}`}>
                    {item.description}
                  </p>
                  <span className={`font-helvetica text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                    {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : directory === "projects" ? (
          // Projects showcase
          <div className="animate-in fade-in duration-500">
            <ProjectsShowcase variant="embedded" isDark={isDark} />
          </div>
        ) : directory === "work-stats" ? (
          // Work experience cards
          <div className="flex flex-col gap-6 animate-in fade-in duration-500">
            {/* Skills Section */}
            <div className={`w-4/5 mx-auto p-6 rounded-sm border ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'}`}>
              <h2 className={`font-helvetica text-lg font-medium mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Skills</h2>
              <div className="space-y-4">
                <div>
                  <h3 className={`font-helvetica text-sm font-medium mb-2 ${isDark ? 'text-white/80' : 'text-black/80'}`}>Technical</h3>
                  <p className={`font-helvetica text-xs ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                    React, Next.js, TypeScript, React Native, SwiftUI, Flutter, Javascript, Component Architecture
                  </p>
                </div>
                <div>
                  <h3 className={`font-helvetica text-sm font-medium mb-2 ${isDark ? 'text-white/80' : 'text-black/80'}`}>Design & AI</h3>
                  <p className={`font-helvetica text-xs ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                    Figma, Design Systems, Interaction Design, v0.dev, Cursor, ChatGPT/LLM workflows
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience Cards */}
            {workExperiences.map((experience) => (
              <div
                key={experience.id}
                className={`w-4/5 mx-auto p-6 rounded-sm border transition-colors ${
                  isDark 
                    ? 'border-white/10 bg-white/5 hover:bg-white/10' 
                    : 'border-black/10 bg-black/5 hover:bg-black/10'
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <h3 className={`font-helvetica text-lg font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                      {experience.company} | {experience.role}
                    </h3>
                    <p className={`font-helvetica text-xs ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                      {experience.location} | {experience.period}
                    </p>
                  </div>
                  <ul className={`space-y-2 mt-2 list-disc list-outside pl-5 ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className={`font-helvetica text-xs leading-relaxed`}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Education Section */}
            <div className={`w-4/5 mx-auto p-6 rounded-sm border ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'}`}>
              <h2 className={`font-helvetica text-lg font-medium mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Education</h2>
              <p className={`font-helvetica text-xs ${isDark ? 'text-white/70' : 'text-black/70'} mb-1`}>
                Computer Science and Business Administration (Specializing in UI/UX Design and Video Game Design)
              </p>
              <p className={`font-helvetica text-xs ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                Memorial University of Newfoundland (BSc. 2024)
              </p>
            </div>
          </div>
        ) : directory ? (
          // Empty directory state for other directories
          <div className="flex items-center justify-center py-12 animate-in fade-in duration-500">
            <p className={`font-helvetica text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              empty
            </p>
          </div>
        ) : (
          // Unified feed (all directories)
          <div className="flex flex-col gap-6 animate-in fade-in duration-500">
            {unifiedFeedItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleUnifiedItemClick(item)}
                className="w-4/5 mx-auto flex flex-col relative group cursor-pointer text-left"
              >
                {/* Logo + Project Name (for projects) */}
                {item.type === "project" && item.logoSrc && (
                  <div className={`flex items-center gap-3 mb-4 ${isDark ? 'bg-black' : 'bg-white'} pb-2`}>
                    <Image 
                      src={item.id === "fivefivefive-studio" 
                        ? (isDark ? "/Untitled-2_white.png" : "/Untitled-2_black.png")
                        : item.logoSrc
                      } 
                      alt={`${item.title} Logo`} 
                      width={32} 
                      height={32}
                      className="object-contain"
                    />
                    <h3 className={`font-helvetica text-md font-medium transition-colors ${isDark ? 'group-hover:text-white/70' : 'group-hover:text-black/70'}`}>
                      {item.title}
                    </h3>
                  </div>
                )}
                
                {/* Media Content */}
                {item.type === "article" && item.videoSrc ? (
                  <div className="w-full aspect-[16/10] relative mb-4">
                    <video
                      src={item.videoSrc}
                      className="w-full h-full object-cover rounded-sm"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                    />
                  </div>
                ) : item.type === "project" && item.youtubeEmbed ? (
                  <div className="w-full aspect-[16/10] relative overflow-hidden rounded-sm mb-4">
                    <iframe
                      className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 scale-150"
                      src={item.youtubeEmbed}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      style={{ pointerEvents: 'none' }}
                    />
                  </div>
                ) : item.type === "project" && item.imageSrc ? (
                  <div className="w-full aspect-[16/10] relative mb-4">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover rounded-sm"
                      unoptimized={item.imageSrc.endsWith('.gif')}
                    />
                  </div>
                ) : item.type === "project" && item.videoSrc ? (
                  <div className="w-full aspect-[16/10] relative mb-4">
                    <video
                      src={item.videoSrc}
                      className="w-full h-full object-cover rounded-sm"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                    />
                  </div>
                ) : (
                  <div className={`w-full aspect-[16/10] relative rounded-sm flex items-center justify-center mb-4 ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                    <span className={`font-helvetica text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                      Coming Soon
                    </span>
                  </div>
                )}
                
                {/* Metadata */}
                <div className={`py-2 flex flex-col gap-3 ${isDark ? 'bg-black' : 'bg-white'}`}>
                  {item.type === "article" && (
                    <>
                      <span className="inline-flex w-fit px-2 py-0.5 bg-black text-white font-mono text-[10px] mb-1">
                        article
                      </span>
                      <div className="flex items-center justify-between">
                        <h3 className={`font-helvetica text-lg font-medium transition-colors ${isDark ? 'group-hover:text-white/70' : 'group-hover:text-black/70'}`}>
                          {item.title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <p className={`font-helvetica text-xs font-mono tracking-tight transition-colors ${isDark ? 'text-white/60 group-hover:text-white/80' : 'text-black/60 group-hover:text-black/80'}`}>
                        {item.description}
                      </p>
                      {item.date && (
                        <span className={`font-helvetica text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                          {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      )}
                    </>
                  )}
                  {item.type === "project" && (
                    <>
                      <span className="inline-flex w-fit px-2 py-0.5 bg-black text-white font-mono text-[10px] mb-1">
                        project
                      </span>
                      {item.role && (
                        <p className={`font-helvetica text-xs ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                          {item.role}
                        </p>
                      )}
                      <p className={`font-helvetica text-xs font-mono tracking-tight transition-colors ${isDark ? 'text-white/60 group-hover:text-white/80' : 'text-black/60 group-hover:text-black/80'}`}>
                        {item.description}
                      </p>
                    </>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export function Feed({ isDark }: FeedProps) {
  return (
    <Suspense fallback={
      <section className={`py-8 border-r overflow-y-auto ${isDark ? 'border-white/10' : 'border-black/10'}`}>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin text-2xl">📀</div>
        </div>
      </section>
    }>
      <FeedContent isDark={isDark} />
    </Suspense>
  )
}

