"use client"

import {
  ArticleContent,
  ArticleHero,
  ArticleSection,
  ArticleImageGallery,
  ArticleLink,
  ArticleTags
} from "@/components/ui/article-content"

const ASSETS = {
  branding1: "/articles/studioenok and randomanxiety/Studioenok_randomanxiety1.png",
  packaging: "/articles/studioenok and randomanxiety/Studioenok_randomanxiety2.png",
  productPhoto: "/articles/studioenok and randomanxiety/Studioenok_randomanxiety3.png",
  boxStack: "/articles/studioenok and randomanxiety/Studioenok_randomanxiety4.png",
}

type PageProps = { params?: any; searchParams?: any }
type CustomProps = { isDark?: boolean; embedded?: boolean }
type Props = PageProps & CustomProps

export default function StudioenokRandomAnxietyDesignAutopsy(props: Props = {} as any): JSX.Element {
  const { isDark = false, embedded = false } = props
  return (
    <ArticleContent isDark={isDark} embedded={embedded}>
      <ArticleHero
        isDark={isDark}
        title="Design Autopsy of Studioenok: Defining RandomAnxiety's Jewellery Brand"
        subtitle="How Studioenok created a rigid grid design system that reorganizes chaotic information into structured layouts, allowing wearers to build personal relationships with the jewellery."
        date="January 15, 2025"
        backButton={!embedded}
      />

      <ArticleImageGallery
        images={[
          { src: ASSETS.branding1, alt: "RandomAnxiety Branding Design" },
          { src: ASSETS.packaging, alt: "RandomAnxiety Packaging Design" },
          { src: ASSETS.productPhoto, alt: "RandomAnxiety Product Photography" },
          { src: ASSETS.boxStack, alt: "RandomAnxiety Box Stack" },
        ]}
        isDark={isDark}
      />

      <ArticleSection isDark={isDark}>
        <p>
          Studioenok believed that a jewellery brand should create space for the wearer to build a personal relationship with the object. They did this by creating a rigid grid design system for Random Anxiety. A system that reorganizes chaotic information into structured layouts.
        </p>

        <p>
          The entire identity operates in monochrome, a decision that creates space for the jewellery itself to provide warmth and material presence. The goal was to shift the focus from the branding to the wearer and allow the wearer to create their own identity with the jewellery brand, rather than imposing an identity.
        </p>
      </ArticleSection>

      <ArticleSection isDark={isDark} title="Personal Takeaways">
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Create branding systems that can hold stories</li>
          <li>Give space for the audience to build personal relationships with elements</li>
        </ul>
      </ArticleSection>

      <ArticleSection isDark={isDark} title="Further Reading">
        <div className="space-y-4">
          <ArticleLink href="https://lnkd.in/eWHVuszF" isDark={isDark}>
            Read more about Studioenok&apos;s work
          </ArticleLink>
          <br />
          <ArticleLink href="https://lnkd.in/e6xdfj6Z" isDark={isDark}>
            Additional resources on RandomAnxiety branding
          </ArticleLink>
        </div>
      </ArticleSection>

      <ArticleTags
        tags={[
          "#branding",
          "#design",
          "#productdesign",
          "#typography",
        ]}
        isDark={isDark}
      />
    </ArticleContent>
  )
}
