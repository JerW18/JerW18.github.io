import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBook, FiMapPin, FiCalendar, FiFileText } from 'react-icons/fi'
import { education } from '../data/experience'
import { skills } from '../data/skills'
import Window from './Window'
import SectionHeader from './SectionHeader'

const INTERESTS = [
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'LLM & Semantic Search',
  'Full-Stack Development',
  'Distributed Systems',
]

/**
 * About — professional summary, interests list, education records,
 * and spoken languages.
 */
const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="scroll-mt-16">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25, ease: 'linear' }}
        >
          <Window title="about_me.txt" icon={FiFileText}>
            <SectionHeader label="// 01. about me" title="About" />

            <div className="grid lg:grid-cols-5 gap-6">

              {/* ── Left column: summary + interests ── */}
              <div className="lg:col-span-3 space-y-3 text-[13px] leading-relaxed text-ink-muted">
                <p>
                  Hi — I'm <strong className="text-ink">Yuanpeng (Jeremy) Wang</strong>, an AI
                  Engineer and Software Developer finishing my{' '}
                  <strong className="text-ink">MSc in Artificial Intelligence</strong> at the Hong
                  Kong University of Science and Technology, where I{' '}
                  <strong className="text-ink">graduate in October 2026</strong>.
                </p>
                <p>
                  I graduated <strong className="text-ink">Cum Laude</strong> with a BS in Computer
                  Science (Major in Software Technology) from De La Salle University – Manila in
                  2025, where I built a strong foundation in algorithms, system design, and
                  software engineering.
                </p>
                <p>
                  Most recently I worked as an AI Research and Development Intern at{' '}
                  <strong className="text-ink">VX Real Limited</strong> in Hong Kong, benchmarking
                  vision-language models on document understanding and designing a
                  reasoning-centric fine-tuning pipeline. My work lives at the intersection of AI
                  research and practical engineering — turning complex problems into elegant,
                  production-ready solutions.
                </p>

                {/* Interests */}
                <div className="pt-2">
                  <p className="font-bold text-[12px] text-ink mb-2">Key Interests</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                    {INTERESTS.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-[12px]">
                        <span className="text-accent font-mono shrink-0">»</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Right column: education + languages ── */}
              <div className="lg:col-span-2 flex flex-col gap-3">
                <h3 className="flex items-center gap-2 font-bold text-[12px] text-ink">
                  <FiBook className="text-accent" size={13} />
                  Education
                </h3>

                {education.map((edu) => (
                  <div key={edu.id} className="bg-chrome-mid shadow-bevel p-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="flex items-center gap-1 font-mono text-[11px] text-accent">
                        <FiCalendar size={10} />
                        {edu.period}
                      </span>
                      {edu.status && <span className="badge">{edu.status}</span>}
                    </div>

                    <p className="field font-bold leading-snug">{edu.degree}</p>
                    {edu.major && (
                      <p className="text-[11px] text-ink-muted mt-1">{edu.major}</p>
                    )}
                    {edu.honors && (
                      <p className="mt-1.5">
                        <span className="badge">{edu.honors}</span>
                      </p>
                    )}

                    <p className="text-[12px] font-bold text-ink mt-2">{edu.shortName}</p>
                    <p className="text-[11px] text-ink-muted">{edu.school}</p>

                    <p className="flex items-center gap-1 mt-1.5 text-[11px] text-ink-muted">
                      <FiMapPin size={10} />
                      {edu.location}
                    </p>
                  </div>
                ))}

                {/* Spoken languages — single source of truth in data/skills.js */}
                <div className="bg-chrome-mid shadow-bevel p-3">
                  <p className="font-bold text-[12px] text-ink mb-2">
                    {skills.languages.label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.languages.items.map((lang) => (
                      <span key={lang} className="badge">{lang}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Window>
        </motion.div>
      </div>
    </section>
  )
}

export default About
