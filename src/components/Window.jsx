import PropTypes from 'prop-types'

/**
 * Window — the building block of the whole layout.
 *
 * Renders a beveled panel with a gradient title bar, decorative control
 * glyphs, a white content area, and an optional sunken status strip.
 *
 * @param {string} title      - Text shown in the title bar
 * @param {node}   children   - Content rendered inside the white body
 * @param {elementType} icon  - Optional react-icons component for the title bar
 * @param {node}   statusBar  - Optional content for the sunken bottom strip
 * @param {string} className  - Extra classes for the outer frame
 * @param {string} bodyClassName - Extra classes for the white body
 */
const Window = ({ title, children, icon: Icon, statusBar, className = '', bodyClassName = '' }) => (
  <div className={`window ${className}`}>
    <div className="titlebar">
      {Icon && <Icon size={12} className="shrink-0" aria-hidden="true" />}
      {/* Wraps rather than truncates — some window titles are full project names */}
      <span className="min-w-0 break-words">{title}</span>
      {/* Decorative only — these controls do nothing */}
      <span className="ml-auto flex items-center gap-[3px]" aria-hidden="true">
        {['–', '□', '✕'].map((glyph, i) => (
          <span
            key={i}
            className="w-[15px] h-[14px] bg-chrome shadow-bevel
                       text-ink text-[9px] leading-[14px] text-center font-sans"
          >
            {glyph}
          </span>
        ))}
      </span>
    </div>

    <div className={`window-body ${bodyClassName}`}>{children}</div>

    {statusBar && (
      <div className="mt-[3px] px-2 py-1 bg-chrome shadow-bevel-in
                      font-mono text-[11px] text-ink-muted">
        {statusBar}
      </div>
    )}
  </div>
)

Window.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.elementType,
  statusBar: PropTypes.node,
  className: PropTypes.string,
  bodyClassName: PropTypes.string,
}

export default Window
