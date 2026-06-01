import { Code2, Layers, Settings2, Cloud, Database } from 'lucide-react'
import { skills } from '../data/content'

const categoryIcons = {
  'Languages':                Code2,
  'Frameworks & Libraries':   Layers,
  'Infrastructure & DevOps':  Settings2,
  'Cloud Platforms':          Cloud,
  'Data & ML':                Database,
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-wrapper bg-slate-50 dark:bg-slate-950"
      aria-labelledby="skills-heading"
    >
      <div className="container-xl">
        <div className="mb-12">
          <p className="section-label">
            <span className="h-px w-4 bg-indigo-500 inline-block" />
            Toolkit
          </p>
          <h2 id="skills-heading" className="section-heading">Skills</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(group => {
            const Icon = categoryIcons[group.category] ?? Code2
            return (
              <div
                key={group.category}
                className="card p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                role="region"
                aria-label={group.category}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${group.dotColor} bg-opacity-15`}
                       style={{ backgroundColor: 'var(--tw-bg-opacity)' }}>
                    {/* Icon wrapper with colour */}
                    <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${group.colorClass} border`}>
                      <Icon size={17} aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className={`text-sm font-bold ${group.headerColor}`}>{group.category}</h3>
                </div>

                {/* Skill tags */}
                <ul className="flex flex-wrap gap-2" role="list">
                  {group.items.map(skill => (
                    <li key={skill}>
                      <span className={`tag border text-xs font-medium ${group.colorClass}`}>
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
