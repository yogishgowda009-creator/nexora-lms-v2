import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BookMarked, ExternalLink, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home',        to: '/' },
  { label: 'All Pillars', to: '/pillars' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-[#252637] bg-[#13141F]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6C63FF]">
            <BookMarked size={16} className="text-white" />
          </div>
          <span className="font-bold text-[#E8E9F3]" style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.95rem' }}>
            Nexora LMS
          </span>
          <span className="rounded-full bg-[#6C63FF]/20 px-2 py-0.5 text-[10px] font-semibold text-[#6C63FF]">
            FREE
          </span>
        </Link>

        {/* Desktop nav */}
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

        {/* Right — desktop */}
        <div className="flex items-center gap-3">
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
            className="hidden rounded-full bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] px-4 py-1.5 text-sm font-medium text-white transition-transform duration-150 hover:scale-105 sm:inline-flex"
          >
            Start Learning →
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#252637] bg-[#1A1B2E] text-[#8B8FA8] transition-colors hover:text-[#E8E9F3] md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="border-t border-[#252637] bg-[#13141F] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                style={{
                  color: pathname === link.to ? '#E8E9F3' : '#8B8FA8',
                  background: pathname === link.to ? '#1A1B2E' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/pillars"
              className="mt-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] py-2.5 text-center text-sm font-medium text-white"
            >
              Start Learning →
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
