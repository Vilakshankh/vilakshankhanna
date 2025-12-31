interface TecnisheWorkProps {
  isDark?: boolean
}

export function TecnisheWork({ isDark = false }: TecnisheWorkProps) {
  return (
    <div
      className={`w-[750px] mx-auto p-5 rounded-sm border ${
        isDark 
          ? 'border-white/10 bg-white/5' 
          : 'border-black/10 bg-black/5'
      }`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h3 className={`font-helvetica text-xl font-medium ${isDark ? 'text-white' : 'text-black'}`}>
            Tecnishe | Co-founder, Product Designer
          </h3>
          <p className={`font-helvetica text-xs ${isDark ? 'text-white/60' : 'text-black/60'}`}>
            Med-Tech AI Startup | Montréal, QC | 2021–2023
          </p>
        </div>
        <ul className={`space-y-2 mt-1 list-disc list-outside pl-5 ${isDark ? 'text-white/70' : 'text-black/70'}`}>
          <li className={`font-helvetica text-sm leading-relaxed`}>
            Cut ER wait times by 5 hours by building an LLM-powered SaaS using GPT-4, directing low-acuity patients to telehealth and improving hospital flow.
          </li>
          <li className={`font-helvetica text-sm leading-relaxed`}>
            Prototyped and validated workflows using Figma wireframes, React/Next.js web prototypes, and Flutter mobile prototypes, enabling rapid iteration and usability testing early.
          </li>
          <li className={`font-helvetica text-sm leading-relaxed`}>
            Led UX architecture for the triage system, mapping decision flows, user journeys, and state logic across mobile and web to support accurate patient routing.
          </li>
          <li className={`font-helvetica text-sm leading-relaxed`}>
            Completed 200+ interviews with patients, clinicians, and administrators, forming partnerships with two telehealth companies, a public hospital, and a government innovation hub.
          </li>
        </ul>
      </div>
    </div>
  )
}

