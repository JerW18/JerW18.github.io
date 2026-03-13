import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

/**
 * Category label color map — add new categories here as needed.
 */
const CATEGORY_STYLES = {
  'AI/ML':    'bg-violet-500/10 text-violet-400 border-violet-500/30',
  'Backend':  'bg-blue-500/10  text-blue-400  border-blue-500/30',
  'Web':      'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
}

/**
 * ProjectCard — responsive card with lift-on-hover, category badge,
 * feature bullets, tech list, and optional GitHub / live links.
 *
 * @param {object} project  - Project data object from data/projects.js
 * @param {number} index    - Used to stagger entrance animation
 */
const ProjectCard = ({ project, index }) => {
  const { title, description, features, tech, github, live, category } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="card flex flex-col h-full group"
    >
      {/* ── Header row: folder icon + category + links ── */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <FiFolder className="text-primary" size={24} />
          <span
            className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${
              CATEGORY_STYLES[category] ?? 'bg-gray-500/10 text-gray-400 border-gray-500/30'
            }`}
          >
            {category}
          </span>
        </div>

        <div className="flex gap-3 pt-0.5">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub`}
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <FiGithub size={17} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live site`}
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <FiExternalLink size={17} />
            </a>
          )}
        </div>
      </div>

      {/* ── Title ── */}
      <h3 className="text-white font-semibold text-base mb-2 group-hover:text-primary transition-colors leading-snug">
        {title}
      </h3>

      {/* ── Description ── */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      {/* ── Feature list ── */}
      <ul className="mb-5 space-y-1.5">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2 text-xs text-gray-500 leading-relaxed">
            <span className="text-primary/80 shrink-0 mt-px">▸</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* ── Tech stack ── */}
      <div className="mt-auto pt-4 border-t border-surface-500/50 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-[11px] font-mono text-gray-500">
            {t}
          </span>
        ))}
      </div>
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
    category: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default ProjectCard
