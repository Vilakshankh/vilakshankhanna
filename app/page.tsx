"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Feed } from "@/components/feed"
import { DirectorySidebar } from "@/components/directory-sidebar"
import { AboutSidebar } from "@/components/about-sidebar"
// import { ReleaseNotesDialog } from "@/components/release-notes-dialog"

// interface SpotifyTrack {
//   isPlaying: boolean
//   title?: string
//   artist?: string
//   album?: string
//   albumImageUrl?: string
//   songUrl?: string
// }

function HomeContent() {
  const searchParams = useSearchParams()
  const directory = searchParams.get("directory")

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
    <div className="h-screen flex flex-col transition-colors duration-75 bg-white text-black">
      {/* Top Navigation Row */}
      <nav className="px-8 py-3 border-b flex-shrink-0 border-black/10 bg-white">
        <div className="flex justify-between items-baseline text-xl font-helvetica font-semibold">
          <span className="flex items-center gap-2 group/disc">
            <span 
              className="animate-[spin_3s_linear_infinite] group-hover/disc:animate-[spin_0.5s_linear_infinite]"
              // onClick={() => setIsDialogOpen(true)}
            >
              📀
            </span>
            VILAKSHAN KHANNA
            <span 
              className="text-xs font-mono text-black/40"
              // onClick={() => setIsReleaseNotesOpen(true)}
            >
              [Beta 1.10]
            </span>
          </span>
          <span>DESIGN ENGINEER</span>
          <span>
            BRAND STRATEGIST
          </span>
        </div>
      </nav>

      {/* Main 3-Column Layout */}
      <main className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] flex-1 overflow-hidden">
        {/* About Sidebar */}
        <AboutSidebar />

        {/* Feed Column */}
        <Feed />

        {/* Directory Sidebar */}
        <DirectorySidebar directory={directory} />
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

      {/* Release Notes Dialog */}
      {/* <ReleaseNotesDialog 
        open={isReleaseNotesOpen} 
        onOpenChange={setIsReleaseNotesOpen}
      /> */}
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
