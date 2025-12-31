import { ReactNode } from "react"

interface FeedCardProps {
  isDark?: boolean
  onClick?: () => void
  className?: string
  
  // Optional slots
  header?: ReactNode
  media?: ReactNode
  chip?: ReactNode
  content?: ReactNode
  footer?: ReactNode
  
  // Style overrides
  containerWidth?: string
  interactive?: boolean
}

export function FeedCard({
  isDark = false,
  onClick,
  className = "",
  header,
  media,
  chip,
  content,
  footer,
  containerWidth = "w-[600px]",
  interactive = false,
}: FeedCardProps) {
  const Component = interactive ? "button" : "div"
  
  return (
    <Component
      onClick={onClick}
      className={`
        ${containerWidth} mx-auto flex flex-col relative p-6
        ${interactive ? 'group cursor-pointer text-left' : ''}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {/* Optional Header (for projects: logo + title) */}
      {header && (
        <div className="mb-4">
          {header}
        </div>
      )}
      
      {/* Optional Media */}
      {media && (
        <div className="mb-3">
          {media}
        </div>
      )}
      
      {/* Chip + Content + Footer wrapper */}
      <div className="py-2 flex flex-col gap-2.5">
        {/* Chip */}
        {chip && (
          <div>
            {chip}
          </div>
        )}
        
        {/* Content */}
        {content && (
          <div>
            {content}
          </div>
        )}
        
        {/* Footer */}
        {footer && (
          <div>
            {footer}
          </div>
        )}
      </div>
    </Component>
  )
}

