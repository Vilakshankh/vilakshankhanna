interface EducationProps {
}

export function Education({}: EducationProps) {
  return (
    <div className="w-[750px] mx-auto p-5 rounded-sm border border-black/10 bg-black/5">
      <h2 className="font-helvetica text-xl font-medium mb-2 text-black">Education</h2>
      <p className="font-helvetica text-sm text-black/70 mb-1.5">
        Computer Science and Business Administration (Specializing in UI/UX Design and Video Game Design)
      </p>
      <p className="font-helvetica text-xs text-black/60">
        Memorial University of Newfoundland (BSc. 2024)
      </p>
    </div>
  )
}

