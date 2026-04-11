import { Link, useLocation } from 'react-router-dom'
import { BookMarked, ExternalLink } from 'lucide-react'

const navLinks = [
  { label: 'Home',       to: '/' },
  { label: 'All Pillars', to: '/pillars' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-[#252637] bg-[#13141F]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6C63FF]">
            <BookMarked size={16} className="text-white" />
          </div>
          <span className="font-bold text-[#E8E9F3]" style={{ fontFamily: 'Sora, sans-serif', fontSize: '1rem' }}>
            Nexora LMS
          </span>
          <span className="rounded-full bg-[#6C63FF]/20 px-2 py-0.5 text-[10px] font-semibold text-[#6C63FF]">
            FREE
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm transition-colors duration-150"
              style={{ color: pathname === link.to ? '#E8E9F3' : '#8B8FA8' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href="https://nexora.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 text-sm text-[#8B8FA8] transition-colors hover:text-[#E8E9F3] md:flex"
          >
            nexora.in
            <ExternalLink size={12} />
          </a>
          <Link
            to="/pillars"
            className="rounded-full bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] px-5 py-2 text-sm font-medium text-white transition-transform duration-150 hover:scale-105"
          >
            Start Learning →
          </Link>
        </div>
      </div>
    </header>
  )
}
