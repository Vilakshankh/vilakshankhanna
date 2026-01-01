import { StudioenokRandomAnxietyDesignAutopsy } from "@/components/articles/studioenok-randomanxiety-design-autopsy"

interface PageProps {
  searchParams?: { theme?: string; embedded?: string }
}

export default function Page({ searchParams }: PageProps) {
  const isDark = searchParams?.theme === "dark"
  const embedded = searchParams?.embedded === "1"
  
  return <StudioenokRandomAnxietyDesignAutopsy isDark={isDark} embedded={embedded} />
}
