import { Link } from 'react-router-dom'
import { pillars } from '../data/pillars'
import PillarCard from '../components/cards/PillarCard'

export default function HomePage() {
  const totalLessons = pillars.reduce(
    (sum, p) => sum + p.sections.reduce((s, sec) => s + sec.lessons.length, 0),
    0
  )

  return (
    <div className="min-h-screen bg-[#0D0E1A]">
      {/* ── Hero ── */}
      <section className="mx-auto max-w-3xl px-6 pb-12 pt-14 text-center sm:pb-16 sm:pt-20">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#252637] sm:w-12" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6C63FF]">
            Learning made for placement season
          </span>
          <span className="h-px w-8 bg-[#252637] sm:w-12" />
        </div>

        {/* Headline */}
        <h1
          className="mt-4 text-2xl font-bold leading-tight text-[#E8E9F3] sm:text-3xl md:text-4xl"
          style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.03em' }}
        >
          Everything you need to crack{' '}
          <span className="text-[#6C63FF]">campus placements</span>
        </h1>

        {/* Subline */}
        <p className="mx-auto mt-4 max-w-xl text-sm text-[#8B8FA8] sm:text-base">
          A structured learning system across 6 pillars. Built for tier-2/3 engineering students who want a system, not just more content.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            to="/pillars"
            className="w-full rounded-full bg-[#6C63FF] px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#8B85FF] sm:w-auto"
          >
            Start Learning →
          </Link>
          <Link
            to="/pillars"
            className="w-full rounded-full border border-[#252637] px-6 py-2.5 text-sm text-[#8B8FA8] transition-colors hover:border-[#6C63FF]/40 hover:text-[#E8E9F3] sm:w-auto"
          >
            View All Pillars
          </Link>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-b border-[#252637] pb-12 sm:pb-16">
        <div className="flex flex-wrap justify-center gap-8 px-6 md:gap-12">
          {[
            { value: String(pillars.length), label: 'Pillars' },
            { value: String(totalLessons),   label: 'Lessons' },
            { value: '100%',                 label: 'Free' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-[#E8E9F3]" style={{ fontFamily: 'Sora, sans-serif' }}>
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[#8B8FA8]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pillars grid ── */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <h2 className="text-xl font-bold text-[#E8E9F3] sm:text-2xl" style={{ fontFamily: 'Sora, sans-serif' }}>
          Learning Pillars
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
