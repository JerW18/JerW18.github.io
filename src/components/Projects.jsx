import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

/**
 * Projects — responsive 2-column grid of ProjectCard components.
 */
const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 bg-surface-800/25">
      <div ref={ref} className="section-container">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">// 03. projects</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-14 h-0.5 bg-primary mt-3 rounded-full" />
          <p className="text-gray-500 text-sm mt-3 max-w-lg">
            A curated selection of personal and academic projects — separate from freelance work — spanning AI systems, distributed backends, and web development.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/JerW18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-mono text-sm
                      hover:underline underline-offset-4 transition-colors"
          >
            <FiGithub size={15} />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
