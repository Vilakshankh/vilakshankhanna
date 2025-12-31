export interface Project {
  id: string
  title: string
  logoSrc: string
  logoDarkSrc?: string // Optional alternative logo for dark mode
  description: string
  role: string
  mediaType: "youtube" | "image" | "gif"
  mediaSrc: string
  links?: Array<{
    label: string
    url: string
    external?: boolean
  }>
}

export const projects: Project[] = [
  {
    id: "fivefivefive-studio",
    title: "555 Studio",
    logoSrc: "/Untitled-2_black.png",
    logoDarkSrc: "/Untitled-2_white.png",
    description: "Creative nights event series in Montreal, 1000+ people so far",
    role: "Co-organizer | Branding | Community Designer",
    mediaType: "youtube",
    mediaSrc: "https://www.youtube.com/embed/y9wt2DvbKVo?autoplay=1&loop=1&mute=1&controls=0&playsinline=1&playlist=y9wt2DvbKVo&modestbranding=1&rel=0&start=0",
    links: [
      { label: "Events", url: "https://luma.com/fivefivefive?k=c&period=past", external: true },
      { label: "Instagram", url: "https://www.instagram.com/fivefivefive_studio/", external: true },
      { label: "X", url: "https://x.com/555studio_", external: true },
      { label: "Website", url: "https://fivefivefive.ca", external: true },
    ],
  },
  {
    id: "trails-legal",
    title: "Trails Legal",
    logoSrc: "/Asset 10.svg",
    description: "Trails automates manual workflows to help your legal firm deliver fast, high quality output for your clients",
    role: "Cofounder | Product Designer | Entrepreneurship | Branding",
    mediaType: "gif",
    mediaSrc: "/feature_key legal insights.gif",
    links: [
      { label: "Website", url: "https://trailslegal.com/", external: true },
      { label: "Case Study", url: "/trails-legal-case-study", external: false },
    ],
  },
  {
    id: "butterfly-project",
    title: "The Butterfly Project",
    logoSrc: "/WPFQXzXewBVy5FNFqSoY5jaFCWs.webp",
    description: "Cowork together and meet new people.",
    role: "Founder | Product Designer | Community Builder",
    mediaType: "image",
    mediaSrc: "/IMG_5698.jpg",
  },
]

