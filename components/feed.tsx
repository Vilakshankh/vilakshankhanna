"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Calendar, Newspaper, Users, MessageSquare, TrendingUp } from "lucide-react"

// TypeScript declaration for Twitter widgets
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: () => void
      }
    }
  }
}
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
import { FeedCard } from "./ui/feed-card"
import { FiveFiveFiveStudio, TrailsLegal, ButterflyProject, projectIds } from "./projects"
import { TrailsWork, MatroxWork, TecnisheWork, Skills, Education } from "./work-stats"
import { LinkedInPost, TwitterPost } from "./socials"

interface FeedProps {
  isDark: boolean
}

interface ArticleMeta {
  slug: string
  title: string
  description: string
  date: string
  videoSrc?: string
  imageSrc?: string
}

interface UnifiedFeedItem {
  id: string
  type: "article" | "stub" | "project" | "linkedin" | "twitter"
  directory: string
  title: string
  description: string
  slug?: string
  videoSrc?: string
  imageSrc?: string
  youtubeEmbed?: string
  linkedinEmbed?: string
  twitterEmbed?: string
  logoSrc?: string
  role?: string
  date?: string
}


// Helper: Render Studioenok 4-image thumbnail
function StudioenokThumbnail() {
  return (
    <div className="w-full aspect-[16/10] relative flex">
      <div className="w-1/4 h-full relative">
        <Image
          src="/articles/studioenok and randomanxiety/Studioenok_randomanxiety1.png"
          alt="RandomAnxiety Branding Design"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-1/4 h-full relative">
        <Image
          src="/articles/studioenok and randomanxiety/Studioenok_randomanxiety2.png"
          alt="RandomAnxiety Packaging Design"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-1/4 h-full relative">
        <Image
          src="/articles/studioenok and randomanxiety/Studioenok_randomanxiety3.png"
          alt="RandomAnxiety Product Photography"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-1/4 h-full relative">
        <Image
          src="/articles/studioenok and randomanxiety/Studioenok_randomanxiety4.png"
          alt="RandomAnxiety Box Stack"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

// Helper: Render article media based on item properties
function renderArticleMedia(item: ArticleMeta) {

  
  if (item.videoSrc) {
    return (
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
    )
  }
  
  if (item.imageSrc) {
    return (
      <div className="w-full aspect-[16/10] relative">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          className="object-cover rounded-sm"
        />
      </div>
    )
  }
  
  return null
}

// Helper: Render unified feed item media (for articles in unified feed)
function renderUnifiedItemMedia(item: UnifiedFeedItem) {

  
  if (item.videoSrc) {
    return (
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
    )
  }
  
  if (item.imageSrc) {
    return (
      <div className="w-full aspect-[16/10] relative">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          className="object-cover rounded-sm"
        />
      </div>
    )
  }
  
  return null
}

function FeedContent({ isDark }: FeedProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const directory = searchParams.get("directory")
  const article = searchParams.get("article")
  const project = searchParams.get("project")
  
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [articles, setArticles] = useState<ArticleMeta[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [articleComponent, setArticleComponent] = useState<React.ComponentType<{ isDark?: boolean; embedded?: boolean }> | null>(null)
  const [isArticleLoading, setIsArticleLoading] = useState(false)
  const [articleError, setArticleError] = useState<string | null>(null)

  // Load Twitter widgets script
  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
      // Script already loaded, just render widgets
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load()
      }
      return
    }

    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    script.charset = "utf-8"
    script.onload = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load()
      }
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup: remove script on unmount
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript)
      }
    }
  }, [directory])

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

  // Load article component dynamically when article changes
  useEffect(() => {
    if (article) {
      const loadArticle = async () => {
        setIsArticleLoading(true)
        setArticleError(null)
        try {
          const module = await import(`@/app/articles/${article}/page`)
          setArticleComponent(() => module.default)
        } catch (err) {
          console.error(`Failed to load article ${article}:`, err)
          setArticleError(`Failed to load article "${article}"`)
        } finally {
          setIsArticleLoading(false)
        }
      }
      loadArticle()
    } else {
      setArticleComponent(null)
      setArticleError(null)
    }
  }, [article])

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
    // {
    //   id: "music-stub",
    //   type: "stub",
    //   directory: "music",
    //   title: "Music",
    //   description: "Coming soon — what I'm listening to",
    // },
  ]

  // Build unified feed items (articles + LinkedIn posts)
  const unifiedFeedItems: UnifiedFeedItem[] = useMemo(() => {
    const articleItems: UnifiedFeedItem[] = sortedArticles.map(article => ({
      id: article.slug,
      type: "article" as const,
      directory: "articles",
      title: article.title,
      description: article.description,
      slug: article.slug,
      videoSrc: article.videoSrc,
      imageSrc: article.imageSrc,
      date: article.date,
    }))
    
    const linkedinPost: UnifiedFeedItem = {
      id: "linkedin-post-7411791559928623105",
      type: "linkedin" as const,
      directory: "socials",
      title: "LinkedIn Post",
      description: "",
      linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7411791559928623105",
      date: new Date().toISOString(), // You can set a specific date if needed
    }
    
    const twitterPost: UnifiedFeedItem = {
      id: "twitter-post-2003865797815578684",
      type: "twitter" as const,
      directory: "socials",
      title: "Twitter Post",
      description: "",
      twitterEmbed: "2003865797815578684",
      date: new Date("2025-12-24").toISOString(),
    }
    
    return [...articleItems, linkedinPost, twitterPost]
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
    } else if (item.type === "stub") {
      router.push(pathname + `?directory=${item.directory}`, { scroll: false })
    }
    // LinkedIn posts are embedded and don't need click handling
  }

  // Get current article data for breadcrumb
  const currentArticle = article ? articles.find(a => a.slug === article) : null
  
  // Get current project name for breadcrumb
  const getProjectTitle = (projectId: string | null) => {
    if (!projectId) return null
    const titles: Record<string, string> = {
      "fivefivefive-studio": "555 Studio",
      "trails-legal": "Trails Legal",
      "butterfly-project": "The Butterfly Project"
    }
    return titles[projectId] || projectId
  }
  const currentProjectTitle = project ? getProjectTitle(project) : null
  
  // Helper to format directory name for display
  const formatDirectoryName = (dir: string) => {
    return dir
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <section className="py-8 pb-16 overflow-y-auto flex justify-center">
      <div className="w-full max-w-[900px] px-12">
        <div className="flex items-center justify-between mb-8 min-h-[32px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              {directory ? (
                <BreadcrumbLink asChild>
                  <button 
                    onClick={() => handleBreadcrumbClick(pathname)}
                    className="font-helvetica text-sm font-medium hover:opacity-70"
                  >
                    FEED
                  </button>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="font-helvetica text-sm font-medium">FEED</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {directory && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {article || project ? (
                    <BreadcrumbLink asChild>
                      <button 
                        onClick={() => handleBreadcrumbClick(pathname + `?directory=${directory}`)}
                        className="font-helvetica text-sm font-medium hover:opacity-70"
                      >
                        {formatDirectoryName(directory)}
                      </button>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="font-helvetica text-sm font-medium">
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
                  <BreadcrumbPage className="font-helvetica text-sm font-medium">
                    {currentArticle.title.length > 30 
                      ? currentArticle.title.substring(0, 30) + "..." 
                      : currentArticle.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
            {project && currentProjectTitle && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-helvetica text-sm font-medium">
                    {currentProjectTitle.length > 30 
                      ? currentProjectTitle.substring(0, 30) + "..." 
                      : currentProjectTitle}
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
      <div className="min-h-[400px]">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <p className={`font-helvetica text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              Loading...
            </p>
          </div>
        ) : article ? (
          // Article view
          isArticleLoading ? (
            <div className="flex items-center justify-center py-12">
              <p className={`font-helvetica text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                Loading...
              </p>
            </div>
          ) : articleError || !articleComponent ? (
            <div className="flex items-center justify-center py-12">
              <p className={`font-helvetica text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                {articleError || `Article "${article}" not found`}
              </p>
            </div>
          ) : (
            <div className={`w-full overflow-y-auto max-h-[calc(100vh-200px)] animate-in fade-in duration-500 ${isDark ? 'text-white' : 'text-black'}`}>
              <Suspense fallback={
                <div className="flex items-center justify-center py-12">
                  <p className={`font-helvetica text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                    Loading article...
                  </p>
                </div>
              }>
                {articleComponent && (() => {
                  const ArticleComponent = articleComponent
                  return <ArticleComponent isDark={isDark} embedded={true} />
                })()}
              </Suspense>
            </div>
          )
        ) : directory === "articles" ? (
          // Articles list
          <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            {sortedArticles.map((item) => (
              <FeedCard
                key={item.slug}
                isDark={isDark}
                interactive
                onClick={() => handleArticleClick(item.slug)}
                media={renderArticleMedia(item)}
                chip={
                  <span className="inline-flex items-center gap-1.5 w-fit px-2 py-0.5 bg-black text-white font-mono text-[11px]">
                    <Newspaper className="w-3 h-3" />
                    article
                  </span>
                }
                content={
                  <>
                    <div className="flex items-center justify-between">
                      <h3 className={`font-helvetica text-xl font-medium transition-colors ${isDark ? 'group-hover:text-white/70' : 'group-hover:text-black/70'}`}>
                        {item.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <p className={`font-helvetica text-sm font-mono tracking-tight transition-colors ${isDark ? 'text-white/60 group-hover:text-white/80' : 'text-black/60 group-hover:text-black/80'}`}>
                      {item.description}
                    </p>
                  </>
                }
                footer={
                  <span className={`font-helvetica text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                    {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                }
              />
            ))}
          </div>
        ) : directory === "projects" ? (
          // Projects cards
          <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            {!project && <FiveFiveFiveStudio isDark={isDark} />}
            {!project && <TrailsLegal isDark={isDark} />}
            {!project && <ButterflyProject isDark={isDark} />}
            {project === "fivefivefive-studio" && <FiveFiveFiveStudio isDark={isDark} />}
            {project === "trails-legal" && <TrailsLegal isDark={isDark} />}
            {project === "butterfly-project" && <ButterflyProject isDark={isDark} />}
          </div>
        ) : directory === "work-stats" ? (
          // Work experience cards
          <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            <Skills isDark={isDark} />
            <TrailsWork isDark={isDark} />
            <MatroxWork isDark={isDark} />
            <TecnisheWork isDark={isDark} />
            <Education isDark={isDark} />
          </div>
        ) : directory === "socials" ? (
          // Socials - LinkedIn and Twitter embedded posts
          <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            <LinkedInPost isDark={isDark} />
            <TwitterPost isDark={isDark} />
          </div>
        ) : directory ? (
          // Empty directory state for other directories
          <div className="flex items-center justify-center py-12 animate-in fade-in duration-500">
            <p className={`font-helvetica text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              empty
            </p>
          </div>
        ) : (
          // Unified feed (articles + socials)
          <div className="flex flex-col gap-12 animate-in fade-in duration-500">
            {unifiedFeedItems.map((item) => {
              // LinkedIn post rendering
              if (item.type === "linkedin" && item.linkedinEmbed) {
                return <LinkedInPost key={item.id} isDark={isDark} />
              }
              
              // Twitter post rendering
              if (item.type === "twitter" && item.twitterEmbed) {
                return <TwitterPost key={item.id} isDark={isDark} />
              }
              
              // Article rendering
              return (
                <FeedCard
                  key={item.id}
                  isDark={isDark}
                  interactive
                  onClick={() => handleUnifiedItemClick(item)}
                  media={renderUnifiedItemMedia(item)}
                  chip={
                    <span className="inline-flex items-center gap-1.5 w-fit px-2 py-0.5 bg-black text-white font-mono text-[11px]">
                      <Newspaper className="w-3 h-3" />
                      article
                    </span>
                  }
                  content={
                    <>
                      <div className="flex items-center justify-between">
                        <h3 className={`font-helvetica text-xl font-medium transition-colors ${isDark ? 'group-hover:text-white/70' : 'group-hover:text-black/70'}`}>
                          {item.title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <p className={`font-helvetica text-sm font-mono tracking-tight transition-colors ${isDark ? 'text-white/60 group-hover:text-white/80' : 'text-black/60 group-hover:text-black/80'}`}>
                        {item.description}
                      </p>
                    </>
                  }
                  footer={
                    item.date && (
                      <span className={`font-helvetica text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                        {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    )
                  }
                />
              )
            })}
          </div>
        )}
      </div>
      </div>
    </section>
  )
}

export function Feed({ isDark }: FeedProps) {
  return (
    <Suspense fallback={
      <section className={`py-8 overflow-y-auto`}>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin text-2xl">📀</div>
        </div>
      </section>
    }>
      <FeedContent isDark={isDark} />
    </Suspense>
  )
}

