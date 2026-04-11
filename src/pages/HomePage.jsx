import { Link } from 'react-router-dom'
import { pillars } from '../data/pillars'
import PillarCard from '../components/cards/PillarCard'

export default function HomePage() {
  const totalLessons = pillars.reduce((sum, p) => sum + p.totalLessons, 0)

  return (
    <div className="min-h-screen bg-[#0D0E1A]">
      {/* ── Hero ── */}
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#252637]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6C63FF]">
            Learning made for placement season
          </span>
          <span className="h-px w-12 bg-[#252637]" />
        </div>

        {/* Headline */}
        <h1 className="mt-4 text-4xl font-bold leading-tight text-[#E8E9F3]" style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.03em' }}>
          Everything you need to crack{' '}
          <span className="text-[#6C63FF]">campus placements</span>
        </h1>

        {/* Subline */}
        <p className="mx-auto mt-4 max-w-xl text-base text-[#8B8FA8]">
          A structured learning system across 3 pillars. Built for tier-2/3 engineering students who want a system, not just more content.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/pillars"
            className="rounded-full bg-[#6C63FF] px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#8B85FF]"
          >
            Start Learning →
          </Link>
          <Link
            to="/pillars"
            className="rounded-full border border-[#252637] px-6 py-2.5 text-sm text-[#8B8FA8] transition-colors hover:border-[#6C63FF]/40 hover:text-[#E8E9F3]"
          >
            View All Pillars
          </Link>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-b border-[#252637] pb-16">
        <div className="flex justify-center gap-12">
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
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-[#E8E9F3]" style={{ fontFamily: 'Sora, sans-serif' }}>
          Learning Pillars
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
