import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBookOpen, FiExternalLink } from 'react-icons/fi'
import { publications } from '../data/publications'
import Window from './Window'
import SectionHeader from './SectionHeader'

/**
 * Publications — peer-reviewed papers, newest first.
 */
const Publications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="publications" className="scroll-mt-16">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25, ease: 'linear' }}
        >
          <Window title="publications" icon={FiBookOpen}>
            <SectionHeader label="// 04. publications" title="Publications" />

            <div className="space-y-4">
              {publications.map((pub) => (
                <article key={pub.id} className="bg-chrome-mid shadow-bevel p-3">
                  <h3 className="font-bold text-[13px] text-ink leading-snug mb-2">
                    {pub.link ? (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h3>

                  <p className="field mb-3">
                    <span className="font-bold">{pub.year}</span> — {pub.venue}
                  </p>

                  <ul className="space-y-1 mb-3">
                    {pub.description.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-[12px] text-ink-muted leading-relaxed"
                      >
                        <span className="text-accent font-mono shrink-0">»</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {pub.tech.map((t) => (
                      <span key={t} className="badge">{t}</span>
                    ))}
                  </div>

                  {pub.link && (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="btn-3d">
                      <FiExternalLink size={12} />
                      Read on IEEE Xplore
                    </a>
                  )}
                </article>
              ))}
            </div>
          </Window>
        </motion.div>
      </div>
    </section>
  )
}

export default Publications
