import { useState, useEffect, useRef } from 'react'
import { socials as SOCIALS } from '../data/socials'

const VISIT_KEY = 'jw-portfolio-visits'

/** Cloudflare Worker backing the global count */
const COUNTER_URL = import.meta.env.VITE_COUNTER_URL

/** Bumps and returns this browser's own visit count, or null if storage is blocked. */
function bumpLocalCount() {
  try {
    const next = (parseInt(window.localStorage.getItem(VISIT_KEY), 10) || 0) + 1
    window.localStorage.setItem(VISIT_KEY, String(next))
    return next
  } catch {
    return null
  }
}

/**
 * Reads the site-wide hit count from the Worker. Falls back to a per-browser
 * count when the Worker isn't configured or can't be reached, so the footer
 * degrades quietly rather than breaking.
 *
 * @returns {{ count: number|null, scope: 'global'|'local'|null }}
 */
function useHitCount() {
  const [state, setState] = useState({ count: null, scope: null })
  const started = useRef(false)

  useEffect(() => {
    // StrictMode runs effects twice in development — only count the first.
    if (started.current) return
    started.current = true

    const fallBackToLocal = () => {
      const count = bumpLocalCount()
      setState({ count, scope: count === null ? null : 'local' })
    }

    if (!COUNTER_URL) {
      fallBackToLocal()
      return
    }

    fetch(COUNTER_URL, {
      // Don't let a hung counter leave the footer waiting forever.
      signal: AbortSignal.timeout?.(4000),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(res.status))))
      .then(({ count }) => {
        if (!Number.isFinite(Number(count))) throw new Error('unexpected payload')
        setState({ count: Number(count), scope: 'global' })
      })
      .catch(fallBackToLocal)
  }, [])

  return state
}

/**
 * Footer — a sunken status bar closing out the page.
 */
const Footer = () => {
  const year = new Date().getFullYear()
  const { count, scope } = useHitCount()

  return (
    <footer className="section-container pb-8">
      <div className="window">
        <div className="bg-chrome p-1 flex flex-col sm:flex-row items-center gap-2
                        font-mono text-[11px] text-ink-muted">

          <span className="px-2 py-1 bg-chrome-mid shadow-bevel-in">
            © {year}&nbsp;Yuanpeng (Jeremy) Wang
          </span>

          <span className="px-2 py-1 bg-chrome-mid shadow-bevel-in flex-grow text-center sm:text-left">
            Built with React &amp; Tailwind CSS
          </span>

          {count !== null && (
            <span
              className="px-2 py-1 bg-chrome-mid shadow-bevel-in whitespace-nowrap"
              title={
                scope === 'global'
                  ? 'Total page loads across all visitors'
                  : 'Times you have visited this page, counted in your browser only'
              }
            >
              {scope === 'global' ? 'Visitors' : 'Your visits'}:{' '}
              <span className="bg-ink text-chrome-light px-1 tracking-[0.2em]">
                {String(count).padStart(6, '0')}
              </span>
            </span>
          )}

          <span className="px-2 py-1 bg-chrome-mid shadow-bevel-in whitespace-nowrap">
            Updated {__BUILD_DATE__}
          </span>

          <span className="px-2 py-1 bg-chrome-mid shadow-bevel-in flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-accent no-underline"
              >
                <Icon size={14} />
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
