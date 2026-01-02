"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ReleaseNotesDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  isDark: boolean
}

export function ReleaseNotesDialog({ open, onOpenChange, isDark }: ReleaseNotesDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="absolute right-14 top-6">
          <span className="animate-[spin_3s_linear_infinite] text-xl">📀</span>
        </div>
        <DialogHeader>
          <DialogTitle className="font-helvetica text-xl">Release Notes - Beta 1.10</DialogTitle>
          <DialogDescription className="font-helvetica">
            Latest updates and improvements
          </DialogDescription>
        </DialogHeader>
        
        <Accordion type="single" collapsible className="font-helvetica w-full">
          {/* December 26, 2024 */}
          <AccordionItem value="item-1" className={`${isDark ? 'border-white/10' : 'border-black/10'}`}>
            <AccordionTrigger className={`text-xs font-mono ${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'}`}>
              December 26, 2024
            </AccordionTrigger>
            <AccordionContent className={`${isDark ? 'text-white' : 'text-black'}`}>
              <div className="space-y-3 pt-2">
                  <div>
                    <h3 className={`text-sm font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>What&apos;s New</h3>
                  <ul className={`text-sm space-y-1.5 list-disc list-inside ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                    <li>Redesigned feed layout with improved navigation</li>
                    <li>Fixed breadcrumb navigation that stays visible on scroll</li>
                    <li>Enhanced card spacing and visual hierarchy</li>
                    <li>Improved responsive design for mobile devices</li>
                    <li>Updated color scheme with better contrast</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className={`text-sm font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Improvements</h3>
                  <ul className={`text-sm space-y-1.5 list-disc list-inside ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                    <li>Optimized scrolling performance</li>
                    <li>Better content organization in feed</li>
                    <li>Streamlined sidebar navigation</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* December 20, 2024 */}
          <AccordionItem value="item-2" className={`${isDark ? 'border-white/10' : 'border-black/10'}`}>
            <AccordionTrigger className={`text-xs font-mono ${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'}`}>
              December 20, 2024
            </AccordionTrigger>
            <AccordionContent className={`${isDark ? 'text-white' : 'text-black'}`}>
              <div className="space-y-3 pt-2">
                <div>
                  <h3 className={`text-sm font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Improvements</h3>
                  <ul className={`text-sm space-y-1.5 list-disc list-inside ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                    <li>Initial beta release</li>
                    <li>Core navigation and feed functionality</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Known Issues */}
          <AccordionItem value="item-3" className={`${isDark ? 'border-white/10' : 'border-black/10'}`}>
            <AccordionTrigger className={`text-xs font-mono ${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'}`}>
              Known Issues
            </AccordionTrigger>
            <AccordionContent className={`${isDark ? 'text-white' : 'text-black'}`}>
              <ul className={`text-sm space-y-1.5 list-disc list-inside pt-2 ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                <li>Some features are still in development</li>
                <li>Performance optimizations ongoing</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  )
}

