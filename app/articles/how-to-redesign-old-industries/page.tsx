import { HowToRedesignOldIndustries } from "@/components/articles/how-to-redesign-old-industries"

interface PageProps {
  searchParams?: { embedded?: string }
}

export default function Page({ searchParams }: PageProps) {
  const embedded = searchParams?.embedded === "1"
  
  return <HowToRedesignOldIndustries embedded={embedded} />
}

