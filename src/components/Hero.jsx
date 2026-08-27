import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Window from './Window'
import { socials as SOCIALS } from '../data/socials'

const TITLE = 'AI Engineer & Software Developer '

/**
 * Types `text` out one character at a time. Renders the full string
 * immediately when the visitor prefers reduced motion.
 */
function useTypewriter(text, speed = 55) {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const [typed, setTyped] = useState(prefersReduced ? text : '')

  useEffect(() => {
    if (prefersReduced) return undefined

    let i = 0
    const id = setInterval(() => {
      i += 1
      setTyped(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)

    return () => clearInterval(id)
  }, [text, speed, prefersReduced])

  return typed
}

/**
 * Hero — the landing panel. Name, typed job title, short bio, and the two
 * primary calls to action, over a sunken status strip.
 */
const Hero = () => {
  const typedTitle = useTypewriter(TITLE)

  const statusBar = (
    <div className="flex items-center justify-between gap-3">
      <span className="flex items-center gap-3">
        
      </span>

      <span className="flex items-center gap-3">
        {SOCIALS.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            className="text-accent no-underline"
            whileHover={{ y: -2 }}
          >
            <Icon size={15} />
          </motion.a>
        ))}
      </span>
    </div>
  )

  return (
    <section id="hero" className="scroll-mt-16">
      <div className="section-container pt-6 md:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'linear' }}
        >
          <Window title="welcome.html" statusBar={statusBar} bodyClassName="p-6 sm:p-10">
            <p className="font-mono text-[12px] text-accent mb-2">Hi there, I'm</p>

            <h1 className="font-sans font-bold text-2xl sm:text-4xl text-ink leading-tight mb-2">
              Yuanpeng (Jeremy) Wang
            </h1>

            {/* Typed job title with a blinking block cursor */}
            <p className="font-mono text-sm sm:text-lg text-title-from mb-5 min-h-[1.5em]">
              {/* Hidden from assistive tech so the half-typed string isn't announced */}
              <span aria-hidden="true">
                {typedTitle}
                <span className="animate-blink">▌</span>
              </span>
              <span className="sr-only">{TITLE}</span>
            </p>

            <div className="divider mb-5" />

            <p className="text-ink-muted text-[13px] leading-relaxed max-w-2xl mb-6">
              I build intelligent systems end to end, from vision-language model evaluation and
              fine-tuning to LLM-powered search and computer vision pipelines, and I ship
              production web applications for real clients, so research ideas land as software
              people actually use.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-3d btn-3d-primary px-6 py-2"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-3d px-6 py-2"
              >
                Get In Touch
              </button>
            </div>
          </Window>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
