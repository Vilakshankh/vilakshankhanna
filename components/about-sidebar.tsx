"use client"

import Link from "next/link"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

interface AboutSidebarProps {
  isDark: boolean
  directory: string | null
  isCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
}

export function AboutSidebar({ isDark, directory, isCollapsed = false, onCollapsedChange }: AboutSidebarProps) {

  return (
    <aside className={`py-8 border-r bg-black border-white/10 transition-all duration-300 ${isCollapsed ? 'w-12 px-2 overflow-hidden' : 'w-80 px-6 overflow-y-auto'}`}>
      {/* Header with Title and Toggle */}
      <div className={`flex items-center mb-4 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        {!isCollapsed && (
          <h2 className="font-helvetica text-sm font-medium tracking-tight text-white">ABOUT</h2>
        )}
        <button
          onClick={() => onCollapsedChange?.(!isCollapsed)}
          className="p-1.5 transition-all rounded-lg hover:opacity-70 text-white"
          title={isCollapsed ? "Expand about" : "Collapse about"}
        >
          {isCollapsed ? (
            <PanelLeftOpen className="w-4 h-4" />
          ) : (
            <PanelLeftClose className="w-4 h-4" />
          )}
        </button>
      </div>
      
      {!isCollapsed && (
        <div className="font-helvetica space-y-4 text-white/70">
        {directory === "work-stats" ? (
          <>
            <div>
              <h3 className="font-helvetica text-lg font-semibold mb-2 text-white">
                Vilakshan Khanna
              </h3>
              <p className="font-helvetica text-sm mb-3 text-white/60">
                Startup | Design Engineer | Creative Strategist
              </p>
            </div>
            <p className="font-helvetica text-sm text-white/60">
              📍Toronto, ON | 📩vilakshank20@gmail.com | <Link href="#" className="underline hover:opacity-70 text-white/60">Vilakshan&apos;s Linktree</Link>
            </p>
            <p className="font-helvetica text-sm leading-relaxed text-white/70">
              Five years in high-intensity startup environments have shaped Vilakshan into a builder who thrives on autonomy, solves complex problems with clarity, moves quickly without sacrificing quality, and adapts instantly as requirements evolve.
            </p>
          </>
        ) : (
          <>
            <div>
              <h3 className="font-helvetica text-lg font-semibold mb-2 text-white">
                Vilakshan Khanna
              </h3>
              <p className="font-helvetica text-sm mb-3 text-white/60">
                Startup | Design Engineer | Creative Strategist
              </p>
            </div>
            <p className="font-helvetica text-sm text-white/60">
              📍Toronto, ON | 📩vilakshank20@gmail.com | <Link href="#" className="underline hover:opacity-70 text-white/60">Vilakshan&apos;s Linktree</Link>
            </p>
            <p className="font-helvetica text-sm leading-relaxed text-white/70">
              Five years in high-intensity startup environments have shaped Vilakshan into a builder who thrives on autonomy, solves complex problems with clarity, moves quickly without sacrificing quality, and adapts instantly as requirements evolve.
            </p>
          </>
        )}
        </div>
      )}
    </aside>
  )
}


