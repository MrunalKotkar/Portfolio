import { MapPin, Calendar } from 'lucide-react'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-wrapper bg-slate-50 dark:bg-slate-950"
      aria-labelledby="experience-heading"
    >
      <div className="container-xl">
        <div className="mb-12">
          <p className="section-label">
            <span className="h-px w-4 bg-indigo-500 inline-block" />
            Career
          </p>
          <h2 id="experience-heading" className="section-heading">Work Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="timeline-line absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 rounded-full"
            aria-hidden="true"
          />

          <ol className="relative space-y-10" aria-label="Work experience timeline">
            {experience.map((job, idx) => (
              <li key={idx} className="relative flex gap-6 sm:gap-8">
                {/* Timeline node */}
                <div className="relative flex-shrink-0 flex flex-col items-center" aria-hidden="true">
                  {/* Company logo / initials badge */}
                  <div
                    className={`z-10 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl text-white text-sm font-bold shadow-lg ring-4 ring-slate-50 dark:ring-slate-950 ${job.companyColor}`}
                  >
                    {/* TODO: Replace the text with an <img> once you have company logos */}
                    {job.companyInitials}
                  </div>
                </div>

                {/* Card */}
                <article
                  className={`card flex-1 p-6 sm:p-8 border-l-4 ${job.borderColor} hover:-translate-y-0.5 hover:shadow-md`}
                  aria-label={`${job.role} at ${job.company}`}
                >
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.role}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mt-0.5">
                        {job.company}
                        {job.team && (
                          <span className="text-slate-400 dark:text-slate-500 font-normal"> · {job.team}</span>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-slate-500 dark:text-slate-400 flex-shrink-0">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} aria-hidden="true" />
                        {job.startDate} – {job.endDate}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} aria-hidden="true" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5" aria-label="Responsibilities and accomplishments">
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <span className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
