"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Newspaper, TrendingUp, Target, Users, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import { projects } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { getCalApi } from "@calcom/embed-react"

interface DirectorySidebarProps {
  isDark: boolean
  directory: string | null
}

interface ArticleMeta {
  slug: string
  title: string
  date: string
}

export function DirectorySidebar({ isDark, directory }: DirectorySidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const article = searchParams.get("article")
  const project = searchParams.get("project")
  
  const [articles, setArticles] = useState<ArticleMeta[]>([])
  const [isLoadingArticles, setIsLoadingArticles] = useState(false)

  // Initialize Cal.com embed
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "vilak-intro-30min" })
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#e80e0e"
          },
          dark: {
            "cal-brand": "#e80e0e"
          }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      })
    })()
  }, [])

  // Fetch articles on mount
  useEffect(() => {
    setIsLoadingArticles(true)
    fetch("/api/articles")
      .then(res => res.json())
      .then(data => {
        setArticles(data)
        setIsLoadingArticles(false)
      })
      .catch(err => {
        console.error("Failed to fetch articles:", err)
        setIsLoadingArticles(false)
      })
  }, [])

  const menuItems = [
    { id: "articles", icon: Newspaper, label: "articles" },
    { id: "projects", icon: TrendingUp, label: "projects" },
    { id: "work-stats", icon: Target, label: "work stats" },
    { id: "socials", icon: Users, label: "socials" },
    // { id: "music", icon: Music, label: "music" },
  ]

  return (
    <aside className={`py-8 border-l overflow-y-auto ${isDark ? 'bg-black border-white/10' : 'bg-white border-black/10'} w-64 px-6 flex flex-col`}>
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div>
          <h2 className={`font-helvetica text-sm font-medium tracking-tight mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            DIRECTORY
          </h2>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-2 items-start w-full">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isExpanded = directory === item.id
            
            return (
              <div key={item.id} className="w-full">
                {/* Parent directory item */}
                <button
                  onClick={() => router.push(pathname + "?directory=" + item.id, { scroll: false })}
                  className="inline-flex items-center gap-2 w-full justify-start"
                  title={item.label}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className={`font-helvetica text-xs ${directory === item.id ? 'font-bold' : ''}`}>
                    {item.label}
                  </span>
                </button>
                
                {/* Nested children for articles */}
                {item.id === "articles" && isExpanded && (
                  <div
                    className={`mt-1 ml-6 pl-3 flex flex-col gap-1.5 border-l ${isDark ? "border-white/10" : "border-black/10"}`}
                  >
                    {isLoadingArticles ? (
                      <span className={`font-mono text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                        loading...
                      </span>
                    ) : (
                      articles.map((art) => (
                        <button
                          key={art.slug}
                          onClick={() => router.push(pathname + `?directory=articles&article=${art.slug}`, { scroll: false })}
                          className={`font-helvetica text-xs text-left hover:opacity-70 transition-opacity ${
                            article === art.slug ? 'font-bold' : ''
                          }`}
                          title={art.title}
                        >
                          {art.title.length > 25 ? art.title.substring(0, 25) + "..." : art.title}
                        </button>
                      ))
                    )}
                  </div>
                )}
                
                {/* Nested children for projects */}
                {item.id === "projects" && isExpanded && (
                  <div
                    className={`mt-1 ml-6 pl-3 flex flex-col gap-1 border-l ${isDark ? "border-white/10" : "border-black/10"}`}
                  >
                    {projects.map((proj) => (
                      <button
                        key={proj.id}
                        onClick={() => router.push(pathname + `?directory=projects&project=${proj.id}`, { scroll: false })}
                        className={`font-helvetica text-xs text-left hover:opacity-70 transition-opacity ${
                          project === proj.id ? 'font-bold' : ''
                        }`}
                        title={proj.title}
                      >
                        {proj.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Schedule a Call Button */}
      <div className={`mt-auto pt-8 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
        <Button
          data-cal-namespace="vilak-intro-30min"
          data-cal-link="vilakshankh/vilak-intro-30min"
          data-cal-config='{"layout":"month_view","theme":"light"}'
          className={`w-full font-helvetica text-xs ${isDark ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'}`}
          variant="default"
        >
          <Phone className="w-4 h-4" />
          Schedule a Call
        </Button>
      </div>
    </aside>
  )
}

