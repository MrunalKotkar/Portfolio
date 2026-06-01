import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { personalInfo } from '../data/content'

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact',      href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12" role="contentinfo">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold text-white">
              {/* TODO: Replace with your name */}
              {personalInfo.name}
            </span>
            <span className="text-sm text-slate-500">{personalInfo.tagline}</span>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3" aria-label="Social links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Send email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            {/* TODO: Replace with your name */}
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <a
            href="#hero"
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  )
}
