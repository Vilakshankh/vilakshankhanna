interface TrailsWorkProps {
}

export function TrailsWork({}: TrailsWorkProps) {
  return (
    <div
      className="w-[750px] mx-auto p-5 rounded-sm border border-black/10 bg-black/5"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="font-helvetica text-xl font-medium text-black">
            Trails | Co-Founder, Product Designer
          </h3>
          <p className="font-helvetica text-xs text-black/60">
            Legal-Tech AI Startup | Montréal, QC | 2025–Present
          </p>
        </div>
        <ul className="space-y-2 mt-1 list-disc list-outside pl-5 text-black/70">
          <li className={`font-helvetica text-sm leading-relaxed`}>
            Designed and built UI for 10+ U.S. law firms, using Figma, React, Next.js, and TypeScript with AI tools like v0.dev and Cursor to turn complex legal workflows into intuitive interfaces, improving firm productivity by 86.7% and driving $500K+ projected revenue.
          </li>
          <li className={`font-helvetica text-sm leading-relaxed`}>
            Prototyped and shipped features quickly using Cursor and v0.dev, shortening sprint cycles and supporting a lean, iterative development process with usability testing early.
          </li>
          <li className={`font-helvetica text-sm leading-relaxed`}>
            Owned product components end-to-end: product reqs, UX architecture, component design, prototyping, QA, and implementation handoff, ensuring smooth translation from Figma into React, React Native, and SwiftUI.
          </li>
          <li className={`font-helvetica text-sm leading-relaxed`}>
            Completed 200+ interviews and used ChatGPT + NotebookLM to reduce research analysis time by 70% and speed up prototyping by 3×.
          </li>
        </ul>
      </div>
    </div>
  )
}

