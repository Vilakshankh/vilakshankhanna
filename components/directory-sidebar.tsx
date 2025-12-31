"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Newspaper, TrendingUp, Target, PanelRightClose, PanelRightOpen, Moon } from "lucide-react"

interface DirectorySidebarProps {
  isDark: boolean
  directory: string | null
  isCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  isDoNotDisturb?: boolean
  onDoNotDisturbChange?: (active: boolean) => void
}

export function DirectorySidebar({ isDark, directory, isCollapsed = false, onCollapsedChange, isDoNotDisturb = false, onDoNotDisturbChange }: DirectorySidebarProps) {
  const router = useRouter()
  const pathname = usePathname()

  const menuItems = [
    { id: "articles", icon: Newspaper, label: "articles" },
    { id: "projects", icon: TrendingUp, label: "projects" },
    { id: "work-stats", icon: Target, label: "work stats" },
    // { id: "socials", icon: Users, label: "socials" },
    // { id: "music", icon: Music, label: "music" },
  ]

  return (
    <aside className={`py-8 border-l transition-all duration-300 flex flex-col ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} ${isCollapsed ? 'w-12 px-2 overflow-hidden' : 'w-56 px-6 overflow-y-auto'}`}>
      <div className="flex-1">
        {/* Header with Title and Toggle */}
        <div className={`flex items-center mb-4 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isCollapsed && (
            <h2 className={`font-helvetica text-sm font-medium tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>DIRECTORY</h2>
          )}
          <button
            onClick={() => onCollapsedChange?.(!isCollapsed)}
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9`}
            title={isCollapsed ? "Expand directory" : "Collapse directory"}
          >
            {isCollapsed ? (
              <PanelRightOpen className="w-4 h-4" />
            ) : (
              <PanelRightClose className="w-4 h-4" />
            )}
          </button>
        </div>

        {!isCollapsed && (
          <div className="flex flex-col gap-1 items-start">
            {/* Menu Items */}
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => router.push(pathname + "?directory=" + item.id, { scroll: false })}
                  className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-3 w-full justify-start ${
                    directory === item.id
                      ? isDark 
                        ? "bg-white text-black" 
                        : "bg-black text-white"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                  title={item.label}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="font-mono text-xs">{item.label}</span>
                </button>
              )
            })}
          </div>
        )}
        
        {isCollapsed && (
          <div className="flex flex-col gap-1 items-center">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => router.push(pathname + "?directory=" + item.id, { scroll: false })}
                  className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 w-9 ${
                    directory === item.id
                      ? isDark 
                        ? "bg-white text-black" 
                        : "bg-black text-white"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                  title={item.label}
                >
                  <Icon className="w-4 h-4" />
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Do Not Disturb Button - Footer */}
      {!isCollapsed && (
        <button
          onClick={() => onDoNotDisturbChange?.(!isDoNotDisturb)}
          className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-3 w-full justify-start mt-8 ${
            isDoNotDisturb 
              ? 'bg-purple-600 text-white hover:bg-purple-600/90' 
              : 'hover:bg-accent hover:text-accent-foreground'
          }`}
          title="Do Not Disturb"
        >
          <Moon className="w-4 h-4 flex-shrink-0" />
          <span className="font-sans text-xs">Do Not Disturb</span>
        </button>
      )}
      
      {isCollapsed && (
        <button
          onClick={() => onDoNotDisturbChange?.(!isDoNotDisturb)}
          className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 w-9 mt-8 ${
            isDoNotDisturb 
              ? 'bg-purple-600 text-white hover:bg-purple-600/90' 
              : 'hover:bg-accent hover:text-accent-foreground'
          }`}
          title="Do Not Disturb"
        >
          <Moon className="w-4 h-4" />
        </button>
      )}
    </aside>
  )
}

