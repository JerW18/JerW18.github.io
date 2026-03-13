import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { socials as SOCIALS } from '../data/socials'

/** Stagger children by index */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

/**
 * Hero — full-viewport landing section.
 * Subtle animated grid background + glow blobs give depth without distraction.
 */
const Hero = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

    {/* ── Background: faint dot-grid ── */}
    <div className="absolute inset-0 bg-surface-900">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #059669 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>

    {/* ── Ambient glow blobs ── */}
    <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

    {/* ── Content ── */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
      <div className="max-w-3xl">

        {/* Greeting */}
        <motion.p {...fadeUp(0.15)} className="font-mono text-primary text-base mb-5 tracking-wide">
          Hi there, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.25)}
          className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white leading-tight mb-3"
        >
          Yuanpeng (Jeremy) Wang
          <span className="text-primary">.</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          {...fadeUp(0.35)}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-400 mb-7 leading-snug"
        >
          AI Engineer&nbsp;&amp;&nbsp;Software Developer
        </motion.h2>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.45)}
          className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10"
        >
          MSc Artificial Intelligence student at{' '}
          <span className="text-primary font-medium">HKUST</span>, passionate about building
          intelligent systems — from{' '}
          <span className="text-white">LLM-powered search</span> and{' '}
          <span className="text-white">computer vision pipelines</span> to
          production-ready web applications.
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4 mb-12">
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-primary text-surface-900 font-semibold text-sm rounded-lg
                      hover:bg-cyan-400 active:scale-95 transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 border border-primary text-primary font-semibold text-sm rounded-lg
                      hover:bg-primary/10 active:scale-95 transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.65)} className="flex items-center gap-5">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-primary transition-colors duration-200"
              whileHover={{ y: -3 }}
            >
              <Icon size={21} />
            </motion.a>
          ))}
          {/* Decorative line after icons */}
          <span className="hidden sm:block w-24 h-px bg-surface-500 ml-2" />
        </motion.div>
      </div>
    </div>

    {/* ── Scroll indicator ── */}
    <motion.button
      onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-primary transition-colors"
      animate={{ y: [0, 7, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      aria-label="Scroll down"
    >
      <FiChevronDown size={26} />
    </motion.button>
  </section>
)

export default Hero
