import { useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useInView } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import { contactItems as CONTACT_ITEMS } from '../data/socials'
import Window from './Window'
import SectionHeader from './SectionHeader'

/**
 * A single contact row — label above a sunken value box, like an old form field.
 */
const ContactCard = ({ item, index, isInView }) => {
  const { icon: Icon, label, value, href } = item

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.25, ease: 'linear', delay: index * 0.04 }}
    >
      <p className="flex items-center gap-1.5 font-bold text-[11px] text-ink mb-1">
        <Icon className="text-accent" size={12} />
        {label}
      </p>
      <p className="field break-all">
        {href ? (
          <a href={href} target={href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer">
            {value}
          </a>
        ) : (
          value
        )}
      </p>
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
 * Contact — invitation copy, contact details, and the primary mail CTA.
 */
const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="scroll-mt-16">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25, ease: 'linear' }}
        >
          <Window title="contact" icon={FiMail}>
            <SectionHeader label="// 06. contact" title="Get In Touch" />

            <div className="max-w-2xl">
              <p className="text-[13px] text-ink-muted leading-relaxed mb-5">
                I graduate from HKUST in October 2026 and am actively looking for full-time AI
                and software engineering roles, alongside research collaborations and interesting
                projects. Whether you want to discuss AI systems, potential work, or just say
                hello — my inbox is always open.
              </p>

              <div className="bg-chrome-mid shadow-bevel p-4 mb-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {CONTACT_ITEMS.map((item, i) => (
                    <ContactCard key={item.label} item={item} index={i} isInView={isInView} />
                  ))}
                </div>
              </div>

              <a href="mailto:jeremywang512@gmail.com" className="btn-3d btn-3d-primary px-6 py-2">
                <FiMail size={13} />
                Say Hello
              </a>
            </div>
          </Window>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
