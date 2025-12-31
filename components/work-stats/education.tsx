interface EducationProps {
  isDark?: boolean
}

export function Education({ isDark = false }: EducationProps) {
  return (
    <div className={`w-[750px] mx-auto p-5 rounded-sm border ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'}`}>
      <h2 className={`font-helvetica text-xl font-medium mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Education</h2>
      <p className={`font-helvetica text-sm ${isDark ? 'text-white/70' : 'text-black/70'} mb-1.5`}>
        Computer Science and Business Administration (Specializing in UI/UX Design and Video Game Design)
      </p>
      <p className={`font-helvetica text-xs ${isDark ? 'text-white/60' : 'text-black/60'}`}>
        Memorial University of Newfoundland (BSc. 2024)
      </p>
    </div>
  )
}

