import { Download, FileText } from 'lucide-react'

export default function ResumeDownload() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 py-20 sm:py-24"
      aria-labelledby="resume-heading"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 hero-pattern opacity-20" aria-hidden="true" />

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" aria-hidden="true" />

      <div className="relative container-xl">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20" aria-hidden="true">
            <FileText size={28} className="text-white" />
          </div>

          <div>
            <h2 id="resume-heading" className="text-3xl sm:text-4xl font-bold text-white mb-3">
              {/* TODO: Personalize this heading */}
              View My Full Resume
            </h2>
            <p className="text-indigo-200 text-lg max-w-xl leading-relaxed">
              {/* TODO: Replace with a compelling 1-line description */}
              Download my resume for a complete overview of my experience, skills, and education — formatted for recruiter and engineering-team review.
            </p>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-4 text-base font-bold text-indigo-700 shadow-xl shadow-indigo-900/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-900/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white active:translate-y-0"
            aria-label="View resume as PDF"
          >
            <FileText size={20} aria-hidden="true" />
            View Resume (PDF)
          </a>

          {/* TODO: Replace with your actual last-updated date */}
          <p className="text-indigo-300 text-xs">
            Last updated: May 2026
          </p>
        </div>
      </div>
    </section>
  )
}
