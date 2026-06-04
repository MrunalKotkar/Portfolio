import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Briefcase, Code2, Zap, BookOpen, Mail, GraduationCap, Trophy,
  ArrowRight, Download, Github, Linkedin, MapPin,
} from 'lucide-react'
import {
  personalInfo, experience, projects, skills, publications,
} from '../data/content'

// ── Parses "Jun 2022" / "Present" into a Date ─────────────────────
const MONTH_IDX = { Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11 }
function parseJobDate(str) {
  if (!str) return null
  if (str === 'Present') return new Date()
  const m = str.match(/^(\w{3})\s+(\d{4})$/)
  return m ? new Date(parseInt(m[2]), MONTH_IDX[m[1]] ?? 0, 1) : null
}

// ── Auto-calculate stats — sums actual worked months across all roles
function buildStats() {
  let totalMs = 0
  for (const job of experience) {
    const start = parseJobDate(job.startDate)
    const end   = parseJobDate(job.endDate)
    if (start && end && end > start) totalMs += end - start
  }
  // floor to whole years (37 months → 3, not 4)
  const yearsExp   = Math.floor(totalMs / (1000 * 60 * 60 * 24 * 365.25))
  const skillCount = skills.reduce((n, cat) => n + cat.items.length, 0)
  return [
    { value: `${yearsExp}+`,           label: 'Years Experience' },
    { value: `${projects.length}`,     label: 'Projects Built'   },
    { value: `${skillCount}+`,         label: 'Technologies'     },
    { value: `${publications.length}`, label: 'Publications'     },
  ]
}

// ── Section nav cards — 5 sections (About is now on the landing) ───
// TODO: Update descriptions to match your actual sections
const sectionCards = [
  { path: '/experience',   label: 'Experience',   icon: Briefcase,     desc: "Where I've worked",
    iconBg: 'bg-blue-100 dark:bg-blue-900/40', iconColor: 'text-blue-600 dark:text-blue-400',
    arrowColor: 'text-blue-500', hoverBorder: 'hover:border-blue-300 dark:hover:border-blue-700', hoverBg: 'hover:bg-blue-50/60 dark:hover:bg-blue-950/40' },
  { path: '/education',    label: 'Education',    icon: GraduationCap, desc: 'Degrees & coursework',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/40', iconColor: 'text-indigo-600 dark:text-indigo-400',
    arrowColor: 'text-indigo-500', hoverBorder: 'hover:border-indigo-300 dark:hover:border-indigo-700', hoverBg: 'hover:bg-indigo-50/60 dark:hover:bg-indigo-950/40' },
  { path: '/projects',     label: 'Projects',     icon: Code2,         desc: 'Case studies & outcomes',
    iconBg: 'bg-violet-100 dark:bg-violet-900/40', iconColor: 'text-violet-600 dark:text-violet-400',
    arrowColor: 'text-violet-500', hoverBorder: 'hover:border-violet-300 dark:hover:border-violet-700', hoverBg: 'hover:bg-violet-50/60 dark:hover:bg-violet-950/40' },
  { path: '/skills',       label: 'Skills',       icon: Zap,           desc: 'Languages & frameworks',
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/40', iconColor: 'text-cyan-600 dark:text-cyan-400',
    arrowColor: 'text-cyan-500', hoverBorder: 'hover:border-cyan-300 dark:hover:border-cyan-700', hoverBg: 'hover:bg-cyan-50/60 dark:hover:bg-cyan-950/40' },
  { path: '/publications', label: 'Publications', icon: BookOpen,      desc: 'Research & papers',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/40', iconColor: 'text-emerald-600 dark:text-emerald-400',
    arrowColor: 'text-emerald-500', hoverBorder: 'hover:border-emerald-300 dark:hover:border-emerald-700', hoverBg: 'hover:bg-emerald-50/60 dark:hover:bg-emerald-950/40' },
  { path: '/achievements', label: 'Achievements', icon: Trophy,        desc: 'Hackathons & awards',
    iconBg: 'bg-amber-100 dark:bg-amber-900/40', iconColor: 'text-amber-600 dark:text-amber-400',
    arrowColor: 'text-amber-500', hoverBorder: 'hover:border-amber-300 dark:hover:border-amber-700', hoverBg: 'hover:bg-amber-50/60 dark:hover:bg-amber-950/40' },
  { path: '/contact',      label: 'Contact',      icon: Mail,          desc: 'Get in touch',
    iconBg: 'bg-orange-100 dark:bg-orange-900/40', iconColor: 'text-orange-600 dark:text-orange-400',
    arrowColor: 'text-orange-500', hoverBorder: 'hover:border-orange-300 dark:hover:border-orange-700', hoverBg: 'hover:bg-orange-50/60 dark:hover:bg-orange-950/40' },
]

export default function Landing() {
  const stats = useMemo(buildStats, [])

  return (
    <div className="relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/90 to-indigo-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950" aria-hidden="true" />
      <div className="absolute inset-0 hero-pattern opacity-20 dark:opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-200/30 dark:bg-indigo-600/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-violet-200/20 dark:bg-violet-600/10 blur-3xl" aria-hidden="true" />

      {/* Tighter container: reduced horizontal indent to push content left */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-4">

        {/* ── Availability badge ──────────────────────────────────── */}
        {personalInfo.available && (
          <div className="mb-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {personalInfo.availabilityText}
            </div>
          </div>
        )}

        {/* ── THREE-COLUMN HERO ────────────────────────────────────
            Mobile:  stacks top-to-bottom  (photo → bio → stats)
            Desktop: [photo | bio (flex-1) | stats (auto)]         */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-8 items-start">

          {/* COL 1 — Photo + socials */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="gradient-ring shadow-xl shadow-indigo-500/20">
              {/* TODO: Replace /assets/photo.jpeg with your actual photo filename */}
              <div className="h-40 w-40 sm:h-44 sm:w-44 lg:h-48 lg:w-48 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                <img
                  src="/assets/photo.jpeg"
                  alt={personalInfo.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Social buttons under photo */}
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-150 shadow-sm hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin size={13} aria-hidden="true" /> LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-slate-700 dark:hover:border-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-150 shadow-sm hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <Github size={13} aria-hidden="true" /> GitHub
              </a>
            </div>
          </div>

          {/* COL 2 — Name, tagline, bio, location, CTA */}
          <div className="min-w-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-2">
              {personalInfo.name}
            </h1>

            <p className="text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
              {personalInfo.tagline}
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3 max-w-lg mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs text-slate-400 dark:text-slate-500 mb-4">
              <MapPin size={12} aria-hidden="true" />
              <span>{personalInfo.location}</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"
                aria-label="Download resume PDF"
              >
                <Download size={15} aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>

          {/* COL 3 — Stats: card design, stacked vertically
              Mobile: 2×2 grid  |  Desktop: single vertical column   */}
          <div
            className="grid grid-cols-2 gap-2 lg:flex lg:flex-col lg:gap-2 lg:min-w-[148px]"
            role="list"
            aria-label="Key statistics"
          >
            {stats.map(stat => (
              <div
                key={stat.label}
                role="listitem"
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm p-3 text-center hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
              >
                <p className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent tabular-nums leading-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── EXPLORE DIVIDER ─────────────────────────────────────── */}
        <div className="flex items-center gap-4 mt-6 mb-4" aria-hidden="true">
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500 select-none">
            Explore
          </p>
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* ── SECTION NAV CARDS ────────────────────────────────────
            Mobile/tablet: 1–2 col grid with full descriptions
            Desktop (lg+): 5-col single row, descriptions hidden to stay compact */}
        <nav aria-label="Portfolio sections">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pb-4" role="list">
            {sectionCards.map(section => {
              const Icon = section.icon
              return (
                <li key={section.path}>
                  <Link
                    to={section.path}
                    className={`group flex items-center gap-3 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm ${section.hoverBg} ${section.hoverBorder} hover:-translate-y-0.5 hover:shadow-md transition-all duration-200`}
                  >
                    {/* Icon badge — slightly smaller on desktop (5-col) */}
                    <div
                      className={`flex-shrink-0 h-9 w-9 rounded-lg ${section.iconBg} flex items-center justify-center`}
                      aria-hidden="true"
                    >
                      <Icon size={17} className={section.iconColor} />
                    </div>

                    <div className="flex-1 text-left min-w-0">
                      <p className="font-semibold text-slate-900 dark:text-white text-sm leading-tight">
                        {section.label}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                        {section.desc}
                      </p>
                    </div>

                    <ArrowRight
                      size={14}
                      className={`flex-shrink-0 ${section.arrowColor} opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

      </div>
    </div>
  )
}
