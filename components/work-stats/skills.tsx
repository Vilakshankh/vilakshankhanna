interface SkillsProps {
}

export function Skills({}: SkillsProps) {
  return (
    <div className="w-[750px] mx-auto p-5 rounded-sm border border-black/10 bg-black/5">
      <h2 className="font-helvetica text-xl font-medium mb-4 text-black">Skills</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-helvetica text-sm font-medium mb-2 text-black/80">Technical</h3>
          <p className="font-helvetica text-sm text-black/70">
            React, Next.js, TypeScript, React Native, SwiftUI, Flutter, Javascript, Component Architecture
          </p>
        </div>
        <div>
          <h3 className="font-helvetica text-sm font-medium mb-2 text-black/80">Design & AI</h3>
          <p className="font-helvetica text-sm text-black/70">
            Figma, Design Systems, Interaction Design, v0.dev, Cursor, ChatGPT/LLM workflows
          </p>
        </div>
      </div>
    </div>
  )
}

