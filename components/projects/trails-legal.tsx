import Image from "next/image"
import Link from "next/link"
import { Disc } from "lucide-react"
import { FeedCard } from "../ui/feed-card"

interface TrailsLegalProps {
}

export function TrailsLegal({}: TrailsLegalProps) {
  return (
    <FeedCard
      header={
        <div className="flex items-center gap-3 pb-2">
          <Image 
            src="/Asset 10.svg" 
            alt="Trails Legal Logo" 
            width={32} 
            height={32}
            className="object-contain"
          />
          <h3 className="font-helvetica text-xl font-medium text-black">
            Trails Legal
          </h3>
        </div>
      }
      media={
        <div className="w-full aspect-[16/10] relative overflow-hidden rounded-sm">
          <Image
            src="/feature_key legal insights.gif"
            alt="Trails Legal"
            fill
            className="object-cover"
            unoptimized
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
            Cofounder | Product Designer | Entrepreneurship | Branding
          </p>
          <p className="font-helvetica text-sm font-mono tracking-tight text-black/70">
            Trails automates manual workflows to help your legal firm deliver fast, high quality output for your clients
          </p>
          <div className="flex flex-wrap gap-2 text-sm font-helvetica mt-1">
            <Link 
              href="https://trailslegal.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity text-black/70"
            >
              Website
            </Link>
            <Link 
              href="/trails-legal-case-study" 
              className="underline hover:opacity-70 transition-opacity text-black/70"
            >
              Case Study
            </Link>
          </div>
        </>
      }
    />
  )
}

