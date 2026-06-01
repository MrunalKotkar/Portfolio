import { Calendar, MapPin, Award } from 'lucide-react'
import { education } from '../data/content'

function EducationCard({ edu }) {
  return (
    <article
      className={`card flex flex-col border-t-4 ${edu.borderColor} hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
      aria-label={`${edu.degree} at ${edu.institution}`}
    >
      <div className="p-6 sm:p-7 flex flex-col gap-5">

        {/* Header: initials badge + institution + degree */}
        <div className="flex items-start gap-4">
          <div
            className={`flex-shrink-0 h-12 w-12 rounded-xl ${edu.institutionColor} text-white text-xs font-bold flex items-center justify-center shadow-sm`}
            aria-hidden="true"
          >
            {edu.institutionInitials}
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-base text-slate-900 dark:text-white leading-snug">
              {edu.institution}
            </h3>
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5 leading-snug">
              {edu.degree}
            </p>
          </div>
        </div>

        {/* Meta row: dates, location, GPA */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Calendar size={12} aria-hidden="true" />
            {edu.startDate} – {edu.endDate}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <MapPin size={12} aria-hidden="true" />
            {edu.location}
          </span>
          {edu.gpa && (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded-md">
              <Award size={11} aria-hidden="true" />
              GPA {edu.gpa}
            </span>
          )}
        </div>

        {/* Highlights */}
        {edu.highlights && edu.highlights.length > 0 && (
          <ul className="space-y-2" aria-label="Highlights">
            {edu.highlights.map((point, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                <span className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export default function Education() {
  return (
    <section
      id="education"
      className="section-wrapper bg-slate-50 dark:bg-slate-950"
      aria-labelledby="education-heading"
    >
      <div className="container-xl">
        <div className="mb-10">
          <p className="section-label">
            <span className="h-px w-4 bg-indigo-500 inline-block" />
            Academic background
          </p>
          <h2 id="education-heading" className="section-heading">Education</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((edu, idx) => (
            <EducationCard key={idx} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  )
}
