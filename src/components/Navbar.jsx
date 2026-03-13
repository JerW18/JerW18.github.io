import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiFileText } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'About',      href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects',   href: 'projects' },
  { label: 'Skills',     href: 'skills' },
  { label: 'Contact',    href: 'contact' },
]

/**
 * Smooth-scrolls to the section with the given id.
 */
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

/**
 * Sticky navbar with:
 *  - Transparent at the top, frosted-glass when scrolled
 *  - Active section detection via IntersectionObserver
 *  - Mobile slide-down drawer
 */
const Navbar = () => {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]       = useState(false)
  const [activeSection,  setActiveSection]  = useState('hero')

  // Detect scroll position to toggle navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which section is currently visible
  useEffect(() => {
    const ids = ['hero', ...NAV_LINKS.map((l) => l.href)]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { threshold: 0.35 }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const handleLink = (id) => {
    setMenuOpen(false)
    scrollTo(id)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-900/90 backdrop-blur-md border-b border-surface-600/60 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* ── Logo ── */}
        <motion.button
          onClick={() => scrollTo('hero')}
          className="font-mono font-bold text-lg tracking-tight text-primary hover:opacity-80 transition-opacity"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          JW<span className="text-white">.</span>
        </motion.button>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }, i) => (
            <motion.button
              key={href}
              onClick={() => handleLink(href)}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 + 0.3 }}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === href ? 'text-primary' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="font-mono text-primary/60 text-xs mr-1">
                {String(i + 1).padStart(2, '0')}.
              </span>
              {label}
            </motion.button>
          ))}

          {/* Resume button */}
          <motion.a
            href="https://docs.google.com/document/d/1h8YaThhKmr_zfKNIvr1NVsUSmbKepiEQ_6JARtpV_-o/edit?usp=sharing"
            onClick={(e) => e.preventDefault()}
            className="ml-2 px-4 py-1.5 border border-primary text-primary text-sm font-mono rounded
                       hover:bg-primary/10 active:bg-primary/20 transition-colors duration-200
                       flex items-center gap-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            <FiFileText size={13} />
            CV
          </motion.a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-surface-800 border-b border-surface-600 overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map(({ label, href }, i) => (
                <button
                  key={href}
                  onClick={() => handleLink(href)}
                  className={`text-left py-2.5 text-sm font-medium transition-colors ${
                    activeSection === href ? 'text-primary' : 'text-gray-400'
                  }`}
                >
                  <span className="font-mono text-primary/60 text-xs mr-2">
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
