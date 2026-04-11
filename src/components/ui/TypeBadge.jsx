import { BookOpen, Play, Code2 } from 'lucide-react'

const config = {
  read:     { icon: BookOpen, cls: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',   label: 'Read' },
  watch:    { icon: Play,     cls: 'bg-purple-500/10 text-purple-400 border border-purple-500/20', label: 'Watch' },
  practice: { icon: Code2,    cls: 'bg-green-500/10 text-green-400 border border-green-500/20',  label: 'Practice' },
}

export default function TypeBadge({ type }) {
  const { icon: Icon, cls, label } = config[type] ?? config.read
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${cls}`}>
      <Icon size={12} />
      {label}
    </span>
  )
}
