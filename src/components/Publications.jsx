import { ExternalLink, BookOpen, FileText } from 'lucide-react'
import { publications } from '../data/content'

export default function Publications() {
  return (
    <section
      id="publications"
      className="section-wrapper bg-white dark:bg-slate-900"
      aria-labelledby="publications-heading"
    >
      <div className="container-xl">
        <div className="mb-12">
          <p className="section-label">
            <span className="h-px w-4 bg-indigo-500 inline-block" />
            Research
          </p>
          <h2 id="publications-heading" className="section-heading">Publications</h2>
        </div>

        <ol className="space-y-5" aria-label="List of publications">
          {publications.map((pub, idx) => (
            <li key={idx}>
              <article className="card p-6 sm:p-7 flex gap-5 items-start hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                {/* Icon */}
                <div className="flex-shrink-0 mt-0.5 h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center" aria-hidden="true">
                  <BookOpen size={18} className="text-indigo-600 dark:text-indigo-400" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-snug mb-2">
                        {pub.link ? (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            aria-label={`Read ${pub.title}`}
                          >
                            {pub.title}
                          </a>
                        ) : (
                          pub.title
                        )}
                      </h3>

                      {/* Venue + year */}
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {pub.venue}
                      </p>
                    </div>

                    {/* Right meta */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      {/* Year badge */}
                      <span className="tag border text-xs font-semibold bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                        {pub.year}
                      </span>

                      {/* Type badge */}
                      <span className="tag border text-xs font-medium bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800">
                        <FileText size={10} className="mr-1" aria-hidden="true" />
                        {pub.type}
                      </span>

                      {/* External link */}
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                          aria-label={`Open ${pub.title} (external)`}
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
