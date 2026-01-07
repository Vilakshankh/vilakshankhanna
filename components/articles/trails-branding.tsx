"use client"

import {
  ArticleContent,
  ArticleHero,
  ArticleSection,
  ArticleVideo,
} from "@/components/ui/article-content"

interface TrailsBrandingProps {
  embedded?: boolean
}

export function TrailsBranding({ embedded = false }: TrailsBrandingProps) {
  return (
    <ArticleContent embedded={embedded}>
      <ArticleHero
        title="Branding a legal startup - Trails"
        subtitle="How do I modernize an old industry like law with technological innovation symbolizing risktaking."
        date="January 6, 2026"
        backButton={!embedded}
      />

      <ArticleVideo src="/trails/trailslandingpage2.mp4" />

      <ArticleSection>
        <p>
          My target demographic included middle-aged lawyers with decades of legal experience, but not necessarily technical. People who have seen the legal field evolve but still work in an environment associated with tradition, luxury, and formality: Dior suits, negotiation rooms, refined paperwork, the balance scale, and all the classic symbolism of law. While representing a demographic filled with risktakers and inviting AI into their workflow?
        </p>

        <p>
          To bridge that world with the modern, personalized, tech-driven experience I was designing, I drew inspiration from industries that carried a similar luxury archetype but also communicated transformation. <strong>Cosmetics</strong>.
        </p>

        <p>
          Elegance and innovation. That matched perfectly with Trails&apos; mission <strong>to transform traditional legal practices into modern, technology-driven firms</strong>. So I took elements from those archetypes and translated them into the brand&apos;s visual identity.
        </p>

        <p>This shaped all of my brand decisions:</p>

        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Color palette:</strong> black, brown, white, and green — a mix of heritage, luxury, and renewal.</li>
          <li><strong>Typography:</strong> serif fonts to honor the classical, literature-rich history of law. I used <strong>Playfair Display</strong> for headings and <strong>Inter</strong> for body text to blend timeless formality with digital clarity.</li>
          <li><strong>Logo:</strong> simple, monochromatic, and flexible. T for trails...or trials, or a stamp.</li>
          <li><strong>Name:</strong> previously &quot;LegiSimple,&quot; the rebranding came from exploring deeper symbolism. Legal work involves research paths, case histories, and paper trails. Lawyers follow trails — and they leave them. I also liked the subtle visual similarity between &quot;trials&quot; and &quot;trails,&quot; reinforcing the legal theme.</li>
        </ul>
      </ArticleSection>
    </ArticleContent>
  )
}

