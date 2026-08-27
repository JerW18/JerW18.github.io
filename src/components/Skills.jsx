import { useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useInView } from 'framer-motion'
import { FiGrid } from 'react-icons/fi'
import { skills } from '../data/skills'
import Window from './Window'
import SectionHeader from './SectionHeader'

/**
 * Individual skill category — a small window panel of badges.
 */
const CategoryCard = ({ data, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.25, ease: 'linear', delay: index * 0.04 }}
      className="h-full"
    >
      <Window
        title={`${data.icon}  ${data.label}`}
        className="h-full flex flex-col"
        bodyClassName="flex-grow p-3"
      >
        {/* The visible label lives in the window's title bar */}
        <h3 className="sr-only">{data.label}</h3>

        <div className="flex flex-wrap gap-1.5">
          {data.items.map((skill) => (
            <span key={skill} className="badge">{skill}</span>
          ))}
        </div>
      </Window>
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
 * Skills — categorised badge grid.
 */
const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="scroll-mt-16">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25, ease: 'linear' }}
        >
          <Window title="skills" icon={FiGrid}>
            <SectionHeader label="// 05. skills" title="Technical Skills" />

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch">
              {Object.entries(skills).map(([key, data], i) => (
                <CategoryCard key={key} data={data} index={i} />
              ))}
            </div>
          </Window>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
