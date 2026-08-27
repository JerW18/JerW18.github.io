import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiFileText } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'About',        href: 'about' },
  { label: 'Experience',   href: 'experience' },
  { label: 'Projects',     href: 'projects' },
  { label: 'Publications', href: 'publications' },
  { label: 'Skills',       href: 'skills' },
  { label: 'Contact',      href: 'contact' },
]

const CV_HREF = `${import.meta.env.BASE_URL}CV.pdf`

/**
 * Smooth-scrolls to the section with the given id.
 */
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

/**
 * Navigation — a beveled sidebar panel on md+, a chrome top bar with a
 * slide-down drawer below it. Active section is tracked by IntersectionObserver
 * and shown as a pressed (sunken) button.
 */
const Navbar = () => {
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Track which section is currently visible
  useEffect(() => {
    const ids = ['hero', ...NAV_LINKS.map((l) => l.href)]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      // Thin detection band across the viewport's middle. Using a band rather
      // than a ratio keeps this working for sections taller than the viewport.
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const handleLink = (id) => {
    setMenuOpen(false)
    scrollTo(id)
  }

  /** Shared nav button styling — pressed when its section is in view. */
  const navButtonClass = (href) =>
    `w-full text-left px-2 py-1.5 font-sans text-[11px] bg-chrome ${
      activeSection === href
        ? 'shadow-bevel-in bg-chrome-mid font-bold text-accent'
        : 'shadow-bevel text-ink'
    }`

  const navNumber = (i) => (
    <span className="font-mono text-accent mr-1.5">{String(i + 1).padStart(2, '0')}.</span>
  )

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="hidden md:block sticky top-0 self-start shrink-0 w-56 p-3 max-h-screen overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: 'linear' }}
          className="window"
        >
          <div className="titlebar">
            <span>navigation</span>
          </div>

          <div className="bg-chrome-mid border border-chrome-dark p-2">
            {/* Logo / home */}
            <button
              onClick={() => scrollTo('hero')}
              className="w-full text-left px-2 py-2 mb-2 bg-paper shadow-bevel-in
                         font-mono font-bold text-sm text-accent"
            >
              JW<span className="text-ink">.</span>
            </button>

            <div className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }, i) => (
                <button key={href} onClick={() => handleLink(href)} className={navButtonClass(href)}>
                  {navNumber(i)}
                  {label}
                </button>
              ))}
            </div>

            <div className="divider my-3" />

            <a
              href={CV_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d w-full"
              aria-label="Open CV (PDF) in a new tab"
            >
              <FiFileText size={12} />
              CV (PDF)
            </a>
          </div>
        </motion.div>
      </aside>

      {/* ── Mobile top bar ── */}
      <header className="md:hidden fixed top-0 inset-x-0 z-50 bg-chrome border-b-2 border-chrome-dark shadow-panel">
        <nav className="h-14 px-3 flex items-center justify-between">
          <button
            onClick={() => scrollTo('hero')}
            className="px-2 py-1 bg-paper shadow-bevel-in font-mono font-bold text-sm text-accent"
          >
            JW<span className="text-ink">.</span>
          </button>

          <button
            className="p-2 bg-chrome shadow-bevel active:shadow-bevel-in text-ink"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={18} /> : <HiMenuAlt3 size={18} />}
          </button>
        </nav>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.15, ease: 'linear' }}
              className="bg-chrome-mid border-t border-chrome-dark overflow-hidden"
            >
              <div className="flex flex-col gap-1 p-3">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <button key={href} onClick={() => handleLink(href)} className={navButtonClass(href)}>
                    {navNumber(i)}
                    {label}
                  </button>
                ))}

                <div className="divider my-2" />

                <a
                  href={CV_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d w-full"
                  aria-label="Open CV (PDF) in a new tab"
                >
                  <FiFileText size={12} />
                  CV (PDF)
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Navbar
