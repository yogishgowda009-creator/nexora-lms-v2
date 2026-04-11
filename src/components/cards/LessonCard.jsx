import TypeBadge from '../ui/TypeBadge'
import DurationBadge from '../ui/DurationBadge'
import KeyTakeaway from './KeyTakeaway'
import ResourceChip from './ResourceChip'

export default function LessonCard({ lesson, lessonNumber }) {
  return (
    <div className="rounded-xl border border-[#252637] bg-[#13141F] p-5 transition-colors duration-200 hover:border-[#252637]/80 hover:shadow-lg hover:shadow-black/20">
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#252637] bg-[#1A1B2E] text-xs font-semibold text-[#8B8FA8]">
            {lessonNumber}
          </span>
          <TypeBadge type={lesson.type} />
        </div>
        <DurationBadge duration={lesson.duration} />
      </div>

      {/* Title */}
      <h4 className="mt-3 font-semibold text-[#E8E9F3]" style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.95rem' }}>
        {lesson.title}
      </h4>

      {/* Description */}
      <p className="mt-2 text-sm leading-relaxed text-[#8B8FA8]">
        {lesson.summary}
      </p>

      {/* Key Takeaway */}
      <KeyTakeaway text={lesson.keyTakeaway} />

      {/* Resources */}
      {lesson.resources?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {lesson.resources.map((res) => (
            <ResourceChip key={res.url} label={res.label} url={res.url} />
          ))}
        </div>
      )}
    </div>
  )
}
