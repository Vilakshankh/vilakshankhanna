"use client"

import {
  ArticleContent,
  ArticleHero,
  ArticleSection,
  ArticleImage,
  ArticleLink,
  ArticleTags,
  ArticleSubheading
} from "@/components/ui/article-content"

const ASSETS = {
  codeMode: "/articles/Syntra in Falcon/Code Mode (Default).png",
  editPreview: "/articles/Syntra in Falcon/Preview Mode Activated - Selecting Component Mode with Customization Panel Open.png",
  hierarchyExplainer: "/articles/Syntra in Falcon/Component Hierarchy View explainer.png",
  selectTool: "/articles/Syntra in Falcon/Preview Mode Activated - Selecting Component Mode with Customization Panel Open.png",
  customization: "/articles/Syntra in Falcon/Component Customization.png",
  marketingFrame: "/articles/Syntra in Falcon/Frame 38.png",
  themeBuilderRef: "/articles/Syntra in Falcon/Frame 36.png",
}

export default function IntroducingSyntra(props: { isDark?: boolean; embedded?: boolean; params?: any; searchParams?: any } = {}) {
  const { isDark = false, embedded = false } = props
  return (
    <ArticleContent isDark={isDark} embedded={embedded}>
      <ArticleHero
        isDark={isDark}
        title="Introducing Syntra"
        subtitle="A new design experience that helps Design Engineers visually manipulate components and see their code change in real time."
        date="December 31, 2025"
        backButton={!embedded}
      />

      <ArticleImage
        src="/articles/Syntra in Falcon/Frame 38.png"
        alt="Syntra hero illustration"
        priority
        isDark={isDark}
      />

      <ArticleSection isDark={isDark}>
        <p>
          Designers and engineers have spent decades battling the same fundamental problem: the gap between imagining an interface and building it.
          The workflow is still fragmented—design in one tool, implementation in another, and constant back-and-forth.
        </p>
        <p>
          The friction doesn&apos;t come from bad design or bad engineering. It comes from the mental context switch: moving from creative
          experimentation into rigid, analytical coding. That workload with current tools is separated, slow, and breaks flow state.
        </p>
        <p>
          AI tools claim to remove friction by &quot;auto generating&quot; prototypes from prompts, but in practice they produce sloppy, non-iterative output.
          They attempt to eliminate the back-and-forth instead of improving it. But that back-and-forth is where real design thinking happens.
          We discover intent, emotion, interaction, and the nuance of how something should <em>feel</em>.
        </p>
      </ArticleSection>

      <ArticleSection isDark={isDark} title="Reducing Friction For Designers To Be Engineers">
        <p>
          Falcon already sits at the intersection of imagination and implementation. Its IDE interface, component library, and live preview give it
          a unique opportunity to let designers creatively experiment while building production code side by side.
        </p>

        <p>
          Engineers care about structure and functionality. Designers care about visual manipulation and freedom. The goal is to let both groups
          collaborate inside the same space, without switching tools or mindsets.
        </p>

        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Engineers build components without obsessing over cosmetics</li>
          <li>Designers adjust layout, spacing, and visuals without touching code</li>
          <li>Both changes are reflected instantly in one environment</li>
        </ul>

        <p>
          <strong>Syntra</strong> is visual component manipulation with real-time code change. It bridges design and development without forcing anyone
          to leave the environment—allowing design engineers to accelerate creativity and development.
        </p>
      </ArticleSection>

      <ArticleSection isDark={isDark} title="How does Syntra work?">
        <p>
          When a user enters Falcon, they begin in code mode. This grounds engineers immediately, while still keeping room for designers to enter
          visually when needed. By default, Falcon behaves like a traditional IDE until the user opens a component file.
        </p>

        <ArticleImage
          src={ASSETS.codeMode}
          alt="Coding a component in Code Mode"
          caption="Coding a component in Code Mode (default)"
          isDark={isDark}
        />

        <ArticleSubheading isDark={isDark}>
          Editing a Component Directly in Preview Mode
        </ArticleSubheading>

        <p>
          When a user views Preview in Falcon, they can edit the component visually in Preview Mode (Syntra): moving elements, adjusting spacing,
          refining appearance, updating typography. Any changes made in Syntra update the underlying code automatically in the IDE on the left.
        </p>

        <ArticleImage
          src={ASSETS.editPreview}
          alt="Editing a component directly in Preview Mode"
          caption="Editing a component directly in Preview Mode"
          isDark={isDark}
        />

        <p>
          To make this possible, Syntra introduces two supporting systems:
          <strong> the Hierarchy View</strong> and <strong>Cosmetic Editing Tools</strong>.
        </p>
      </ArticleSection>

      <ArticleSection isDark={isDark} title="Hierarchy View">
        <p>
          The Hierarchy View is a hierarchical outline that appears whenever a component is being worked on. It mirrors the exact structure of the
          component&apos;s code: parent, child, wrapper, and layout group—helping designers understand structure without scanning code.
        </p>

        <ArticleImage
          src={ASSETS.hierarchyExplainer}
          alt="Hierarchy View explainer"
          caption="Hierarchy View mirrors the component&apos;s code structure"
          isDark={isDark}
        />

        <p>
          Dragging items up or down in the hierarchy updates the code structure instantly. Structural changes in code are reflected visually in Preview
          Mode.
        </p>

        <ArticleImage
          src={ASSETS.selectTool}
          alt="Selecting a component highlights it in code and in hierarchy"
          caption="Selecting a component highlights it across preview, hierarchy, and code"
          isDark={isDark}
        />
      </ArticleSection>

      <ArticleSection isDark={isDark} title="Cosmetic Editing Tools">
        <p>
          These tools appear when a component is selected in Syntra. They allow designers to work directly with the component instead of modifying
          values in code—every visual change is reflected back into code.
        </p>

        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>layout</li>
          <li>spacing</li>
          <li>positioning</li>
          <li>fill</li>
          <li>borders</li>
          <li>radius</li>
          <li>typography (if the font exists in the project)</li>
          <li>width / height</li>
          <li>appearance</li>
        </ul>

        <ArticleImage
          src={ASSETS.customization}
          alt="Component customization panel"
          caption="A closer look at Syntra&apos;s customization tools"
          isDark={isDark}
        />
      </ArticleSection>

      <ArticleSection isDark={isDark} title="How it fits into workflow">
        <p>A typical flow looks like this:</p>

        <ol className="list-decimal list-inside space-y-2 pl-4">
          <li>Engineer opens a component file (default code mode).</li>
          <li>The Hierarchy View appears with its component structure.</li>
          <li>Syntra shows the component visually.</li>
          <li>Designer opens the editing tools and modifies the component directly in Syntra.</li>
          <li>The code updates automatically reflecting each visual change.</li>
          <li>Engineers adjust logic/structure; designers continue refining styling.</li>
        </ol>

        <p>
          This shifts the workflow from <em>editing UI through code</em> → to <em>editing UI directly through Syntra</em>, while keeping the underlying
          code engineer-friendly.
        </p>
      </ArticleSection>

      <ArticleSection isDark={isDark} title="Sample Prototype">
        <ArticleLink href="https://zero-minus-82708488.figma.site/" isDark={isDark}>
          Open the Syntra prototype
        </ArticleLink>
      </ArticleSection>

      <ArticleSection isDark={isDark} title="Testing">
        <p>
          I would approach testing this feature the same way a design engineer would encounter it in real use. The goal is to understand how users
          interpret Syntra, where friction appears, and how well the visual editing model holds up under real workflows.
        </p>

        <p>
          I interviewed 3 design engineers on low-fidelity mocks for first-impression understanding. Higher-quality engagement testing would involve
          low-fidelity interactive prototypes as proof of concept.
        </p>

        <ArticleSubheading isDark={isDark}>Success criteria</ArticleSubheading>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Clarity:</strong> Users instantly recognize Syntra is editable and understand the relationship between hierarchy, canvas, and code.
          </li>
          <li>
            <strong>Flow:</strong> Users move between roles (designer ↔ engineer) without breaking mental context.
          </li>
          <li>
            <strong>Predictability:</strong> Edits feel reversible, consistent, and coherent across preview, hierarchy, and code.
          </li>
        </ul>

        <ArticleSubheading isDark={isDark}>Potential cognitive load leaks</ArticleSubheading>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Are there too many panels open?</li>
          <li>Does the hierarchy feel natural or intrusive?</li>
          <li>Are editing tools grouped intuitively and discoverable?</li>
          <li>How often do users stop to inspect code for reassurance?</li>
        </ul>
      </ArticleSection>

      <ArticleSection isDark={isDark} title="Marketing and positioning">
        <p>
          <strong>Syntra</strong> captures the futuristic spirit of what this workflow enables: a creative space inside Falcon where the interface becomes
          something you can shape directly with your hands.
        </p>

        <ArticleImage
          src={ASSETS.marketingFrame}
          alt="Introducing Syntra marketing frame"
          caption="&quot;Introducing Syntra&quot; marketing frame"
          isDark={isDark}
        />

        <p>
          With Syntra, Preview Mode becomes fully interactive: select a component, adjust spacing, change appearance, refine typography while Falcon
          updates the code live. Drag items in the Hierarchy View to reorder structure, and see both the UI and code respond instantly.
        </p>
      </ArticleSection>

      <ArticleSection isDark={isDark} title="Feedback and future versions">
        <p>
          Syntra&apos;s first version forms the foundation: editing components visually with code updating in real time. From there, the evolution depends on
          observing how users push, bend, and break the system.
        </p>

        <ArticleSubheading isDark={isDark}>Version 1.1: refine the core interaction</ArticleSubheading>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Refine hierarchy drag + drop behaviors</li>
          <li>Smooth code generation edge cases</li>
          <li>Add micro-interactions that reinforce predictability</li>
        </ul>

        <ArticleSubheading isDark={isDark}>Version 2: thematic customization</ArticleSubheading>
        <p>
          A strong signal from interviews: designers value theme systems—defining appearance, semantics, and stylistic rules. Extending Syntra into
          theme-level editing could unlock major value.
        </p>

        <ArticleImage
          src={ASSETS.themeBuilderRef}
          alt="Theme builder reference"
          caption="Theme builder reference mentioned in user interviews"
          isDark={isDark}
        />

        <ArticleSubheading isDark={isDark}>Long-term vision</ArticleSubheading>
        <p>
          <strong>Make Falcon the place where interfaces are shaped and coded together.</strong>
        </p>
      </ArticleSection>

      <ArticleTags
        tags={[
          "#designengineering",
          "#productdesign",
          "#ux",
          "#devtools",
          "#falcon",
          "#prototyping",
          "#ui",
          "#designsystems",
        ]}
        isDark={isDark}
      />
    </ArticleContent>
  )
}
