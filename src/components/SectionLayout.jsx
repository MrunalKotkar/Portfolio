import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Home } from 'lucide-react'

const sections = [
  { path: '/experience',   label: 'Experience'   },
  { path: '/education',    label: 'Education'    },
  { path: '/projects',     label: 'Projects'     },
  { path: '/skills',       label: 'Skills'       },
  { path: '/publications', label: 'Publications' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/contact',      label: 'Contact'      },
]

export default function SectionLayout({ path }) {
  const idx  = sections.findIndex(s => s.path === path)
  const prev = idx > 0 ? sections[idx - 1] : null
  const next = idx < sections.length - 1 ? sections[idx + 1] : null

  return (
    <nav
      className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-5"
      aria-label="Navigate between sections"
    >
      <div className="container-xl flex items-center justify-between gap-4">

        {/* Previous or Home */}
        {prev ? (
          <Link
            to={prev.path}
            className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            {prev.label}
          </Link>
        ) : (
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Home size={15} aria-hidden="true" />
            Home
          </Link>
        )}

        {/* Centre link to overview */}
        <Link
          to="/"
          className="text-xs text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
        >
          Overview
        </Link>

        {/* Next or back to Home */}
        {next ? (
          <Link
            to={next.path}
            className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            {next.label}
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        ) : (
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            Back to Home
            <Home size={15} aria-hidden="true" />
          </Link>
        )}
      </div>
    </nav>
  )
}
