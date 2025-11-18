import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  role?: string
  tags?: string[]
  links?: { label: string; href: string }[]
}

export function ProjectCard({ title, description, role, tags, links }: ProjectCardProps) {
  return (
    <div className="text-white p-6 md:p-8 flex flex-col gap-4">
      <h3 className="text-lg md:text-xl font-bold font-helvetica">
        {title}
      </h3>
      {role && (
        <p className="text-xs font-helvetica text-white/60">
          {role}
        </p>
      )}
      <p className="text-xs md:text-sm font-helvetica text-white/70">
        {description}
      </p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs font-helvetica px-2 py-0.5 border border-white/20 rounded text-white/60">
              {tag}
            </span>
          ))}
        </div>
      )}
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-3 text-xs font-helvetica">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white/60 hover:text-white/80 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

