import Image from "next/image"
import { Disc } from "lucide-react"
import { FeedCard } from "../ui/feed-card"

interface ButterflyProjectProps {
}

export function ButterflyProject({}: ButterflyProjectProps) {
  return (
    <FeedCard
      header={
        <div className="flex items-center gap-3 pb-2">
          <Image 
            src="/WPFQXzXewBVy5FNFqSoY5jaFCWs.webp" 
            alt="The Butterfly Project Logo" 
            width={32} 
            height={32}
            className="object-contain"
          />
          <h3 className="font-helvetica text-xl font-medium text-black">
            The Butterfly Project
          </h3>
        </div>
      }
      media={
        <div className="w-full aspect-[16/10] relative overflow-hidden rounded-sm">
          <Image
            src="/IMG_5698.jpg"
            alt="The Butterfly Project"
            fill
            className="object-cover"
            priority
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
            Founder | Product Designer | Community Builder
          </p>
          <p className="font-helvetica text-sm font-mono tracking-tight text-black/70">
            Cowork together and meet new people.
          </p>
        </>
      }
    />
  )
}

