import { IntroducingSyntra } from "@/components/articles/syntra-falcon"

interface PageProps {
  searchParams?: { theme?: string; embedded?: string }
}

export default function Page({ searchParams }: PageProps) {
  const isDark = searchParams?.theme === "dark"
  const embedded = searchParams?.embedded === "1"
  
  return <IntroducingSyntra isDark={isDark} embedded={embedded} />
}
