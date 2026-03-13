import { useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useInView } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import { contactItems as CONTACT_ITEMS } from '../data/socials'

/**
 * A single contact card — clickable if it has a href, otherwise static.
 * card styling lives on motion.div so the box model is always block-level.
 */
const ContactCard = ({ item, index, isInView }) => {
  const { icon: Icon, label, value, href } = item

  const content = (
    <>
      <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg
                      group-hover:bg-primary/20 group-hover:border-primary/40 transition-all shrink-0">
        <Icon className="text-primary" size={19} />
      </div>
      <div>
        <p className="text-gray-500 text-xs mb-0.5">{label}</p>
        <p className="text-white text-sm font-medium break-all">{value}</p>
      </div>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1 + 0.2 }}
      className={`card group flex items-center gap-4 ${href ? 'hover:shadow-glow cursor-pointer' : 'cursor-default'}`}
    >
      {href ? (
        <a
          href={href}
          target={href.startsWith('mailto') ? '_self' : '_blank'}
          rel="noopener noreferrer"
          className="flex items-center gap-4 w-full"
        >
          {content}
        </a>
      ) : (
        <>{content}</>
      )}
    </motion.div>
  )
}

ContactCard.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    href: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isInView: PropTypes.bool.isRequired,
}

/**
 * Contact — brief invitation copy + contact info grid + primary CTA button.
 */
const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-20 bg-surface-800/25">
      <div ref={ref} className="section-container">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">{'// 05. contact'}</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="w-14 h-0.5 bg-primary mt-3 rounded-full" />
        </motion.div>

        <div className="max-w-2xl">
          {/* Intro copy */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-base leading-relaxed mb-10"
          >
            I'm currently open to new opportunities, research collaborations, and interesting
            projects. Whether you want to discuss AI systems, potential work, or just say
            hello — my inbox is always open.
          </motion.p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {CONTACT_ITEMS.map((item, i) => (
              <ContactCard key={item.label} item={item} index={i} isInView={isInView} />
            ))}
          </div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="mailto:jeremywang512@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5
                         bg-primary text-surface-900 font-semibold text-sm rounded-lg
                         hover:bg-emerald-500 active:scale-95 transition-all duration-200"
            >
              <FiMail size={16} />
              Say Hello
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
