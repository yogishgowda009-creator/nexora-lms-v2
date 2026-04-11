import { useState } from 'react'
import { Clock, BookOpen, Layers, ExternalLink, ChevronDown } from 'lucide-react'

export default function StickyPillarSidebar({ pillar, activeSectionId, onSectionClick }) {
  const [resourcesOpen, setResourcesOpen] = useState(false)

  const totalLessons = pillar.sections.reduce((sum, s) => sum + s.lessons.length, 0)
  const allResources = pillar.sections
    .flatMap(s => s.lessons.flatMap(l => l.resources ?? []))
    .filter((r, i, arr) => arr.findIndex(x => x.url === r.url) === i)

  return (
    <aside className="w-[300px] flex-shrink-0">
      <div className="sticky top-[88px] overflow-hidden rounded-xl border border-[#252637] bg-[#13141F]">
        {/* Header */}
        <div className="border-b border-[#252637] px-5 py-4">
          <h3 className="text-sm font-semibold text-[#E8E9F3]" style={{ fontFamily: 'Sora, sans-serif' }}>
            Pillar Overview
          </h3>
        </div>

        {/* Stats */}
        <div className="divide-y divide-[#252637]">
          <div className="flex items-center px-5 py-3">
            <Clock size={15} className="text-[#F59E0B] mr-2.5 flex-shrink-0" />
            <span className="text-sm text-[#8B8FA8]">Estimated Time</span>
            <span className="ml-auto text-sm font-semibold text-[#6C63FF]">{pillar.estimatedHours} hrs</span>
          </div>
          <div className="flex items-center px-5 py-3">
            <BookOpen size={15} className="text-[#22D3A5] mr-2.5 flex-shrink-0" />
            <span className="text-sm text-[#8B8FA8]">Total Lessons</span>
            <span className="ml-auto text-sm font-semibold text-[#6C63FF]">{totalLessons}</span>
          </div>
          <div className="flex items-center px-5 py-3">
            <Layers size={15} className="text-[#8B8FA8] mr-2.5 flex-shrink-0" />
            <span className="text-sm text-[#8B8FA8]">Sections</span>
            <span className="ml-auto text-sm font-semibold text-[#6C63FF]">{pillar.sections.length}</span>
          </div>
        </div>

        {/* Sections nav */}
        <div>
          <p className="px-5 pb-2 pt-4 text-[10px] font-semibold uppercase tracking-wider text-[#4A4D6A]">
            Sections
          </p>
          {pillar.sections.map((section, i) => {
            const isActive = activeSectionId === section.id
            return (
              <button
                key={section.id}
                onClick={() => onSectionClick(section.id)}
                className="flex w-full cursor-pointer items-center gap-3 px-5 py-2.5 text-left transition-colors duration-150 hover:bg-[#1A1B2E]"
              >
                <span
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#6C63FF] text-white'
                      : 'bg-[#252637] text-[#8B8FA8]'
                  }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`text-sm transition-colors ${
                    isActive ? 'font-medium text-[#E8E9F3]' : 'text-[#8B8FA8] hover:text-[#E8E9F3]'
                  }`}
                >
                  {section.title}
                </span>
              </button>
            )
          })}
        </div>

        {/* All Resources collapsible */}
        <div className="border-t border-[#252637]">
          <button
            onClick={() => setResourcesOpen(!resourcesOpen)}
            className="flex w-full items-center justify-between px-5 py-3 hover:bg-[#1A1B2E] transition-colors"
          >
            <span className="text-sm font-medium text-[#E8E9F3]">
              All Resources ({allResources.length})
            </span>
            <ChevronDown
              size={16}
              className="text-[#8B8FA8] transition-transform duration-200"
              style={{ transform: resourcesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>
          {resourcesOpen && (
            <div className="pb-2">
              {allResources.map((res) => (
                <a
                  key={res.url}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 text-xs text-[#8B8FA8] transition-colors hover:text-[#6C63FF]"
                >
                  <ExternalLink size={13} className="flex-shrink-0 text-[#6C63FF]" />
                  <span className="truncate">{res.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
