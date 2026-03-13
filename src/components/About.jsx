import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBook, FiMapPin, FiCalendar } from 'react-icons/fi'
import { education } from '../data/experience'

const INTERESTS = [
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'LLM & Semantic Search',
  'Full-Stack Development',
  'Distributed Systems',
]

/**
 * About — professional summary, interests list, education cards,
 * and spoken languages. Splits into a 3/5 + 2/5 two-column layout on lg+.
 */
const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 bg-surface-800/25">
      <div ref={ref} className="section-container">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">// 01. about me</p>
          <h2 className="section-title">About</h2>
          <div className="w-14 h-0.5 bg-primary mt-3 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Left column: text + interests ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-gray-400 leading-relaxed">
              Hi — I'm{' '}
              <span className="text-white font-medium">Yuanpeng (Jeremy) Wang</span>, an AI
              Engineer and Software Developer currently pursuing my{' '}
              <span className="text-primary font-medium">MSc in Artificial Intelligence</span>{' '}
              at the Hong Kong University of Science and Technology.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I graduated with a BS in Computer Science (Major in Software Technology) from{' '}
              <span className="text-primary font-medium">De La Salle University – Manila</span> in
              2025, where I built a strong foundation in algorithms, system design, and software
              engineering.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My work lives at the intersection of{' '}
              <span className="text-white">AI research and practical engineering</span> — building
              LLM-powered search systems, computer vision pipelines, and scalable web applications.
              I enjoy turning complex problems into elegant, production-ready solutions.
            </p>

            {/* Interests grid */}
            <div className="pt-2">
              <p className="text-gray-300 font-medium text-sm mb-3 tracking-wide">
                Key Interests
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {INTERESTS.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-primary text-xs">▹</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right column: education + languages ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Section label */}
            <h3 className="flex items-center gap-2 text-white font-semibold text-base">
              <FiBook className="text-primary" size={16} />
              Education
            </h3>

            {/* Education cards */}
            {education.map((edu) => (
              <div key={edu.id} className="card relative overflow-hidden group">
                {edu.current && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-mono
                                   bg-primary/10 border border-primary/30 text-primary rounded-md">
                    Current
                  </span>
                )}

                <div className="flex items-center gap-1 text-xs font-mono text-primary mb-1.5">
                  <FiCalendar size={11} />
                  {edu.period}
                </div>

                <p className="text-white font-semibold text-sm leading-snug">{edu.degree}</p>
                {edu.major && (
                  <p className="text-gray-400 text-xs mt-0.5">{edu.major}</p>
                )}

                <p className="text-gray-200 text-sm font-medium mt-2">{edu.shortName}</p>
                <p className="text-gray-500 text-xs">{edu.school}</p>

                <div className="flex items-center gap-1 mt-2 text-gray-500 text-xs">
                  <FiMapPin size={11} />
                  {edu.location}
                </div>
              </div>
            ))}

            {/* Spoken Languages */}
            <div className="card">
              <p className="text-white font-semibold text-sm mb-3">Spoken Languages</p>
              <div className="flex flex-wrap gap-2">
                {['English', 'Filipino', 'Mandarin', 'Hokkien'].map((lang) => (
                  <span key={lang} className="badge">{lang}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
