"use client"

import { Maximize2, LayoutList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ViewToggleProps {
  view: "detailed" | "cards"
  onViewChange: (view: "detailed" | "cards") => void
  disableList?: boolean
}

export function ViewToggle({ view, onViewChange, disableList = false }: ViewToggleProps) {
  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-1.5 py-1 border border-white/20">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onViewChange("cards")}
        className={cn(
          "rounded-full transition-all h-7 px-2.5 text-xs gap-1.5",
          view === "cards" 
            ? "bg-white/20 text-white" 
            : "text-white/60 hover:text-white/80 hover:bg-white/5"
        )}
        aria-label="Grid view"
      >
        <LayoutList className="h-3.5 w-3.5" />
        <span>Grid</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => !disableList && onViewChange("detailed")}
        disabled={disableList}
        className={cn(
          "rounded-full transition-all h-7 px-2.5 text-xs gap-1.5",
          disableList 
            ? "text-white/20 cursor-not-allowed opacity-50" 
            : view === "detailed" 
            ? "bg-white/20 text-white" 
            : "text-white/60 hover:text-white/80 hover:bg-white/5"
        )}
        aria-label="List view"
      >
        <Maximize2 className="h-3.5 w-3.5" />
        <span>List</span>
      </Button>
    </div>
  )
}

