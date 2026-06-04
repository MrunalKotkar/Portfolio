import { useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import ResumeDownload from './components/ResumeDownload'
import SectionLayout from './components/SectionLayout'
import Footer from './components/Footer'

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Shared shell: navbar + content + footer.
// pt-16 on main offsets the fixed 64px navbar so section backgrounds fill correctly.
function PageShell({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollReset />
        <Routes>
          <Route path="/" element={
            <PageShell><Landing /></PageShell>
          } />
          {/* /about is now part of the landing page — redirect there */}
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/experience" element={
            <PageShell>
              <Experience />
              <SectionLayout path="/experience" />
            </PageShell>
          } />
          <Route path="/education" element={
            <PageShell>
              <Education />
              <SectionLayout path="/education" />
            </PageShell>
          } />
          <Route path="/projects" element={
            <PageShell>
              <Projects />
              <SectionLayout path="/projects" />
            </PageShell>
          } />
          <Route path="/skills" element={
            <PageShell>
              <Skills />
              <SectionLayout path="/skills" />
            </PageShell>
          } />
          <Route path="/publications" element={
            <PageShell>
              <Publications />
              <SectionLayout path="/publications" />
            </PageShell>
          } />
          <Route path="/achievements" element={
            <PageShell>
              <Achievements />
              <SectionLayout path="/achievements" />
            </PageShell>
          } />
          <Route path="/contact" element={
            <PageShell>
              <Contact />
              <ResumeDownload />
              <SectionLayout path="/contact" />
            </PageShell>
          } />
          {/* Catch-all → home */}
          <Route path="*" element={
            <PageShell><Landing /></PageShell>
          } />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}
