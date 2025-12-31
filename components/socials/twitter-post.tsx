import { MessageSquare } from "lucide-react"
import { FeedCard } from "../ui/feed-card"

interface TwitterPostProps {
  isDark?: boolean
}

export function TwitterPost({ isDark = false }: TwitterPostProps) {
  return (
    <FeedCard
      isDark={isDark}
      media={
        <div className="w-full flex justify-center px-4">
          <blockquote 
            className="twitter-tweet"
            dangerouslySetInnerHTML={{
              __html: `<p lang="en" dir="ltr">recorded a 1 hr set to end the year<br><br>theme: its 2055 and everything looks polished and broken at the same time <a href="https://t.co/uxFwUEo5jq">pic.twitter.com/uxFwUEo5jq</a></p>&mdash; vilakshan (@vilakshankhanna) <a href="https://twitter.com/vilakshankhanna/status/2003865797815578684?ref_src=twsrc%5Etfw">December 24, 2025</a>`
            }}
          />
        </div>
      }
      chip={
        <span className="inline-flex items-center gap-1.5 w-fit px-2 py-0.5 bg-black text-white font-mono text-[11px]">
          <MessageSquare className="w-3 h-3" />
          socials
        </span>
      }
    />
  )
}

