"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useIsMobile } from "@/hooks/use-mobile"

interface HeroNavigationProps {
  onProjectsClick: () => void
  onWorkClick: () => void
}

export function HeroNavigation({ onProjectsClick, onWorkClick }: HeroNavigationProps) {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex-wrap gap-1 md:gap-2">
        <NavigationMenuItem>
          <button
            onClick={onProjectsClick}
            className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-black/60 transition-colors hover:bg-black/5 hover:text-black/80 focus:bg-black/5 focus:text-black/80 focus:outline-none font-helvetica"
          >
            Projects
          </button>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <button
            onClick={onWorkClick}
            className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-black/60 transition-colors hover:bg-black/5 hover:text-black/80 focus:bg-black/5 focus:text-black/80 focus:outline-none font-helvetica"
          >
            Work
          </button>
        </NavigationMenuItem>

        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger className="bg-transparent text-black/60 hover:bg-black/5 hover:text-black/80 font-helvetica">Social Media</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-1 p-2 bg-white border border-black/10 rounded-md shadow-lg">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="https://www.linkedin.com/in/vilakshan-khanna/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-black/5 focus:bg-black/5 font-helvetica text-black"
                  >
                    <div className="text-sm font-medium leading-none">LinkedIn</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="https://github.com/Vilakshankh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-black/5 focus:bg-black/5 font-helvetica text-black"
                  >
                    <div className="text-sm font-medium leading-none">GitHub</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="https://x.com/vilakshankhanna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-black/5 focus:bg-black/5 font-helvetica text-black"
                  >
                    <div className="text-sm font-medium leading-none">X</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger className="bg-transparent text-black/60 hover:bg-black/5 hover:text-black/80 font-helvetica">Music</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-1 p-2 bg-white border border-black/10 rounded-md shadow-lg">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="https://soundcloud.com/chaiwalla_dj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-black/5 focus:bg-black/5 font-helvetica text-black"
                  >
                    <div className="text-sm font-medium leading-none">SoundCloud</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="https://open.spotify.com/user/vilakshankhanna?si=b73b3f898e9644cb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-black/5 focus:bg-black/5 font-helvetica text-black"
                  >
                    <div className="text-sm font-medium leading-none">Spotify</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

