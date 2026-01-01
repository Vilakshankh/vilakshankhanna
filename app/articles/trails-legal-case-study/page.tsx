"use client"

import {
  ArticleContent,
  ArticleHero,
  ArticleSection,
  ArticleImage,
  ArticleImageGallery,
  ArticleVideo
} from "@/components/ui/article-content"

type PageProps = { params?: any; searchParams?: any }
type CustomProps = { isDark?: boolean; embedded?: boolean }
type Props = PageProps & CustomProps

export default function TrailsLegalCaseStudy(props: Props = {} as any): JSX.Element {
  const { isDark = false, embedded = false } = props
  return (
    <ArticleContent isDark={isDark} embedded={embedded}>
      <ArticleHero
        isDark={isDark}
        title="Modern Interfaces for an Ancient Industry: My Approach to Legal UX"
        subtitle="How thoughtful design, automation, and branding can transform one of the most rigid professional ecosystems."
        date="December 30, 2025"
        backButton={!embedded}
      />

      <ArticleVideo src="/trails-product-images/trailslegal.com.mov" />

      <ArticleSection isDark={isDark} title="Product Design">
        <p>
          <strong>Trails was important to me because it was my first real attempt at reimagining how legal work could function — not just cosmetically, but fundamentally.</strong> I walked into an industry where everything felt old-school: slow systems, rigid workflows, interfaces that looked like they hadn&apos;t been touched in 20 years. I wanted to see if it was possible to take something this entrenched and redesign it into something modern, streamlined, and deeply personalized.
        </p>

        <p>
          My challenge was to understand how lawyers think, why they work the way they do, and whether technology could adapt to <em>them</em> rather than asking them to adapt to it.
        </p>

        <p>
          Over the past year, that became an intense learning process. I immersed myself in their world:
        </p>

        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>how legal research is done</li>
          <li>how employment and labor law actually functions</li>
          <li>how complaints move through a firm</li>
          <li>how lawyers store information</li>
          <li>why specific habits exist in their workflow</li>
        </ul>

        <div className="flex gap-3 my-8 overflow-x-auto">
          <ArticleImage
            src="/trails-product-images/keywordvsconversational.gif"
            alt="Keyword vs Conversational Search"
            width={300}
            height={200}
            className="rounded-xl h-auto"
            isDark={isDark}
            unoptimized
          />
          <ArticleImage
            src="/trails-product-images/featurecheck treatment.gif"
            alt="Feature Check Treatment"
            width={300}
            height={200}
            className="rounded-xl h-auto"
            isDark={isDark}
            unoptimized
          />
          <ArticleImage
            src="/trails-product-images/feature_relevancycheck.gif"
            alt="Feature Relevancy Check"
            width={300}
            height={200}
            className="rounded-xl h-auto"
            isDark={isDark}
            unoptimized
          />
          <ArticleImage
            src="/trails-product-images/feature_key legal insights.gif"
            alt="Feature Key Legal Insights"
            width={300}
            height={200}
            className="rounded-xl h-auto"
            isDark={isDark}
            unoptimized
          />
        </div>

        <p>
          From there, I built a new workflow — intake → case analysis → HR workflows — and designed the entire interface around it. I mapped their user flows, turned them into prototypes, tested them with lawyers, redesigned them, tested again, and repeated that cycle over and over.
        </p>

        <p>
          I used every tool I had — v0, Bubble, Cursor, ChatGPT, Claude — to prototype extremely fast, bring screens back to lawyers, and get immediate feedback. I worked closely with our backend engineer to understand the constraints, the architecture, and how all these ideas could exist in a real product.
        </p>

        <p>
          We ran between 200–250 user interviews, recorded them, analyzed them with AI, and studied patterns in everything they said. Over time, I started to understand this &quot;animal&quot;: how it behaves, what stresses it, what it avoids, what it values, what triggers it to make decisions.
        </p>

        <p>
          That was the most interesting part — realizing that once I understood how a lawyer <em>thinks</em>, I could influence the workflow through design. I wasn&apos;t just designing screens; I was reshaping behavior.
        </p>
      </ArticleSection>

      <div className="flex gap-3 mb-16 overflow-x-auto">
        <ArticleImage
          src="/trails-product-images/IMG_0226.PNG"
          alt="Trails Product Screenshot 2"
          width={200}
          height={400}
          className="rounded-sm h-auto"
          isDark={isDark}
        />
        <ArticleImage
          src="/trails-product-images/IMG_0229.PNG"
          alt="Trails Product Screenshot 3"
          width={200}
          height={400}
          className="rounded-sm h-auto"
          isDark={isDark}
        />
        <ArticleImage
          src="/trails-product-images/IMG_0234.PNG"
          alt="Trails Product Screenshot 4"
          width={200}
          height={400}
          className="rounded-sm h-auto"
          isDark={isDark}
        />
      </div>

      <ArticleSection isDark={isDark} title="Branding">
        <p>
          Trails&apos; branding began with a simple question I asked myself: <em>how do I modernize a legal practice without alienating the people who built it?</em> My target demographic included middle-aged lawyers with decades of experience — people who have seen the legal field evolve but still work in an environment associated with tradition, luxury, and formality: Dior suits, negotiation rooms, refined paperwork, the balance scale, and all the classic symbolism of law.
        </p>

        <p>
          To bridge that world with the modern, personalized, tech-driven experience I was designing, I drew inspiration from industries that carried a similar luxury archetype but also communicated freshness and transformation — specifically <strong>jewelry</strong> and <strong>cosmetics</strong>. Both industries sit at the intersection of heritage and renewal, elegance and innovation. That matched perfectly with Trails&apos; mission: <strong>to transform traditional legal practices into modern, technology-driven firms</strong>. So I took elements from those archetypes and translated them into the brand&apos;s visual identity.
        </p>

        <p>This shaped all of my brand decisions:</p>

        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Color palette:</strong> black, brown, white, and green — a mix of heritage, luxury, and renewal.</li>
          <li><strong>Typography:</strong> serif fonts to honor the classical, literature-rich history of law. I used <strong>Playfair Display</strong> for headings and <strong>Inter</strong> for body text to blend timeless formality with digital clarity.</li>
          <li><strong>Logo:</strong> simple, monochromatic, and flexible.</li>
          <li><strong>Name:</strong> previously &quot;LegiSimple,&quot; the rebranding came from exploring deeper symbolism. Legal work involves research paths, case histories, and paper trails. Lawyers follow trails — and they leave them. I also liked the subtle visual similarity between &quot;trials&quot; and &quot;trails,&quot; reinforcing the legal theme while still feeling modern.</li>
        </ul>

        <p>
          I also needed the branding to work across the product, the website, and our overall market positioning. Because the product itself was evolving, I approached branding with one core philosophy: <strong>iteration</strong>. Nothing was treated as final. I kept refining the identity as we learned more through interviews, user testing, feedback from lawyers, and ongoing product pivots. The challenge was especially interesting because my audience spanned both seasoned lawyers with 20–30 years of experience and the younger generation entering the field, so I had to strike a balance that resonated with both.
        </p>

        <p>
          Copywriting was one of the hardest parts early on. I was discovering the market at the same time I was discovering our value proposition, so I experimented heavily. I ran multiple rounds of messaging tests — different tones, hero lines, structures, and narrative angles — and used each round of feedback to get closer to a voice that communicated modernization, trust, and transformation without losing the gravitas of the legal industry.
        </p>

        <p>In the end, I built Trails&apos; branding the same way I build product:</p>

        <p className="text-lg font-semibold">
          test, collect feedback, refine, repeat.
        </p>

        <p>
          By applying product design and engineering iteration principles to branding, I created a living identity — one that evolved as my understanding of the legal market deepened and continues to adapt as Trails grows.
        </p>
      </ArticleSection>

      <ArticleSection isDark={isDark} title="Outcome">
        <p>500k arr</p>
        <p>4 contracts</p>
      </ArticleSection>
    </ArticleContent>
  )
}
