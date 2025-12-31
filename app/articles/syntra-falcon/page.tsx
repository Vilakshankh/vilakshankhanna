import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const ASSETS = {
  codeMode: "/articles/Syntra in Falcon/Code Mode (Default).png",
  editPreview: "/articles/Syntra in Falcon/Preview Mode Activated - Selecting Component Mode with Customization Panel Open.png",
  hierarchyExplainer: "/articles/Syntra in Falcon/Component Hierarchy View explainer.png",
  selectTool: "/articles/Syntra in Falcon/Preview Mode Activated - Selecting Component Mode with Customization Panel Open.png",
  customization: "/articles/Syntra in Falcon/Component Customization.png",
  marketingFrame: "/articles/Syntra in Falcon/Frame 38.png",
  themeBuilderRef: "/articles/Syntra in Falcon/Frame 36.png",
}

export default function IntroducingSyntra() {
  return (
    <main className="flex min-h-screen flex-col bg-white py-8 px-12">
      <div className="w-[750px] mx-auto">
        {/* Back Button */}
        <Link href="/" className="inline-block mb-8">
          <Button variant="outline" size="icon" aria-label="Back">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>

        {/* Hero Title */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-3 text-left font-helvetica">
          Introducing Syntra
        </h1>
        <span className="block text-md font-helvetica md:text-md mb-3">
          A new design experience that helps Design Engineers visually manipulate components and see their code change in real time.
        </span>
        <p className="text-sm font-helvetica text-black/60 mb-8">
          by Vilakshan Khanna · December 31, 2025
        </p>

        {/* Hero Image */}
        <div className="mb-12">
          <Image
            src="/articles/Syntra in Falcon/Frame 38.png"
            alt="Syntra hero illustration"
            width={1200}
            height={800}
            className="w-full h-auto rounded-sm"
            priority
          />
        </div>

        {/* Intro */}
        <section className="mb-16">
          <div className="space-y-6 text-base leading-relaxed text-black/80 font-helvetica">
            <p>
              Designers and engineers have spent decades battling the same fundamental problem: the gap between imagining an interface and building it.
              The workflow is still fragmented—design in one tool, implementation in another, and constant back-and-forth.
            </p>
            <p>
              The friction doesn’t come from bad design or bad engineering. It comes from the mental context switch: moving from creative
              experimentation into rigid, analytical coding. That workload with current tools is separated, slow, and breaks flow state.
            </p>
            <p>
              AI tools claim to remove friction by “auto generating” prototypes from prompts, but in practice they produce sloppy, non-iterative output.
              They attempt to eliminate the back-and-forth instead of improving it. But that back-and-forth is where real design thinking happens.
              We discover intent, emotion, interaction, and the nuance of how something should <em>feel</em>.
            </p>
          </div>
        </section>

        {/* Reducing Friction */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left font-helvetica">
            Reducing Friction For Designers To Be Engineers
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-black/80 font-helvetica">
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
          </div>
        </section>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left font-helvetica">
            How does Syntra work?
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-black/80 font-helvetica">
            <p>
              When a user enters Falcon, they begin in code mode. This grounds engineers immediately, while still keeping room for designers to enter
              visually when needed. By default, Falcon behaves like a traditional IDE until the user opens a component file.
            </p>

            <figure className="space-y-3">
              <Image
                src={ASSETS.codeMode}
                alt="Coding a component in Code Mode"
                width={1600}
                height={1000}
                className="w-full h-auto rounded-sm"
              />
              <figcaption className="text-sm text-black/60 font-helvetica">
                Coding a component in Code Mode (default)
              </figcaption>
            </figure>

            <h3 className="text-xl md:text-2xl font-semibold pt-4 font-helvetica">
              Editing a Component Directly in Preview Mode
            </h3>

            <p>
              When a user views Preview in Falcon, they can edit the component visually in Preview Mode (Syntra): moving elements, adjusting spacing,
              refining appearance, updating typography. Any changes made in Syntra update the underlying code automatically in the IDE on the left.
            </p>

            <figure className="space-y-3">
              <Image
                src={ASSETS.editPreview}
                alt="Editing a component directly in Preview Mode"
                width={1600}
                height={1000}
                className="w-full h-auto rounded-sm"
              />
              <figcaption className="text-sm text-black/60 font-helvetica">
                Editing a component directly in Preview Mode
              </figcaption>
            </figure>

            <p>
              To make this possible, Syntra introduces two supporting systems:
              <strong> the Hierarchy View</strong> and <strong>Cosmetic Editing Tools</strong>.
            </p>
          </div>
        </section>

        {/* Hierarchy View */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left font-helvetica">
            Hierarchy View
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-black/80 font-helvetica">
            <p>
              The Hierarchy View is a hierarchical outline that appears whenever a component is being worked on. It mirrors the exact structure of the
              component’s code: parent, child, wrapper, and layout group—helping designers understand structure without scanning code.
            </p>

            <figure className="space-y-3">
              <Image
                src={ASSETS.hierarchyExplainer}
                alt="Hierarchy View explainer"
                width={1600}
                height={1000}
                className="w-full h-auto rounded-sm"
              />
              <figcaption className="text-sm text-black/60 font-helvetica">
                Hierarchy View mirrors the component’s code structure
              </figcaption>
            </figure>

            <p>
              Dragging items up or down in the hierarchy updates the code structure instantly. Structural changes in code are reflected visually in Preview
              Mode.
            </p>

            <figure className="space-y-3">
              <Image
                src={ASSETS.selectTool}
                alt="Selecting a component highlights it in code and in hierarchy"
                width={1600}
                height={1000}
                className="w-full h-auto rounded-sm"
              />
              <figcaption className="text-sm text-black/60 font-helvetica">
                Selecting a component highlights it across preview, hierarchy, and code
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Editing Tools */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left font-helvetica">
            Cosmetic Editing Tools
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-black/80 font-helvetica">
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

            <figure className="space-y-3">
              <Image
                src={ASSETS.customization}
                alt="Component customization panel"
                width={1600}
                height={1000}
                className="w-full h-auto rounded-sm"
              />
              <figcaption className="text-sm text-black/60 font-helvetica">
                A closer look at Syntra’s customization tools
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Workflow */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left font-helvetica">
            How it fits into workflow
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-black/80 font-helvetica">
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
          </div>
        </section>

        {/* Prototype */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left font-helvetica">
            Sample Prototype
          </h2>

          <div className="space-y-4 text-base leading-relaxed text-black/80 font-helvetica">
            <a
              href="https://zero-minus-82708488.figma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline"
            >
              Open the Syntra prototype <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Testing */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left font-helvetica">
            Testing
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-black/80 font-helvetica">
            <p>
              I would approach testing this feature the same way a design engineer would encounter it in real use. The goal is to understand how users
              interpret Syntra, where friction appears, and how well the visual editing model holds up under real workflows.
            </p>

            <p>
              I interviewed 3 design engineers on low-fidelity mocks for first-impression understanding. Higher-quality engagement testing would involve
              low-fidelity interactive prototypes as proof of concept.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold pt-2 font-helvetica">Success criteria</h3>
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

            <h3 className="text-xl md:text-2xl font-semibold pt-2 font-helvetica">Potential cognitive load leaks</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Are there too many panels open?</li>
              <li>Does the hierarchy feel natural or intrusive?</li>
              <li>Are editing tools grouped intuitively and discoverable?</li>
              <li>How often do users stop to inspect code for reassurance?</li>
            </ul>
          </div>
        </section>

        {/* Marketing */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left font-helvetica">
            Marketing and positioning
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-black/80 font-helvetica">
            <p>
              <strong>Syntra</strong> captures the futuristic spirit of what this workflow enables: a creative space inside Falcon where the interface becomes
              something you can shape directly with your hands.
            </p>

            <figure className="space-y-3">
              <Image
                src={ASSETS.marketingFrame}
                alt="Introducing Syntra marketing frame"
                width={1600}
                height={1000}
                className="w-full h-auto rounded-sm"
              />
              <figcaption className="text-sm text-black/60 font-helvetica">
                “Introducing Syntra” marketing frame
              </figcaption>
            </figure>

            <p>
              With Syntra, Preview Mode becomes fully interactive: select a component, adjust spacing, change appearance, refine typography while Falcon
              updates the code live. Drag items in the Hierarchy View to reorder structure, and see both the UI and code respond instantly.
            </p>
          </div>
        </section>

        {/* Future Versions */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left font-helvetica">
            Feedback and future versions
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-black/80 font-helvetica">
            <p>
              Syntra’s first version forms the foundation: editing components visually with code updating in real time. From there, the evolution depends on
              observing how users push, bend, and break the system.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold pt-2 font-helvetica">Version 1.1: refine the core interaction</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Refine hierarchy drag + drop behaviors</li>
              <li>Smooth code generation edge cases</li>
              <li>Add micro-interactions that reinforce predictability</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold pt-2 font-helvetica">Version 2: thematic customization</h3>
            <p>
              A strong signal from interviews: designers value theme systems—defining appearance, semantics, and stylistic rules. Extending Syntra into
              theme-level editing could unlock major value.
            </p>

            <figure className="space-y-3">
              <Image
                src={ASSETS.themeBuilderRef}
                alt="Theme builder reference"
                width={1600}
                height={1000}
                className="w-full h-auto rounded-sm"
              />
              <figcaption className="text-sm text-black/60 font-helvetica">
                Theme builder reference mentioned in user interviews
              </figcaption>
            </figure>

            <h3 className="text-xl md:text-2xl font-semibold pt-2 font-helvetica">Long-term vision</h3>
            <p>
              <strong>Make Falcon the place where interfaces are shaped and coded together.</strong>
            </p>
          </div>
        </section>

        {/* Tags */}
        <section className="mb-16">
          <div className="flex flex-wrap gap-2">
            {[
              "#designengineering",
              "#productdesign",
              "#ux",
              "#devtools",
              "#falcon",
              "#prototyping",
              "#ui",
              "#designsystems",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-black/5 rounded-full text-sm font-helvetica text-black/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
