import { useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { experiences } from '../data/experience'

/**
 * Single timeline item — animates in from the left when it enters the viewport.
 */
const TimelineItem = ({ exp, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-70px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Vertical timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-surface-500/60" />

      {/* Timeline dot — glows on hover via parent */}
      <motion.div
        className="absolute left-[-5px] top-2.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface-900"
        whileHover={{ scale: 1.5 }}
      />

      {/* Card */}
      <div className="card group cursor-default">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-white font-semibold text-base group-hover:text-primary transition-colors">
              {exp.role}
            </h3>
            <p className="text-primary text-sm font-medium mt-0.5">{exp.company}</p>
          </div>
          <div className="text-right shrink-0">
            <span className="inline-block px-2.5 py-1 bg-surface-600 border border-surface-500
                            text-gray-400 text-xs font-mono rounded-md">
              {exp.period}
            </span>
            <p className="text-gray-600 text-xs mt-1">{exp.location}</p>
          </div>
        </div>

        {/* Grouped clients (e.g. Freelance) */}
        {exp.clients?.length > 0 ? (
          <div className="space-y-5">
            {exp.clients.map((client) => (
              <div key={client.name} className="pl-3 border-l border-surface-500/60">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="text-white text-sm font-semibold">{client.name}</p>
                  {client.links?.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary text-xs hover:underline underline-offset-2"
                    >
                      <FiExternalLink size={11} />
                      {link.label}
                    </a>
                  ))}
                </div>
                <ul className="space-y-1.5 mb-2.5">
                  {client.description.map((point) => (
                    <li key={point} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                      <span className="text-primary mt-0.5 shrink-0 text-xs">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {client.tech.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Bullet points */}
            <ul className="space-y-2 mb-4">
              {exp.description.map((point) => (
                <li key={point} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                  <span className="text-primary mt-0.5 shrink-0 text-xs">▹</span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>

            {/* External links */}
            {exp.links?.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-4 pt-3 border-t border-surface-500/50">
                {exp.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary text-xs hover:underline
                              underline-offset-2 transition-colors"
                  >
                    <FiExternalLink size={11} />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  )
}

TimelineItem.propTypes = {
  exp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string,
    period: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired,
        tech: PropTypes.arrayOf(PropTypes.string).isRequired,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
          })
        ),
      })
    ),
  }).isRequired,
  index: PropTypes.number.isRequired,
}

/**
 * Experience — vertical timeline of work history.
 */
const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20">
      <div ref={ref} className="section-container">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">{'// 02. experience'}</p>
          <h2 className="section-title">Work Experience</h2>
          <div className="w-14 h-0.5 bg-primary mt-3 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
