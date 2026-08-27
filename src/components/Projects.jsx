import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiFolder } from 'react-icons/fi'
import { projects, otherProjects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Window from './Window'
import SectionHeader from './SectionHeader'

/**
 * Projects — featured work as full window panels, followed by a compact
 * list of smaller academic and personal builds.
 */
const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="scroll-mt-16">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25, ease: 'linear' }}
        >
          <Window title="projects" icon={FiFolder}>
            <SectionHeader label="// 03. projects" title="Featured Projects">
              A curated selection of personal and academic projects — separate from freelance
              work — spanning AI systems, distributed backends, and concurrent programming.
              Smaller builds are listed beneath.
            </SectionHeader>

            {/* Featured grid */}
            <div className="grid lg:grid-cols-2 gap-4 items-stretch">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>

            {/* Compact list of everything else */}
            <div className="mt-6">
              <p className="font-mono text-[11px] text-accent uppercase tracking-wider mb-2">
                Other projects
              </p>

              <div className="border border-chrome-dark divide-y divide-chrome-dark">
                {otherProjects.map((p) => (
                  <div key={p.id} className="p-3 bg-chrome-mid">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-bold text-[12px] text-ink">
                        {p.github ? (
                          <a href={p.github} target="_blank" rel="noopener noreferrer">
                            {p.title}
                          </a>
                        ) : (
                          p.title
                        )}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span key={t} className="badge">{t}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-[12px] text-ink-muted leading-relaxed mt-1">{p.blurb}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* View more CTA */}
            <div className="mt-5">
              <a
                href="https://github.com/JerW18"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d"
              >
                <FiGithub size={12} />
                View more on GitHub
              </a>
            </div>
          </Window>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
