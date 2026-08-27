import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Window from './Window'

/**
 * Category label color map — add new categories here as needed.
 * Anything not listed falls back to plain chrome styling.
 */
const CATEGORY_STYLES = {
  'AI/ML':   'bg-violet-100  text-violet-900  border-violet-400',
  'NLP':     'bg-rose-100    text-rose-900    border-rose-400',
  'Backend': 'bg-blue-100    text-blue-900    border-blue-400',
  'Distributed Systems': 'bg-amber-100   text-amber-900   border-amber-500',
  'Web':     'bg-emerald-100 text-emerald-900 border-emerald-500',
}

const FALLBACK_STYLE = 'bg-chrome-mid text-ink-muted border-chrome-dark'

/** `category` accepts either a single string or an array of them. */
const toCategories = (category) =>
  Array.isArray(category) ? category : [category].filter(Boolean)

/**
 * ProjectCard — one featured project as its own window panel, with a category
 * chip, feature bullets, tech list, and optional GitHub / live links.
 *
 * @param {object} project  - Project data object from data/projects.js
 * @param {number} index    - Used to stagger entrance animation
 */
const ProjectCard = ({ project, index }) => {
  const { title, description, features, tech, github, live, category } = project

  const statusBar = (
    <div className="flex items-center justify-between gap-3">
      <span className="flex flex-wrap items-center gap-1.5">
        {toCategories(category).map((c) => (
          <span key={c} className={`px-1.5 border ${CATEGORY_STYLES[c] ?? FALLBACK_STYLE}`}>
            {c}
          </span>
        ))}
      </span>

      <span className="flex items-center gap-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-mono"
          >
            <FiGithub size={11} />
            Source
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-mono"
          >
            <FiExternalLink size={11} />
            Visit
          </a>
        )}
        {!github && !live && <span className="text-ink-muted">Private repository</span>}
      </span>
    </div>
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.25, ease: 'linear', delay: index * 0.04 }}
      whileHover={{ y: -2 }}
      className="h-full"
    >
      <Window
        title={title}
        statusBar={statusBar}
        className="h-full flex flex-col"
        bodyClassName="flex-grow p-4"
      >
        {/* The visible title lives in the window's title bar */}
        <h3 className="sr-only">{title}</h3>

        <p className="text-[12px] text-ink-muted leading-relaxed mb-3">{description}</p>

        <ul className="space-y-1 mb-3">
          {features.map((feature) => (
            <li key={feature} className="flex gap-2 text-[11px] text-ink-muted leading-relaxed">
              <span className="text-accent font-mono shrink-0">»</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="divider mb-3" />

        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      </Window>
    </motion.article>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    live: PropTypes.string,
    // Either a single category or several
    category: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default ProjectCard
