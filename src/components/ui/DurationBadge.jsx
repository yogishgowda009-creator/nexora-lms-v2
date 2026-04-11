import { Clock } from 'lucide-react'

export default function DurationBadge({ duration }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-[#8B8FA8]">
      <Clock size={13} className="text-[#F59E0B]" />
      {duration}
    </span>
  )
}
