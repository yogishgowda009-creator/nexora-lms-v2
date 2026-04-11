import { ExternalLink } from 'lucide-react'

export default function ResourceChip({ label, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-[#252637] bg-[#1A1B2E] px-3 py-1 text-xs text-[#8B8FA8] transition-colors duration-150 hover:border-[#6C63FF]/50 hover:text-[#E8E9F3]"
    >
      <ExternalLink size={11} />
      {label}
    </a>
  )
}
