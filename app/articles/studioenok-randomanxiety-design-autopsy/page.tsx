import { StudioenokRandomAnxietyDesignAutopsy } from "@/components/articles/studioenok-randomanxiety-design-autopsy"

interface PageProps {
  searchParams?: { embedded?: string }
}

export default function Page({ searchParams }: PageProps) {
  const embedded = searchParams?.embedded === "1"
  
  return <StudioenokRandomAnxietyDesignAutopsy embedded={embedded} />
}
