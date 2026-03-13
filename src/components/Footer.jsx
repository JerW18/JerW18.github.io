import { socials as SOCIALS } from '../data/socials'

/**
 * Footer — minimal strip with logo, copyright, and social icons.
 */
const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 bg-surface-900 border-t border-surface-600/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <span className="font-mono font-bold text-primary text-base">
            JW<span className="text-white">.</span>
          </span>

          {/* Copyright */}
          <p className="text-gray-600 text-xs font-mono text-center">
            © {year}&nbsp;Yuanpeng (Jeremy) Wang &nbsp;·&nbsp; Built with React &amp; TailwindCSS
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
