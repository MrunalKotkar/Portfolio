import { useState } from 'react'
import { Mail, Linkedin, Send, CheckCircle, MapPin } from 'lucide-react'
import { personalInfo } from '../data/content'

export default function Contact() {
  const [form,        setForm]        = useState({ name: '', email: '', message: '' })
  const [status,      setStatus]      = useState('idle') // idle | sending | sent | error
  const [fieldErrors, setFieldErrors] = useState({})

  function validate() {
    const errors = {}
    if (!form.name.trim())                errors.name    = 'Name is required.'
    if (!form.email.trim())               errors.email   = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = 'Enter a valid email address.'
    if (!form.message.trim())             errors.message = 'Message is required.'
    return errors
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errors = validate()
    if (Object.keys(errors).length) { setFieldErrors(errors); return }
    setFieldErrors({})
    setStatus('sending')

    const endpoint = import.meta.env.VITE_FORMSPREE_URL

    if (endpoint) {
      // Production: send to Formspree
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        if (res.ok) {
          setStatus('sent')
          setForm({ name: '', email: '', message: '' })
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
    } else {
      // Dev fallback when VITE_FORMSPREE_URL is not set
      await new Promise(r => setTimeout(r, 800))
      console.info('[Contact] Dev mode — set VITE_FORMSPREE_URL in .env.local to enable real delivery.')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }
  }

  function inputCls(field) {
    return [
      'w-full rounded-xl border px-4 py-3 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100',
      'placeholder:text-slate-400 dark:placeholder:text-slate-500',
      'transition-colors duration-150 outline-none',
      'focus:ring-2 focus:ring-indigo-500 focus:border-transparent',
      fieldErrors[field]
        ? 'border-red-400 dark:border-red-600'
        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600',
    ].join(' ')
  }

  return (
    <section
      id="contact"
      className="section-wrapper bg-slate-50 dark:bg-slate-950"
      aria-labelledby="contact-heading"
    >
      <div className="container-xl">
        <div className="mb-12">
          <p className="section-label">
            <span className="h-px w-4 bg-indigo-500 inline-block" />
            Let's connect
          </p>
          <h2 id="contact-heading" className="section-heading">Get In Touch</h2>
          <p className="section-sub">
            I'm actively looking for new opportunities. My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Contact info panel */}
          <aside className="lg:col-span-2 flex flex-col gap-6">
            <div className="card p-6 sm:p-8 flex flex-col gap-6 bg-gradient-to-br from-indigo-600 to-violet-700 text-white border-0 shadow-xl shadow-indigo-500/20">
              <div>
                <h3 className="text-lg font-bold mb-2">Contact Information</h3>
                <p className="text-indigo-200 text-sm leading-relaxed">
                  {/* TODO: Replace with your preferred contact message */}
                  I respond to emails within 24 hours. Feel free to reach out about full-time roles, contract work, or just to say hello.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-sm text-indigo-100 hover:text-white transition-colors group"
                  aria-label={`Email ${personalInfo.email}`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                    <Mail size={16} aria-hidden="true" />
                  </span>
                  {/* TODO: Replace with your email */}
                  {personalInfo.email}
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-indigo-100 hover:text-white transition-colors group"
                  aria-label="LinkedIn profile"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                    <Linkedin size={16} aria-hidden="true" />
                  </span>
                  linkedin.com/in/mrunalkotkar {/* TODO: Replace with your LinkedIn handle */}
                </a>

                <div className="flex items-center gap-3 text-sm text-indigo-200">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <MapPin size={16} aria-hidden="true" />
                  </span>
                  {/* TODO: Replace with your location */}
                  {personalInfo.location}
                </div>
              </div>

              {/* Decorative blobs inside card */}
              <div className="mt-auto pt-6 border-t border-white/20">
                {personalInfo.available && (
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    {personalInfo.availabilityText}
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <div className="card p-10 flex flex-col items-center justify-center text-center gap-4 min-h-[360px]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                  <CheckCircle size={32} className="text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message sent!</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-xs">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-outline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card p-6 sm:p-8 space-y-5"
                noValidate
                aria-label="Contact form"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                      className={inputCls('name')}
                      aria-required="true"
                      aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-600 dark:text-red-400" role="alert">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                      className={inputCls('email')}
                      aria-required="true"
                      aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-600 dark:text-red-400" role="alert">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Message <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={6}
                    placeholder="Hi Mrunal, I came across your profile and would love to discuss..."
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    className={`${inputCls('message')} resize-none`}
                    aria-required="true"
                    aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                  />
                  {fieldErrors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-600 dark:text-red-400" role="alert">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  aria-label="Send message"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
