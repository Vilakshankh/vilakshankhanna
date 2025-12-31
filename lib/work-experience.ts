export interface WorkExperience {
  id: string
  company: string
  role: string
  location: string
  period: string
  description: string
  achievements: string[]
}

export const workExperiences: WorkExperience[] = [
  {
    id: "trails",
    company: "Trails",
    role: "Co-Founder, Product Designer",
    location: "Legal-Tech AI Startup | Montréal, QC",
    period: "2025–Present",
    description: "Legal-Tech AI Startup | Montréal, QC | 2025–Present",
    achievements: [
      "Designed and built UI for 10+ U.S. law firms, using Figma, React, Next.js, and TypeScript with AI tools like v0.dev and Cursor to turn complex legal workflows into intuitive interfaces, improving firm productivity by 86.7% and driving $500K+ projected revenue.",
      "Prototyped and shipped features quickly using Cursor and v0.dev, shortening sprint cycles and supporting a lean, iterative development process with usability testing early.",
      "Owned product components end-to-end: product reqs, UX architecture, component design, prototyping, QA, and implementation handoff, ensuring smooth translation from Figma into React, React Native, and SwiftUI.",
      "Completed 200+ interviews and used ChatGPT + NotebookLM to reduce research analysis time by 70% and speed up prototyping by 3×."
    ]
  },
  {
    id: "matrox",
    company: "Matrox",
    role: "Associate Product Manager",
    location: "Montréal, QC",
    period: "2023–2024",
    description: "Montréal, QC | 2023–2024",
    achievements: [
      "Closed a $1M contract by designing UI/UX in Figma, testing, and demoing features for major media companies; worked directly with PMs, engineers, and sales teams to drive adoption across 3 business units.",
      "Led development of 5 GPU and networking features, using customer insights and KPIs to guide engineering, QA, and PM teams through testing, refinement, and post-release fixes.",
      "Reduced support queries by 95% by building 10 technical product guides covering GPU architecture and networking protocols, collaborating with engineering to address recurring customer issues."
    ]
  },
  {
    id: "tecnishe",
    company: "Tecnishe",
    role: "Co-founder, Product Designer",
    location: "Med-Tech AI Startup | Montréal, QC",
    period: "2021–2023",
    description: "Med-Tech AI Startup | Montréal, QC | 2021–2023",
    achievements: [
      "Cut ER wait times by 5 hours by building an LLM-powered SaaS using GPT-4, directing low-acuity patients to telehealth and improving hospital flow.",
      "Prototyped and validated workflows using Figma wireframes, React/Next.js web prototypes, and Flutter mobile prototypes, enabling rapid iteration and usability testing early.",
      "Led UX architecture for the triage system, mapping decision flows, user journeys, and state logic across mobile and web to support accurate patient routing.",
      "Completed 200+ interviews with patients, clinicians, and administrators, forming partnerships with two telehealth companies, a public hospital, and a government innovation hub."
    ]
  }
]

