import { IntroducingSyntra } from "@/components/articles/syntra-falcon"

interface PageProps {
  searchParams?: { embedded?: string }
}

export default function Page({ searchParams }: PageProps) {
  const embedded = searchParams?.embedded === "1"
  
  return <IntroducingSyntra embedded={embedded} />
}
