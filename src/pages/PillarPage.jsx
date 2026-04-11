import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { pillars } from '../data/pillars'
import LessonCard from '../components/cards/LessonCard'
import StickyPillarSidebar from '../components/layout/StickyPillarSidebar'

export default function PillarPage() {
  const { slug } = useParams()
  const pillar = pillars.find((p) => p.slug === slug)
  const [activeSectionId, setActiveSectionId] = useState(pillar?.sections?.[0]?.id ?? '')

  useEffect(() => {
    if (!pillar) return
    const observers = []
    pillar.sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSectionId(section.id) },
        { rootMargin: '-20% 0px -70% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [pillar])

  const onSectionClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (!pillar) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0D0E1A]">
        <div className="text-center">
          <p className="text-lg text-[#E8E9F3]">Pillar not found.</p>
          <Link to="/" className="mt-4 inline-block text-sm text-[#6C63FF] hover:underline">← Back to Home</Link>
        </div>
      </div>
    )
  }

  let globalLessonNum = 0

  return (
    <div className="min-h-screen bg-[#0D0E1A]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        {/* Back link */}
        <Link to="/" className="text-sm text-[#8B8FA8] transition-colors hover:text-[#E8E9F3]">
          ← All Pillars
        </Link>

        {/* Two-column layout — stacks on mobile */}
        <div className="mt-6 flex flex-col items-start gap-6 lg:flex-row lg:gap-10">
          {/* ── Left column ── */}
          <div className="min-w-0 flex-1 lg:pr-2">
            {/* Pillar header */}
            <h1
              className="text-xl font-bold text-[#E8E9F3] sm:text-2xl lg:text-3xl"
              style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.025em' }}
            >
              {pillar.title}
            </h1>
            <p className="mt-1 text-sm text-[#8B8FA8] sm:text-base lg:text-lg">{pillar.tagline}</p>

            {/* For whom */}
            <div className="mt-3">
              <span className="inline-flex flex-wrap items-center gap-1.5 rounded-lg border border-[#252637] bg-[#1A1B2E] px-3 py-1.5 text-xs text-[#8B8FA8] sm:rounded-full sm:text-sm">
                <span className="text-[#4A4D6A]">For:</span>
                {pillar.targetAudience}
              </span>
            </div>

            {/* What You Will Crack */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {pillar.whatYouWillCrack.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-[#22D3A5]" />
                  <span className="text-sm text-[#8B8FA8]">{item}</span>
                </div>
              ))}
            </div>

            <div className="my-6 border-b border-[#252637] sm:my-8" />

            {/* Mobile section jump — native select dropdown */}
            <div className="mb-6 lg:hidden">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#4A4D6A]">
                Jump to section
              </label>
              <select
                value={activeSectionId}
                onChange={(e) => onSectionClick(e.target.value)}
                className="w-full rounded-lg border border-[#252637] bg-[#1A1B2E] px-3 py-2.5 text-sm text-[#E8E9F3] focus:border-[#6C63FF] focus:outline-none"
              >
                {pillar.sections.map((sec, i) => (
                  <option key={sec.id} value={sec.id}>
                    {i + 1}. {sec.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Sections + lessons */}
            {pillar.sections.map((section, sIdx) => (
              <div key={section.id} id={section.id} className={sIdx > 0 ? 'mt-10 sm:mt-12' : ''}>
                {/* Section header */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#6C63FF]/15 text-xs font-bold text-[#6C63FF]">
                    {sIdx + 1}
                  </span>
                  <h2
                    className="text-base font-semibold text-[#E8E9F3] sm:text-lg"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    {section.title}
                  </h2>
                  <span className="rounded-full bg-[#1A1B2E] px-2.5 py-1 text-xs text-[#8B8FA8]">
                    {section.lessons.length} lessons
                  </span>
                </div>

                {/* Lesson cards */}
                <div className="flex flex-col gap-4">
                  {section.lessons.map((lesson) => {
                    globalLessonNum++
                    const num = globalLessonNum
                    return (
                      <div key={lesson.id} className={`fade-up stagger-${Math.min((num - 1) % 4, 5)}`}>
                        <Link to={`/pillar/${pillar.slug}/lesson/${lesson.id}`} className="block">
                          <LessonCard lesson={lesson} lessonNumber={num} />
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* ── Sidebar — hidden on mobile, shown on lg+ ── */}
          <div className="hidden lg:block">
            <StickyPillarSidebar
              pillar={pillar}
              activeSectionId={activeSectionId}
              onSectionClick={onSectionClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
