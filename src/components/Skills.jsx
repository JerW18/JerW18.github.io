import { useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/skills'

/**
 * Individual skill category card — staggered entrance animation.
 */
const CategoryCard = ({ data, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.09 }}
      className="card"
    >
      {/* Category header */}
      <h3 className="text-white font-semibold text-sm mb-4 pb-2.5 border-b border-surface-500/60 flex items-center gap-2">
        <span>{data.icon}</span>
        {data.label}
      </h3>

      {/* Badge cloud */}
      <div className="flex flex-wrap gap-2">
        {data.items.map((skill) => (
          <motion.span
            key={skill}
            className="badge"
            whileHover={{ scale: 1.06, y: -1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

CategoryCard.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

/**
 * Skills — categorised badge grid across AI/ML, languages, frameworks, tools, and spoken languages.
 */
const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20">
      <div ref={ref} className="section-container">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">{'// 04. skills'}</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="w-14 h-0.5 bg-primary mt-3 rounded-full" />
        </motion.div>

        {/* Category grid — 3 columns on large screens */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([key, data], i) => (
            <CategoryCard key={key} data={data} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
