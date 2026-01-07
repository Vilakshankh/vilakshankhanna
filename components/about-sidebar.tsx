"use client"

import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function AboutSidebar() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <aside className="py-8 border-r overflow-y-auto bg-white border-black/10 w-96 px-6">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div>
          <h2 className="font-helvetica text-sm font-medium tracking-tight mb-2 text-black">
            ABOUT ME
          </h2>
        </div>

        {/* Bio */}
        <div className="space-y-3">
          <div className="pb-2">
            <Image
              src="/Vilakshan_Pic.jpg"
              alt="Vilakshan Khanna"
              width={200}
              height={200}
              className="w-auto max-w-[200px] h-auto object-cover"
            />
          </div>
          <p className="font-helvetica text-sm leading-relaxed text-black/70">
            Design Engineer and Brand Strategist with human centered design philosophy. My projects are a reflection of understanding human connection and how to make products and experiences feel human.
          </p>
          <Button
            onClick={() => router.push(pathname + "?directory=work-stats", { scroll: false })}
            className="font-helvetica text-xs"
          >
            see my work stats
          </Button>
        </div>

        {/* Skills Section */}
        <div className="space-y-3">
          <h2 className="font-helvetica text-sm font-medium tracking-tight mb-2 text-black">
            Skills
          </h2>
          <div className="space-y-2">
            <div>
              <p className="font-helvetica text-xs font-medium mb-1 text-black/70">
                Technical
              </p>
              <p className="font-helvetica text-xs font-mono text-black/60">
                React, Next.js, TypeScript, React Native, SwiftUI, Flutter, Javascript, Component Architecture
              </p>
            </div>
            <div>
              <p className="font-helvetica text-xs font-medium mb-1 text-black/70">
                Design & AI
              </p>
              <p className="font-helvetica text-xs font-mono text-black/60">
                Figma, Design Systems, Interaction Design, v0.dev, Cursor, ChatGPT/LLM workflows
              </p>
            </div>
          </div>
        </div>

        {/* Current Role */}
        <div className="space-y-2">
          <h2 className="font-helvetica text-sm font-medium tracking-tight mb-2 text-black">
            Currently
          </h2>
          <p className="font-helvetica text-sm leading-relaxed text-black/70">
            I am open to work for product design or branding for startups in canada
          </p>
        </div>

        {/* Education */}
        <div className="space-y-2">
          <h2 className="font-helvetica text-sm font-medium tracking-tight mb-2 text-black">
            Education
          </h2>
          <div>
            <p className="font-helvetica text-sm text-black/70">
              Computer Science and Business Administration
            </p>
            <p className="font-helvetica text-sm font-mono text-black/60">
              Memorial University of Newfoundland (BSc. 2024)
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}

