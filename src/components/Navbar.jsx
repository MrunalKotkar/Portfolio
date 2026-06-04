import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { personalInfo } from '../data/content'

const navLinks = [
  { label: 'Experience',   to: '/experience'   },
  { label: 'Education',    to: '/education'    },
  { label: 'Projects',     to: '/projects'     },
  { label: 'Skills',       to: '/skills'       },
  { label: 'Publications', to: '/publications' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Contact',      to: '/contact'      },
]

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme()
  const { pathname }              = useLocation()
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  // TODO: Update initials to match your name
  const initials = personalInfo.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const isActive = (to) => pathname === to

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-lg shadow-sm border-b border-slate-200/60 dark:border-slate-700/60'
          : 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav
        className="container-xl flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo / Initials → home */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          aria-label="Go to home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-xs font-bold shadow-md group-hover:shadow-indigo-400/40 transition-shadow">
            {initials}
          </span>
          {/* TODO: Replace with your name (auto-reads from content.js) */}
          <span className="hidden sm:block text-sm font-semibold text-slate-800 dark:text-slate-100">
            {personalInfo.name}
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  isActive(link.to)
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                aria-current={isActive(link.to) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Resume CTA */}
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex btn-primary text-sm py-2 px-4"
            aria-label="Download resume PDF"
          >
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(prev => !prev)}
            className="md:hidden p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen
            ? 'max-h-96 border-b border-slate-200 dark:border-slate-700'
            : 'max-h-0'
        } bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg`}
        aria-hidden={!mobileOpen}
      >
        <ul className="container-xl py-3 flex flex-col gap-1" role="list">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                aria-current={isActive(link.to) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="block mt-1 btn-primary text-center"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
