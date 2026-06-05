import { ArrowDown, Download, ArrowRight, Sparkles } from 'lucide-react'
import { personalInfo } from '../data/content'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900"
      aria-label="Hero"
    >
      {/* Dot-grid pattern overlay */}
      <div className="absolute inset-0 hero-pattern opacity-60" aria-hidden="true" />

      {/* Ambient gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-indigo-600/20 blur-3xl animate-pulse-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-3xl animate-pulse-slow"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-cyan-600/5 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 container-xl flex flex-col items-center text-center gap-6 py-24">

        {/* Availability badge */}
        {personalInfo.available && (
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-sm animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {/* TODO: Update availability status text */}
            {personalInfo.availabilityText}
          </div>
        )}

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none animate-fade-in-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          {/* TODO: Replace with your name */}
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl lg:text-2xl font-medium text-indigo-300 animate-fade-in-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          {/* TODO: Replace with your tagline */}
          {personalInfo.tagline}
        </p>

        {/* Short bio */}
        <p
          className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          {/* TODO: Replace with a 1-2 sentence pitch */}
          Building scalable distributed systems and data infrastructure that powers products at scale.
          Based in the {personalInfo.location}.
        </p>

        {/* Tech stack chips */}
        <div
          className="flex flex-wrap justify-center gap-2 animate-fade-in-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
          aria-label="Key technologies"
        >
          {['Python', 'Go', 'Kubernetes', 'Apache Spark', 'React', 'AWS'].map(tech => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 mt-2 animate-fade-in-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <a
            href="#projects"
            className="btn-primary text-base px-8 py-3.5"
            aria-label="View my projects"
          >
            View My Work
            <ArrowRight size={18} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-600 px-8 py-3.5 text-base font-semibold text-slate-200 transition-all duration-200 hover:border-indigo-400 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"
            aria-label="View resume PDF"
          >
            <Download size={18} />
            View Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors group"
        aria-label="Scroll to About section"
      >
        <span className="text-xs font-medium tracking-widest uppercase opacity-70">Scroll</span>
        <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
      </a>
    </section>
  )
}
