"use client"

import {
  ArticleContent,
  ArticleHero,
  ArticleSection,
  ArticleImage,
} from "@/components/ui/article-content"

interface HowToRedesignOldIndustriesProps {
  embedded?: boolean
}

export function HowToRedesignOldIndustries({ embedded = false }: HowToRedesignOldIndustriesProps) {
  return (
    <ArticleContent embedded={embedded}>
      <ArticleHero
        title="How to Redesign Old Industries"
        subtitle="Design is informed by personal philosophy. Your opinions and values guide what you question, what you challenge, and what you choose to improve."
        date="January 6, 2026"
        backButton={!embedded}
      />

      <ArticleImage
        src="/trails-product-images/feature_key legal insights.gif"
        alt="Feature Key Legal Insights"
        className="w-full h-auto rounded-sm mb-12"
        unoptimized
      />

      <ArticleSection>
        <p>
          Design is informed by personal philosophy. Your opinions and values guide what you question, what you challenge, and what you choose to improve. A stance emerges through research, careful judgment, and the willingness to call out ineffective patterns. When you operate from your values, your work naturally moves toward improving experiences that have received little attention. In older industries, this space is wide. Meaningful change often starts with a clear perspective.
        </p>

        <p>
          When working as a designer in an old industry like legal, you can&apos;t let existing products define your standards for good user experience. Doing so means you&apos;re inheriting the industry&apos;s limitations without questioning them. Instead of benchmarking against what already exists, it&apos;s better to start from scratch and understand how your users think, what are they trying to achieve and more importantly, <em>why</em> are they making certain choices.
        </p>

        <p>
          Understanding the why moves design thinking away from product aesthetics alone and into systems. Once you understand the architecture your target market operate within (the workflows, constraints, historical habits, and risk structures), you start exploring and observing the environment. That&apos;s where real design and innovation lives, redefining the experience itself, and in an old industry, innovation is what moves it to the next evolution cycle.
        </p>
      </ArticleSection>

      <ArticleSection title="What is time without innovation?">
        <p>
          Time reveals weak foundations through duct-tape solutions and shortcuts. What begins as a workaround eventually <em>becomes</em> the system. When situations escalate, the absence of structured information in these systems becomes impossible to ignore.
        </p>

        <p>
          High-quality user interviews expose these patterns early. If you dig deeper you&apos;ll find entire ecosystems of tools built solely to support shortcuts, while the underlying foundation remains untouched. That neglected foundation is where the real opportunity lives.
        </p>
      </ArticleSection>

      <ArticleImage
        src="/trails/Pasted image 20260106122508.png"
        alt="Trails Product Screenshot"
        className="w-full h-auto rounded-sm mb-12"
      />

      <ArticleSection title="Actionable take aways">
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Treat legacy products as signals of historical constraints. They provide insight into where systems have been patched rather than designed.</li>
          <li>Begin by understanding user thinking. Their decision patterns and risk considerations inform how to redesign a product.</li>
          <li>Use interviews to identify recurring behaviors that emerged as practical responses to system gaps and existing products with bad design.</li>
          <li>Examine where effort accumulates in exiting product experiences. User-borne effort often highlights missing structure.</li>
          <li>Focus attention on the underlying system. Foundational improvements tend to create the greatest leverage for innovation.</li>
          <li>Ground your opinions in research. Write down the patterns you observe, name the practices that limit users, and treat those insights as signals for where standards can evolve.</li>
        </ul>
      </ArticleSection>
    </ArticleContent>
  )
}

