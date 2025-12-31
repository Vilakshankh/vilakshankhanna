"use client"

import Link from "next/link"
import { ArrowUpRight, Calendar } from "lucide-react"
import { useState, useMemo, useEffect } from "react"
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
  type: "article" | "stub"
  directory: string
  title: string
  description: string
  slug?: string
  videoSrc?: string
  date?: string
}

export function Feed({ isDark }: FeedProps) {
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

  // Build unified feed items (articles only)
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
    return articleItems
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
    <section className={`p-8 border-r overflow-y-auto ${isDark ? 'border-white/10' : 'border-black/10'}`}>
      <div className="flex items-center justify-between mb-8 min-h-[32px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <button 
                  onClick={() => handleBreadcrumbClick(pathname)}
                  className="font-helvetica text-sm font-medium tracking-tight hover:opacity-70"
                >
                  Home
                </button>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
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
      <div className="min-h-[400px]">
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
                    <h3 className={`font-helvetica text-md font-medium transition-colors ${isDark ? 'group-hover:text-white/70' : 'group-hover:text-black/70'}`}>
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className={`font-helvetica text-sm font-mono tracking-tight transition-colors ${isDark ? 'text-white/60 group-hover:text-white/80' : 'text-black/60 group-hover:text-black/80'}`}>
                    {item.description}
                  </p>
                  <span className={`font-helvetica text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                    {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              </button>
            ))}
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
                {item.type === "article" && item.videoSrc ? (
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
                ) : (
                  <div className={`w-full aspect-[16/10] relative rounded-sm flex items-center justify-center ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                    <span className={`font-helvetica text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                      Coming Soon
                    </span>
                  </div>
                )}
                <div className={`py-2 flex flex-col gap-2 ${isDark ? 'bg-black' : 'bg-white'}`}>
                  <span className="inline-flex w-fit px-2 py-0.5 bg-black text-white font-mono text-[10px] mb-1">
                    {item.type === "article" ? "article" : item.directory}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className={`font-helvetica text-md font-medium transition-colors ${isDark ? 'group-hover:text-white/70' : 'group-hover:text-black/70'}`}>
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className={`font-helvetica text-sm font-mono tracking-tight transition-colors ${isDark ? 'text-white/60 group-hover:text-white/80' : 'text-black/60 group-hover:text-black/80'}`}>
                    {item.description}
                  </p>
                  {item.date && (
                    <span className={`font-helvetica text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                      {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
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

