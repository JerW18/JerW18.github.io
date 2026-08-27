import PropTypes from 'prop-types'

/**
 * SectionHeader — the label / title pair that opens every section body.
 */
const SectionHeader = ({ label, title, children }) => (
  <div className="mb-5">
    <p className="section-label">{label}</p>
    <h2 className="section-title mt-0.5">{title}</h2>
    <div className="divider mt-2" />
    {children && (
      <p className="text-ink-muted text-[12px] leading-relaxed mt-3 max-w-2xl">{children}</p>
    )}
  </div>
)

SectionHeader.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default SectionHeader
