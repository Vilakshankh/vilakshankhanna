interface MatroxWorkProps {
}

export function MatroxWork({}: MatroxWorkProps) {
  return (
    <div
      className="w-[750px] mx-auto p-5 rounded-sm border border-black/10 bg-black/5"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="font-helvetica text-xl font-medium text-black">
            Matrox | Associate Product Manager
          </h3>
          <p className="font-helvetica text-xs text-black/60">
            Montréal, QC | 2023–2024
          </p>
        </div>
        <ul className="space-y-2 mt-1 list-disc list-outside pl-5 text-black/70">
          <li className={`font-helvetica text-sm leading-relaxed`}>
            Closed a $1M contract by designing UI/UX in Figma, testing, and demoing features for major media companies; worked directly with PMs, engineers, and sales teams to drive adoption across 3 business units.
          </li>
          <li className={`font-helvetica text-sm leading-relaxed`}>
            Led development of 5 GPU and networking features, using customer insights and KPIs to guide engineering, QA, and PM teams through testing, refinement, and post-release fixes.
          </li>
          <li className={`font-helvetica text-sm leading-relaxed`}>
            Reduced support queries by 95% by building 10 technical product guides covering GPU architecture and networking protocols, collaborating with engineering to address recurring customer issues.
          </li>
        </ul>
      </div>
    </div>
  )
}

