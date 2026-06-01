import { Github, Linkedin, MapPin, User } from 'lucide-react'
import { personalInfo } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section-wrapper bg-white dark:bg-slate-900" aria-labelledby="about-heading">
      <div className="container-xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Photo column */}
          <div className="flex-shrink-0 flex flex-col items-center gap-6">
            {/* Profile image placeholder */}
            <div className="gradient-ring shadow-2xl shadow-indigo-500/20">
              <div className="h-52 w-52 sm:h-60 sm:w-60 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 dark:from-slate-700 dark:to-slate-900 flex items-center justify-center overflow-hidden">
                <img src="/assets/photo.jpeg" alt="Mrunal Kotkar" className="h-full w-full object-cover" />
                <User size={80} className="text-slate-500 dark:text-slate-600" aria-hidden="true" />
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3" role="list" aria-label="Social profiles">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-slate-900 hover:text-slate-900 dark:hover:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                aria-label="GitHub profile"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>

          {/* Text column */}
          <div className="flex-1">
            <p className="section-label">
              <span className="h-px w-6 bg-indigo-500 inline-block" />
              Get to know me
            </p>
            <h2 id="about-heading" className="section-heading">About Me</h2>

            {/* TODO: Edit the bio text */}
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
              {/* TODO: Add a second bio paragraph — e.g. interests, goals, or background */}
              Outside of engineering, I enjoy contributing to open-source projects, writing technical blog posts, and exploring the hiking trails around the Bay Area. I hold a B.Tech. in Computer Engineering from COEP Technological University, Pune, India.
            </p>

            {/* Location chip */}
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-10">
              <MapPin size={15} aria-hidden="true" />
              {/* TODO: Replace with your location */}
              <span>{personalInfo.location}</span>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              role="list"
              aria-label="Key statistics"
            >
              {personalInfo.stats.map(stat => (
                <div
                  key={stat.label}
                  role="listitem"
                  className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 p-4 text-center hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
