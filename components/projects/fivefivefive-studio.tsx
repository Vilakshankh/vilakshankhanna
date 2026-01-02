import Image from "next/image"
import Link from "next/link"
import { Disc } from "lucide-react"
import { FeedCard } from "../ui/feed-card"

interface FiveFiveFiveStudioProps {
}

export function FiveFiveFiveStudio({}: FiveFiveFiveStudioProps) {
  return (
    <FeedCard
      header={
        <div className="flex items-center gap-3 pb-2">
          <Image 
            src="/Untitled-2_black.png" 
            alt="555 Studio Logo" 
            width={32} 
            height={32}
            className="object-contain"
          />
          <h3 className="font-helvetica text-xl font-medium text-black">
            555 Studio
          </h3>
        </div>
      }
      media={
        <div className="w-full aspect-[16/10] relative overflow-hidden rounded-sm">
          <iframe
            className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 scale-150"
            src="https://www.youtube.com/embed/y9wt2DvbKVo?autoplay=1&loop=1&mute=1&controls=0&playsinline=1&playlist=y9wt2DvbKVo&modestbranding=1&rel=0&start=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ pointerEvents: 'none' }}
          />
        </div>
      }
      chip={
        <span className="inline-flex items-center gap-1.5 w-fit px-2 py-0.5 bg-black text-white font-mono text-[11px]">
          <Disc className="w-3 h-3" />
          project
        </span>
      }
      content={
        <>
          <p className="font-helvetica text-sm text-black/60">
            Co-organizer | Branding | Community Designer
          </p>
          <p className="font-helvetica text-sm font-mono tracking-tight text-black/70">
            Creative nights event series in Montreal, 1000+ people so far
          </p>
          <div className="flex flex-wrap gap-2 text-sm font-helvetica mt-1">
            <Link 
              href="https://luma.com/fivefivefive?k=c&period=past" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity text-black/70"
            >
              Events
            </Link>
            <Link 
              href="https://www.instagram.com/fivefivefive_studio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity text-black/70"
            >
              Instagram
            </Link>
            <Link 
              href="https://x.com/555studio_" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity text-black/70"
            >
              X
            </Link>
            <Link 
              href="https://fivefivefive.ca" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity text-black/70"
            >
              Website
            </Link>
          </div>
        </>
      }
    />
  )
}

