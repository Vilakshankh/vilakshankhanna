"use client"

import { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Newspaper } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ArticleContentProps {
  embedded?: boolean
  children: ReactNode
}

interface ArticleHeroProps {
  title: string
  subtitle: string
  author?: string
  date: string
  backButton?: boolean
}

interface ArticleSectionProps {
  title?: string
  children: ReactNode
}

interface ArticleImageProps {
  src: string
  alt: string
  caption?: string
  priority?: boolean
  width?: number
  height?: number
  className?: string
  unoptimized?: boolean
}

interface ArticleImageGalleryProps {
  images: Array<{
    src: string
    alt: string
  }>
}

interface ArticleVideoProps {
  src: string
  className?: string
}

interface ArticleLinkProps {
  href: string
  children: ReactNode
  external?: boolean
}

interface ArticleTagsProps {
  tags: string[]
}

interface ArticleSubheadingProps {
  children: ReactNode
}

// Main wrapper
export function ArticleContent({ embedded = false, children }: ArticleContentProps) {
  const content = (
    <div className={`${embedded ? 'w-full' : 'w-[750px] mx-auto'} pb-16`}>
      {children}
    </div>
  )

  if (embedded) {
    return <div className="px-6">{content}</div>
  }

  return (
    <main className="flex min-h-screen flex-col py-8 px-12 bg-white">
      {content}
    </main>
  )
}

// Hero section
export function ArticleHero({ title, subtitle, author = "Vilakshan Khanna", date, backButton = false }: ArticleHeroProps) {
  return (
    <>
      {backButton && (
        <Link href="/" className="inline-block mb-8">
          <Button variant="outline" size="icon" aria-label="Back">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
      )}
      
      <h1 className="text-xl md:text-2xl font-semibold mb-3 text-left font-helvetica text-black">
        {title}
      </h1>
      <span className="block text-sm font-helvetica md:text-sm mb-3 text-black/80">
        {subtitle}
      </span>
      <div className="flex items-center gap-3 mb-8">
        <span className="inline-flex items-center gap-1.5 w-fit px-2 py-0.5 bg-black text-white font-mono text-[11px]">
          <Newspaper className="w-3 h-3" />
          article
        </span>
        <p className="text-sm font-helvetica text-black/60">
          by {author} · {date}
        </p>
      </div>
    </>
  )
}

// Content section
export function ArticleSection({ title, children }: ArticleSectionProps) {
  return (
    <section className="mb-16">
      {title && (
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-left font-helvetica text-black">
          {title}
        </h2>
      )}
      <div className="space-y-6 text-sm leading-relaxed font-helvetica text-black/80">
        {children}
      </div>
    </section>
  )
}

// Subheading (h3)
export function ArticleSubheading({ children }: ArticleSubheadingProps) {
  return (
    <h3 className="text-lg md:text-xl font-semibold pt-4 font-helvetica text-black">
      {children}
    </h3>
  )
}

// Single image with caption
export function ArticleImage({ src, alt, caption, priority = false, width = 1600, height = 1000, className = "w-full h-auto rounded-sm", unoptimized = false }: ArticleImageProps) {
  const imageElement = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      unoptimized={unoptimized}
    />
  )

  if (caption) {
    return (
      <figure className="space-y-3">
        {imageElement}
        <figcaption className="text-sm font-helvetica text-black/60">
          {caption}
        </figcaption>
      </figure>
    )
  }

  return imageElement
}

// Image gallery (horizontal scroll)
export function ArticleImageGallery({ images }: ArticleImageGalleryProps) {
  return (
    <div className="mb-12">
      <div className="flex gap-3 overflow-x-auto">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={1200}
            height={800}
            className="h-auto rounded-sm flex-shrink-0"
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  )
}

// Video
export function ArticleVideo({ src, className = "w-full" }: ArticleVideoProps) {
  return (
    <div className="mb-12">
      <video 
        className={className} 
        autoPlay 
        muted 
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

// External link
export function ArticleLink({ href, children, external = true }: ArticleLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 hover:underline text-blue-600"
    >
      {children}
      {external && <ExternalLink className="h-4 w-4" />}
    </a>
  )
}

// Tags section
export function ArticleTags({ tags }: ArticleTagsProps) {
  return (
    <section className="mb-16">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-sm font-helvetica bg-black/5 text-black/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}

