"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const ASSETS = {
  branding1: "/articles/studioenok and randomanxiety/Studioenok_randomanxiety1.png",
  packaging: "/articles/studioenok and randomanxiety/Studioenok_randomanxiety2.png",
  productPhoto: "/articles/studioenok and randomanxiety/Studioenok_randomanxiety3.png",
  boxStack: "/articles/studioenok and randomanxiety/Studioenok_randomanxiety4.png",
}

interface StudioenokRandomAnxietyDesignAutopsyProps {
  isDark?: boolean
  embedded?: boolean
}

export default function StudioenokRandomAnxietyDesignAutopsy({ isDark = false, embedded = false }: StudioenokRandomAnxietyDesignAutopsyProps) {
  const content = (
    <div className={`${embedded ? 'w-full' : 'w-[750px] mx-auto'}`}>
      {!embedded && (
        <Link href="/" className="inline-block mb-8">
          <Button variant="outline" size="icon" aria-label="Back">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
      )}

      {/* Hero Title */}
      <h1 className={`text-2xl md:text-3xl font-semibold mb-3 text-left font-helvetica ${isDark ? 'text-white' : 'text-black'}`}>
        Design Autopsy of Studioenok: Defining RandomAnxiety&apos;s Jewellery Brand
      </h1>
      <span className={`block text-md font-helvetica md:text-md mb-3 ${isDark ? 'text-white/80' : 'text-black/80'}`}>
        How Studioenok created a rigid grid design system that reorganizes chaotic information into structured layouts, allowing wearers to build personal relationships with the jewellery.
      </span>
      <p className={`text-sm font-helvetica mb-8 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
        by Vilakshan Khanna · January 15, 2025
      </p>

      {/* Hero Images */}
      <div className="mb-12">
        <div className="flex gap-3 overflow-x-auto">
          <Image
            src={ASSETS.branding1}
            alt="RandomAnxiety Branding Design"
            width={1200}
            height={800}
            className="h-auto rounded-sm flex-shrink-0"
            priority
          />
          <Image
            src={ASSETS.packaging}
            alt="RandomAnxiety Packaging Design"
            width={1200}
            height={800}
            className="h-auto rounded-sm flex-shrink-0"
          />
          <Image
            src={ASSETS.productPhoto}
            alt="RandomAnxiety Product Photography"
            width={1200}
            height={800}
            className="h-auto rounded-sm flex-shrink-0"
          />
          <Image
            src={ASSETS.boxStack}
            alt="RandomAnxiety Box Stack"
            width={1200}
            height={800}
            className="h-auto rounded-sm flex-shrink-0"
          />
        </div>
      </div>

      {/* Intro */}
      <section className="mb-16">
        <div className={`space-y-6 text-base leading-relaxed font-helvetica ${isDark ? 'text-white/80' : 'text-black/80'}`}>
          <p>
            Studioenok believed that a jewellery brand should create space for the wearer to build a personal relationship with the object. They did this by creating a rigid grid design system for Random Anxiety. A system that reorganizes chaotic information into structured layouts.
          </p>

          <p>
            The entire identity operates in monochrome, a decision that creates space for the jewellery itself to provide warmth and material presence. The goal was to shift the focus from the branding to the wearer and allow the wearer to create their own identity with the jewellery brand, rather than imposing an identity.
          </p>
        </div>
      </section>

      {/* Personal Takeaways */}
      <section className="mb-16">
        <h2 className={`text-2xl md:text-3xl font-bold mb-6 text-left font-helvetica ${isDark ? 'text-white' : 'text-black'}`}>
          Personal Takeaways
        </h2>

        <div className={`space-y-6 text-base leading-relaxed font-helvetica ${isDark ? 'text-white/80' : 'text-black/80'}`}>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Create branding systems that can hold stories</li>
            <li>Give space for the audience to build personal relationships with elements</li>
          </ul>
        </div>
      </section>

      {/* Further Reading */}
      <section className="mb-16">
        <h2 className={`text-2xl md:text-3xl font-bold mb-6 text-left font-helvetica ${isDark ? 'text-white' : 'text-black'}`}>
          Further Reading
        </h2>

        <div className={`space-y-4 text-base leading-relaxed font-helvetica ${isDark ? 'text-white/80' : 'text-black/80'}`}>
          <a
            href="https://lnkd.in/eWHVuszF"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 hover:underline ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
          >
            Read more about Studioenok&apos;s work <ExternalLink className="h-4 w-4" />
          </a>
          <br />
          <a
            href="https://lnkd.in/e6xdfj6Z"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 hover:underline ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
          >
            Additional resources on RandomAnxiety branding <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Tags */}
      <section className="mb-16">
        <div className="flex flex-wrap gap-2">
          {[
            "#branding",
            "#design",
            "#productdesign",
            "#typography",
          ].map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-sm font-helvetica ${isDark ? 'bg-white/10 text-white/60' : 'bg-black/5 text-black/60'}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  )

  if (embedded) {
    return <div className="px-6">{content}</div>
  }

  return (
    <main className={`flex min-h-screen flex-col py-8 px-12 ${isDark ? 'bg-black' : 'bg-white'}`}>
      {content}
    </main>
  )
}

