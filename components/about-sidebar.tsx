"use client"

import { workExperiences } from "@/lib/work-experience"
import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { Phone } from "lucide-react"

interface AboutSidebarProps {
  isDark: boolean
}

export function AboutSidebar({ isDark }: AboutSidebarProps) {
  // Initialize Cal.com embed
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "vilak-intro-30min" })
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#e80e0e"
          },
          dark: {
            "cal-brand": "#e80e0e"
          }
        },
        hideEventTypeDetails: true,
        layout: "month_view"
      })
    })()
  }, [])

  return (
    <aside className={`py-8 border-r overflow-y-auto ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} w-96 px-6`}>
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div>
          <h2 className={`font-helvetica text-sm font-medium tracking-tight mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            ABOUT
          </h2>
        </div>

        {/* Bio */}
        <div className="space-y-3">
          <p className={`font-helvetica text-xs leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'}`}>
            Design Engineer and Brand Strategist with human centered design philosophy. My projects are a reflection of understanding human connection and how to make products and experiences feel human.
          </p>
        </div>

        {/* Skills Section */}
        <div className="space-y-3">
          <h3 className={`font-helvetica text-xs font-medium ${isDark ? 'text-white/80' : 'text-black/80'}`}>
            Skills
          </h3>
          <div className="space-y-2">
            <div>
              <p className={`font-helvetica text-xs font-medium mb-1 ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                Technical
              </p>
              <p className={`font-helvetica text-xs font-mono ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                React, Next.js, TypeScript, React Native, SwiftUI, Flutter, Javascript, Component Architecture
              </p>
            </div>
            <div>
              <p className={`font-helvetica text-xs font-medium mb-1 ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                Design & AI
              </p>
              <p className={`font-helvetica text-xs font-mono ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                Figma, Design Systems, Interaction Design, v0.dev, Cursor, ChatGPT/LLM workflows
              </p>
            </div>
          </div>
        </div>

        {/* Current Role */}
        <div className="space-y-2">
          <h3 className={`font-helvetica text-xs font-medium ${isDark ? 'text-white/80' : 'text-black/80'}`}>
            Currently
          </h3>
          <div>
            <p className={`font-helvetica text-xs font-medium ${isDark ? 'text-white' : 'text-black'}`}>
              {workExperiences[0].company} | {workExperiences[0].role}
            </p>
            <p className={`font-helvetica text-xs font-mono ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              {workExperiences[0].location} | {workExperiences[0].period}
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-2">
          <h3 className={`font-helvetica text-xs font-medium ${isDark ? 'text-white/80' : 'text-black/80'}`}>
            Education
          </h3>
          <div>
            <p className={`font-helvetica text-xs ${isDark ? 'text-white/70' : 'text-black/70'}`}>
              Computer Science and Business Administration
            </p>
            <p className={`font-helvetica text-xs font-mono ${isDark ? 'text-white/60' : 'text-black/60'}`}>
              Memorial University of Newfoundland (BSc. 2024)
            </p>
          </div>
        </div>

        {/* Cal.com Calendar Embed */}
        <div className={`mt-8 pt-8 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <h3 className={`font-helvetica text-sm font-medium tracking-tight mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-black'}`}>
            <Phone className="w-4 h-4" />
            SCHEDULE A CALL
          </h3>
          <div className="w-full">
            <Cal
              namespace="vilak-intro-30min"
              calLink="vilakshankh/vilak-intro-30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view", theme: "light" }}
            />
          </div>
        </div>
      </div>
    </aside>
  )
}

