import { TrailsLegalCaseStudy } from "@/components/articles/trails-legal-case-study"

interface PageProps {
  searchParams?: { theme?: string; embedded?: string }
}

export default function Page({ searchParams }: PageProps) {
  const isDark = searchParams?.theme === "dark"
  const embedded = searchParams?.embedded === "1"
  
  return <TrailsLegalCaseStudy isDark={isDark} embedded={embedded} />
}
