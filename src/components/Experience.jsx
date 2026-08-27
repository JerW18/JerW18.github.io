import { useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiBriefcase } from 'react-icons/fi'
import { experiences } from '../data/experience'
import Window from './Window'
import SectionHeader from './SectionHeader'

/** Bulleted description list shared by entries and their nested clients. */
const BulletList = ({ points }) => (
  <ul className="space-y-1 mb-2.5">
    {points.map((point) => (
      <li key={point} className="flex gap-2 text-[12px] text-ink-muted leading-relaxed">
        <span className="text-accent font-mono shrink-0">»</span>
        {point}
      </li>
    ))}
  </ul>
)

BulletList.propTypes = {
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
}

/** Row of external links, rendered under an entry or client. */
const LinkRow = ({ links, className = '' }) => (
  <div className={`flex flex-wrap gap-x-4 gap-y-1 ${className}`}>
    {links.map((link) => (
      <a
        key={link.label}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-[11px] font-mono"
      >
        <FiExternalLink size={10} />
        {link.label}
      </a>
    ))}
  </div>
)

LinkRow.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
}

/**
 * Single timeline item.
 */
const TimelineItem = ({ exp, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-70px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.25, ease: 'linear', delay: index * 0.04 }}
      className="relative pl-6 pb-6 last:pb-0 border-l-2 border-chrome-dark"
    >
      {/* Square timeline marker */}
      <span className="absolute left-[-5px] top-3 w-2 h-2 bg-accent" aria-hidden="true" />

      <div className="bg-chrome-mid shadow-bevel p-3">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-bold text-[13px] text-ink">{exp.role}</h3>
            {exp.company && (
              <p className="text-[12px] text-accent font-bold mt-0.5">{exp.company}</p>
            )}
          </div>
          <div className="text-right shrink-0">
            <span className="badge">{exp.period}</span>
            <p className="text-[11px] text-ink-muted mt-1">{exp.location}</p>
          </div>
        </div>

        {/* Entry-level bullets and tech */}
        {exp.description.length > 0 && <BulletList points={exp.description} />}

        {exp.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        )}

        {exp.links?.length > 0 && (
          <>
            <div className="divider my-3" />
            <LinkRow links={exp.links} />
          </>
        )}

        {/* Nested clients (freelance) */}
        {exp.clients?.length > 0 && (
          <>
            <div className="divider my-3" />
            <p className="font-mono text-[11px] text-accent uppercase tracking-wider mb-2">
              Selected clients
            </p>
            <div className="space-y-3">
              {exp.clients.map((client) => (
                <div key={client.name} className="bg-paper shadow-bevel-in p-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <p className="font-bold text-[12px] text-ink">{client.name}</p>
                    {client.links?.length > 0 && <LinkRow links={client.links} />}
                  </div>
                  <BulletList points={client.description} />
                  <div className="flex flex-wrap gap-1.5">
                    {client.tech.map((t) => (
                      <span key={t} className="badge">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
 * Experience — vertical timeline of work history, newest first.
 */
const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="scroll-mt-16">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25, ease: 'linear' }}
        >
          <Window title="work_history.log" icon={FiBriefcase}>
            <SectionHeader label="// 02. experience" title="Work Experience" />

            <div>
              {experiences.map((exp, i) => (
                <TimelineItem key={exp.id} exp={exp} index={i} />
              ))}
            </div>
          </Window>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
