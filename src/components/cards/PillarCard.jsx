import { Link } from 'react-router-dom'
import { Code2, Target, Bot, Brain, MessageSquare, ClipboardList, Clock, BookOpen, Layers } from 'lucide-react'
import StatBadge from '../ui/StatBadge'
import ProgressBar from '../ui/ProgressBar'

const pillarIcons = {
  'tech-dsa':        Code2,
  'interview-skills': Target,
  'genai-usage':     Bot,
  'mindset':         Brain,
  'soft-skills':     MessageSquare,
  'interview-prep':  ClipboardList,
}

export default function PillarCard({ pillar, index }) {
  const Icon = pillarIcons[pillar.slug] ?? Code2
  const totalLessons = pillar.sections.reduce((s, sec) => s + sec.lessons.length, 0)
  const totalSections = pillar.sections.length
  const stagger = `stagger-${Math.min(index, 5)}`

  return (
    <div className={`fade-up ${stagger} flex flex-col overflow-hidden rounded-xl border border-[#252637] bg-[#13141F] transition-colors duration-200 hover:border-[#6C63FF]/50`}>
      {/* Gradient top strip */}
      <div className={`h-1 w-full bg-gradient-to-r ${pillar.color ?? 'from-[#6C63FF] to-[#8B85FF]'}`} />

      <div className="flex flex-col p-5">
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6C63FF]/15">
          <Icon size={20} className="text-[#6C63FF]" />
        </div>
        <span className="rounded-full bg-[#6C63FF]/20 px-2 py-0.5 text-xs font-semibold text-[#6C63FF]">
          FREE
        </span>
      </div>

      {/* Title + tagline */}
      <h3 className="mt-3 font-semibold text-[#E8E9F3]" style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.05rem' }}>
        {pillar.title}
      </h3>
      <p className="mt-1 line-clamp-2 text-sm text-[#8B8FA8]">{pillar.tagline}</p>

      {/* What you'll crack */}
      {pillar.whatYouWillCrack?.length > 0 && (
        <ul className="mt-3 space-y-1">
          {pillar.whatYouWillCrack.slice(0, 3).map((item, i) => (
            <li key={i} className="flex items-start gap-1.5 text-xs text-[#8B8FA8]">
              <span className="mt-0.5 text-[#22D3A5]">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Stats */}
      <div className="mt-4 flex items-center gap-4">
        <StatBadge icon={Clock}    value={`${pillar.estimatedHours}`} label="hrs" />
        <div className="h-3 w-px bg-[#252637]" />
        <StatBadge icon={BookOpen} value={`${totalLessons}`}          label="lessons" />
        <div className="h-3 w-px bg-[#252637]" />
        <StatBadge icon={Layers}   value={`${totalSections}`}         label="sections" />
      </div>

      {/* Progress */}
      <ProgressBar percent={0} />

      {/* CTA */}
      <Link
        to={`/pillar/${pillar.slug}`}
        className="mt-4 block w-full rounded-lg border border-[#252637] bg-[#1A1B2E] py-2 text-center text-sm font-medium text-[#E8E9F3] transition-all duration-200 hover:border-[#6C63FF] hover:bg-[#6C63FF] hover:text-white"
      >
        Start Pillar →
      </Link>
      </div>
    </div>
  )
}
