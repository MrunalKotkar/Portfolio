import { useState } from 'react'
import {
  Github, ExternalLink, ChevronDown, ChevronUp,
  AlertCircle, Lightbulb, TrendingUp,
} from 'lucide-react'
import { projects } from '../data/content'

const colorMap = {
  indigo:  { border: 'border-t-indigo-500',  badge: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800',   glow: 'hover:shadow-indigo-500/10',  toggle: 'text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20'  },
  violet:  { border: 'border-t-violet-500',  badge: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-800',   glow: 'hover:shadow-violet-500/10',  toggle: 'text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20'  },
  cyan:    { border: 'border-t-cyan-500',    badge: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800',               glow: 'hover:shadow-cyan-500/10',    toggle: 'text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20'          },
  emerald: { border: 'border-t-emerald-500', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800', glow: 'hover:shadow-emerald-500/10', toggle: 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20' },
  amber:   { border: 'border-t-amber-500',   badge: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800',         glow: 'hover:shadow-amber-500/10',   toggle: 'text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20'      },
  sky:     { border: 'border-t-sky-500',     badge: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800',                     glow: 'hover:shadow-sky-500/10',     toggle: 'text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20'              },
}

function DeepDiveRow({ icon: Icon, label, dotBg, children }) {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 mt-0.5">
        <div className={`h-6 w-6 rounded-md ${dotBg} flex items-center justify-center`}>
          <Icon size={13} className="text-slate-600 dark:text-slate-300" aria-hidden="true" />
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
          {label}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const c = colorMap[project.color] ?? colorMap.indigo

  return (
    <article
      className={`card flex flex-col border-t-4 ${c.border} hover:shadow-xl ${c.glow} hover:-translate-y-1 transition-all duration-200`}
      aria-label={project.name}
    >
      {/* Card body */}
      <div className="p-6 flex-1 flex flex-col gap-4">

        {/* Name + icon link buttons */}
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
              {project.name}
            </h3>
            <div className="flex items-center gap-1.5 flex-shrink-0" aria-label="Project links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  aria-label={`${project.name} GitHub repository`}
                >
                  <Github size={17} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                  aria-label={`${project.name} live demo`}
                >
                  <ExternalLink size={17} />
                </a>
              )}
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5" role="list" aria-label="Tech stack">
          {project.techStack.map(tech => (
            <span
              key={tech}
              role="listitem"
              className={`tag border text-xs ${c.badge}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Labelled link row */}
        <div className="flex items-center gap-4 pt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label={`View ${project.name} source on GitHub`}
            >
              <Github size={13} />
              Source Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
              aria-label={`Open ${project.name} live demo`}
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Deep Dive toggle */}
      <div className="border-t border-slate-100 dark:border-slate-700">
        <button
          onClick={() => setOpen(prev => !prev)}
          className={`w-full flex items-center justify-between px-6 py-3.5 text-sm font-semibold rounded-b-2xl transition-colors ${c.toggle}`}
          aria-expanded={open}
          aria-controls={`deep-dive-${project.id}`}
        >
          <span className="flex items-center gap-2">
            <Lightbulb size={15} aria-hidden="true" />
            {open ? 'Hide Case Study' : 'Show Case Study'}
          </span>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {/* Accordion */}
        <div
          id={`deep-dive-${project.id}`}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 pt-2 space-y-5 border-t border-slate-100 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/40 rounded-b-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 pt-2">
              Case Study
            </p>
            <DeepDiveRow icon={AlertCircle} label="Problem" dotBg="bg-red-100 dark:bg-red-900/30">
              {project.deepDive.problem}
            </DeepDiveRow>
            <DeepDiveRow icon={Lightbulb} label="Approach" dotBg="bg-amber-100 dark:bg-amber-900/30">
              {project.deepDive.approach}
            </DeepDiveRow>
            <DeepDiveRow icon={TrendingUp} label="Outcome" dotBg="bg-emerald-100 dark:bg-emerald-900/30">
              {project.deepDive.outcome}
            </DeepDiveRow>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-wrapper bg-white dark:bg-slate-900"
      aria-labelledby="projects-heading"
    >
      <div className="container-xl">
        <div className="mb-12">
          <p className="section-label">
            <span className="h-px w-4 bg-indigo-500 inline-block" />
            What I've built
          </p>
          <h2 id="projects-heading" className="section-heading">Featured Projects</h2>

        </div>

        {/* 2-column grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
