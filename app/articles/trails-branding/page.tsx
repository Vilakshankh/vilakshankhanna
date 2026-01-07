import { TrailsBranding } from "@/components/articles/trails-branding"

interface PageProps {
  searchParams?: { embedded?: string }
}

export default function Page({ searchParams }: PageProps) {
  const embedded = searchParams?.embedded === "1"
  
  return <TrailsBranding embedded={embedded} />
}


