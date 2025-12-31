"use client"

import Link from "next/link"
import { Newspaper, TrendingUp, Target, Users, Music } from "lucide-react"
import { useState, useEffect, Suspense } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Feed } from "@/components/feed"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"

// interface SpotifyTrack {
//   isPlaying: boolean
//   title?: string
//   artist?: string
//   album?: string
//   albumImageUrl?: string
//   songUrl?: string
// }

function HomeContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const directory = searchParams.get("directory")
  
  const [isFlashing, setIsFlashing] = useState(false)
  const [isDark, setIsDark] = useState(false)
  // const [isDialogOpen, setIsDialogOpen] = useState(false)
  // const [spotifyData, setSpotifyData] = useState<SpotifyTrack | null>(null)
  // const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isFlashing) {
      interval = setInterval(() => {
        setIsDark(prev => !prev)
      }, 100) // Switch every 100ms for rapid flashing
    } else {
      setIsDark(false)
    }
    return () => clearInterval(interval)
  }, [isFlashing])

  // useEffect(() => {
  //   const fetchNowPlaying = async () => {
  //     if (isDialogOpen) {
  //       setIsLoading(true)
  //       try {
  //         const response = await fetch('/api/spotify/now-playing')
  //         const data = await response.json()
  //         setSpotifyData(data)
  //       } catch (error) {
  //         console.error('Error fetching Spotify data:', error)
  //         setSpotifyData({ isPlaying: false })
  //       } finally {
  //         setIsLoading(false)
  //       }
  //     }
  //   }

  //   fetchNowPlaying()
  // }, [isDialogOpen])
  return (
    <div className={`h-screen flex flex-col transition-colors duration-75 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Top Navigation Row */}
      <nav className={`px-8 py-3 border-b flex-shrink-0 ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'}`}>
        <div className="flex justify-between items-baseline text-xl font-helvetica font-semibold">
          <span className="flex items-center gap-2 group/disc">
            <span 
              className="animate-[spin_3s_linear_infinite] group-hover/disc:animate-[spin_0.5s_linear_infinite]"
              // onClick={() => setIsDialogOpen(true)}
            >
              📀
            </span>
            VILAKSHAN KHANNA
          </span>
          <span>DESIGN ENGINEER</span>
          <span 
            className="cursor-pointer"
            onMouseEnter={() => setIsFlashing(true)}
            onMouseLeave={() => setIsFlashing(false)}
          >
            BRAND STRATEGIST
          </span>
        </div>
      </nav>

      {/* Main 3-Column Layout */}
      <main className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr_0.5fr] flex-1 overflow-hidden">
        {/* About Column */}
        <section className={`p-8 border-r overflow-y-auto ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'}`}>
          <h2 className="font-helvetica text-sm font-medium tracking-tight mb-4">ABOUT</h2>
          <div className={`font-helvetica text-sm space-y-4 ${isDark ? 'text-white/70' : 'text-black/70'}`}>
            {directory === "work-stats" ? (
              <>
                <div>
                  <h3 className={`font-helvetica text-base font-semibold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                    Vilakshan Khanna
                  </h3>
                  <p className={`font-helvetica text-xs mb-3 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                    Startup | Design Engineer | Creative Strategist
                  </p>
                </div>
                <p className={`font-helvetica text-xs ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                  📍Toronto, ON | 📩vilakshank20@gmail.com | <Link href="#" className={`underline hover:opacity-70 ${isDark ? 'text-white/60' : 'text-black/60'}`}>Vilakshan&apos;s Linktree</Link>
                </p>
                <p className={`font-helvetica text-xs leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                  Five years in high-intensity startup environments have shaped Vilakshan into a builder who thrives on autonomy, solves complex problems with clarity, moves quickly without sacrificing quality, and adapts instantly as requirements evolve.
                </p>
              </>
            ) : (
              <>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </>
            )}
          </div>
        </section>

        {/* Feed Column */}
        <Feed isDark={isDark} />

        {/* Directory Column */}
        <section className={`p-8 overflow-y-auto ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
          <h2 className="font-helvetica text-sm font-medium tracking-tight mb-4">DIRECTORY</h2>
          <div className="flex flex-col gap-1 font-mono tracking-loose text-xs px-5">
            <button 
              onClick={() => router.push(pathname + "?directory=articles", { scroll: false })}
              className={`flex items-center gap-2 text-left px-2 py-1 transition-all ${
                directory === "articles"
                  ? isDark 
                    ? "bg-white text-black" 
                    : "bg-black text-white"
                  : "hover:opacity-70"
              }`}
            >
              <Newspaper className="w-4 h-4" />
              articles
            </button>
            <button 
              onClick={() => router.push(pathname + "?directory=projects", { scroll: false })}
              className={`flex items-center gap-2 text-left px-2 py-1 transition-all ${
                directory === "projects"
                  ? isDark 
                    ? "bg-white text-black" 
                    : "bg-black text-white"
                  : "hover:opacity-70"
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              projects
            </button>
            <button 
              onClick={() => router.push(pathname + "?directory=work-stats", { scroll: false })}
              className={`flex items-center gap-2 text-left px-2 py-1 transition-all ${
                directory === "work-stats"
                  ? isDark 
                    ? "bg-white text-black" 
                    : "bg-black text-white"
                  : "hover:opacity-70"
              }`}
            >
              <Target className="w-4 h-4" />
              work stats
            </button>
            <button 
              onClick={() => router.push(pathname + "?directory=socials", { scroll: false })}
              className={`flex items-center gap-2 text-left px-2 py-1 transition-all ${
                directory === "socials"
                  ? isDark 
                    ? "bg-white text-black" 
                    : "bg-black text-white"
                  : "hover:opacity-70"
              }`}
            >
              <Users className="w-4 h-4" />
              socials
            </button>
            <button 
              onClick={() => router.push(pathname + "?directory=music", { scroll: false })}
              className={`flex items-center gap-2 text-left px-2 py-1 transition-all ${
                directory === "music"
                  ? isDark 
                    ? "bg-white text-black" 
                    : "bg-black text-white"
                  : "hover:opacity-70"
              }`}
            >
              <Music className="w-4 h-4" />
              music
            </button>
          </div>
        </section>
      </main>

      {/* <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-helvetica text-xl">Currently Playing</DialogTitle>
            <DialogDescription className="font-helvetica">
              {isLoading ? "Loading..." : "What I'm listening to on Spotify"}
            </DialogDescription>
          </DialogHeader>
          
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin text-4xl">📀</div>
            </div>
          ) : spotifyData?.isPlaying ? (
            <div className="flex flex-col gap-4">
              {spotifyData.albumImageUrl && (
                <img
                  src={spotifyData.albumImageUrl}
                  alt={spotifyData.album}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              )}
              <div className="space-y-2">
                <h3 className="font-helvetica text-lg font-semibold">
                  {spotifyData.title}
                </h3>
                <p className="font-helvetica text-sm text-black/60">
                  {spotifyData.artist}
                </p>
                <p className="font-helvetica text-xs text-black/40">
                  {spotifyData.album}
                </p>
              </div>
              {spotifyData.songUrl && (
                <Link
                  href={spotifyData.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-full font-helvetica text-sm hover:bg-black/80 transition-colors"
                >
                  Open in Spotify
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 gap-2">
              <Music className="w-12 h-12 text-black/20" />
              <p className="font-helvetica text-sm text-black/60">
                Not currently playing anything
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog> */}
    </div>
  )
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin text-4xl">📀</div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  )
}
