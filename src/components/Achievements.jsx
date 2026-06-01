import { Trophy, GraduationCap, ExternalLink, Calendar, Building2 } from 'lucide-react'
import { achievements } from '../data/content'

// Color tokens per achievement type
const colorMap = {
  amber:   { topBorder: 'border-t-amber-400',   badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',   imgFallback: 'from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/20',   iconText: 'text-amber-300 dark:text-amber-700'  },
  indigo:  { topBorder: 'border-t-indigo-500',  badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300', imgFallback: 'from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/20', iconText: 'text-indigo-300 dark:text-indigo-700' },
  emerald: { topBorder: 'border-t-emerald-500', badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300', imgFallback: 'from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/20', iconText: 'text-emerald-300 dark:text-emerald-700' },
}

const typeIcons = {
  Hackathon:   Trophy,
  Scholarship: GraduationCap,
}

function AchievementCard({ achievement }) {
  const c    = colorMap[achievement.color] ?? colorMap.amber
  const Icon = typeIcons[achievement.type] ?? Trophy

  return (
    <article
      className={`card flex flex-col border-t-4 ${c.topBorder} hover:shadow-xl hover:-translate-y-1 transition-all duration-200 overflow-hidden`}
      aria-label={achievement.title}
    >
      {/* ── Event photo ──────────────────────────────────────────── */}
      <div className={`relative aspect-video bg-gradient-to-br ${c.imgFallback} overflow-hidden`}>
        {achievement.image ? (
          <img
            src={achievement.image}
            alt={`${achievement.title} event`}
            className="h-full w-full object-cover"
          />
        ) : (
          // Placeholder shown when no image is set yet
          // TODO: Add your event photo to public/assets/ and update the image path in content.js
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 select-none">
            <Icon size={44} className={`${c.iconText}`} aria-hidden="true" />
            <p className="text-xs font-medium text-slate-400 dark:text-slate-600">
              Add photo → public/assets/
            </p>
          </div>
        )}
      </div>

      {/* ── Card content ─────────────────────────────────────────── */}
      <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">

        {/* Award badge + type tag */}
        <div className="flex flex-wrap items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${c.badge}`}>
            <Icon size={11} aria-hidden="true" />
            {achievement.award}
          </span>
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
            {achievement.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
          {achievement.title}
        </h3>

        {/* Organisation + date */}
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Building2 size={12} aria-hidden="true" />
            {achievement.organization}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Calendar size={12} aria-hidden="true" />
            {achievement.date}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
          {achievement.description}
        </p>

        {/* Optional link */}
        {achievement.link && (
          <a
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors self-start"
            aria-label={`View details for ${achievement.title}`}
          >
            <ExternalLink size={14} aria-hidden="true" />
            View Demo / Details
          </a>
        )}
      </div>
    </article>
  )
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-wrapper bg-white dark:bg-slate-900"
      aria-labelledby="achievements-heading"
    >
      <div className="container-xl">
        <div className="mb-10">
          <p className="section-label">
            <span className="h-px w-4 bg-indigo-500 inline-block" />
            Recognition
          </p>
          <h2 id="achievements-heading" className="section-heading">Achievements</h2>
        </div>

        {/* 3-column grid — portrait cards with event photos on top */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, idx) => (
            <AchievementCard key={idx} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  )
}
