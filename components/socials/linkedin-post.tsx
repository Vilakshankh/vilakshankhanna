import { Users } from "lucide-react"
import { FeedCard } from "../ui/feed-card"

interface LinkedInPostProps {
  isDark?: boolean
}

export function LinkedInPost({ isDark = false }: LinkedInPostProps) {
  return (
    <FeedCard
      isDark={isDark}
      media={
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[504px]">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7411791559928623105"
              height="676"
              width="100%"
              frameBorder="0"
              allowFullScreen
              title="Embedded post"
              className="w-full rounded-sm"
              style={{ minHeight: '676px' }}
            />
          </div>
        </div>
      }
      
      
    />
  )
}

