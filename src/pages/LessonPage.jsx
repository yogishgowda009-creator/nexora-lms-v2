import { Link, useParams } from 'react-router-dom'
import { ExternalLink, ChevronRight } from 'lucide-react'
import { pillars } from '../data/pillars'
import TypeBadge from '../components/ui/TypeBadge'
import DurationBadge from '../components/ui/DurationBadge'
import KeyTakeaway from '../components/cards/KeyTakeaway'

export default function LessonPage() {
  const { slug, lessonId } = useParams()
  const pillar = pillars.find((p) => p.slug === slug)

  if (!pillar) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0D0E1A]">
        <Link to="/" className="text-[#6C63FF] hover:underline">← Back to Home</Link>
      </div>
    )
  }

  // Flatten all lessons with prev/next awareness
  const allLessons = pillar.sections.flatMap((sec) =>
    sec.lessons.map((lesson) => ({ ...lesson, sectionTitle: sec.title }))
  )
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId)
  const lesson = allLessons[currentIndex]
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null

  if (!lesson) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0D0E1A]">
        <div className="text-center">
          <p className="text-[#E8E9F3]">Lesson not found.</p>
          <Link to={`/pillar/${slug}`} className="mt-3 inline-block text-sm text-[#6C63FF] hover:underline">
            ← Back to {pillar.title}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0D0E1A]">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-10">
        {/* Back link */}
        <Link
          to={`/pillar/${pillar.slug}`}
          className="text-sm text-[#8B8FA8] hover:text-[#E8E9F3] transition-colors"
        >
          ← {pillar.title}
        </Link>

        {/* Breadcrumb */}
        <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-[#4A4D6A]">
          <span>{pillar.title}</span>
          <ChevronRight size={12} />
          <span>{lesson.sectionTitle}</span>
          <ChevronRight size={12} />
          <span className="text-[#8B8FA8]">{lesson.title}</span>
        </div>

        {/* Lesson header */}
        <div className="mt-6">
          <div className="flex items-center gap-3">
            <TypeBadge type={lesson.type} />
            <DurationBadge duration={lesson.duration} />
          </div>
          <h1
            className="mt-4 text-xl font-bold text-[#E8E9F3] sm:text-3xl"
            style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.025em' }}
          >
            {lesson.title}
          </h1>
        </div>

        <div className="my-6 border-b border-[#252637]" />

        {/* Description */}
        <p className="text-base leading-relaxed text-[#8B8FA8]">
          {lesson.summary}
        </p>

        {/* Key Takeaway */}
        <div className="mt-8">
          <KeyTakeaway text={lesson.keyTakeaway} large />
        </div>

        {/* Resources */}
        {lesson.resources?.length > 0 && (
          <div className="mt-10">
            <h2
              className="text-lg font-semibold text-[#E8E9F3]"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Resources
            </h2>
            <div className="mt-3">
              {lesson.resources.map((res) => (
                <a
                  key={res.url}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border-b border-[#252637] py-3 transition-colors hover:text-[#E8E9F3]"
                >
                  <ExternalLink size={15} className="flex-shrink-0 text-[#6C63FF]" />
                  <span className="text-sm text-[#E8E9F3]">{res.label}</span>
                  <span className="ml-auto text-[#4A4D6A]">↗</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Prev / Next navigation */}
        <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:justify-between sm:gap-4">
          {prevLesson ? (
            <Link
              to={`/pillar/${slug}/lesson/${prevLesson.id}`}
              className="flex w-full items-center gap-2 rounded-xl border border-[#252637] bg-[#13141F] px-4 py-3 text-sm text-[#8B8FA8] transition-colors hover:border-[#6C63FF]/40 hover:text-[#E8E9F3] sm:flex-1 sm:px-5"
            >
              ← <span className="truncate">{prevLesson.title}</span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextLesson ? (
            <Link
              to={`/pillar/${slug}/lesson/${nextLesson.id}`}
              className="flex w-full items-center justify-end gap-2 rounded-xl border border-[#252637] bg-[#13141F] px-4 py-3 text-sm text-[#8B8FA8] transition-colors hover:border-[#6C63FF]/40 hover:text-[#E8E9F3] sm:flex-1 sm:px-5"
            >
              <span className="truncate">{nextLesson.title}</span> →
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </div>
  )
}
