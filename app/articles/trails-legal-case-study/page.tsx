import { TrailsLegalCaseStudy } from "@/components/articles/trails-legal-case-study"

interface PageProps {
  searchParams?: { embedded?: string }
}

export default function Page({ searchParams }: PageProps) {
  const embedded = searchParams?.embedded === "1"
  
  return <TrailsLegalCaseStudy embedded={embedded} />
}
