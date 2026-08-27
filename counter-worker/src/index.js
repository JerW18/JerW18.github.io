/**
 * Page-hit counter for the portfolio.
 *
 * GET  /  → increments the total and returns { "count": <n> }
 * HEAD /  → returns the current total without incrementing
 *
 * State lives in a single KV key. KV is eventually consistent and this is a
 * read-then-write, so two hits landing in the same instant can collapse into
 * one. At portfolio traffic that is negligible; if you ever need an exact
 * count, swap KV for a Durable Object.
 */

const KEY = 'total'

/** Origins allowed to read the counter, from the ALLOWED_ORIGINS var. */
function corsHeaders(request, env) {
  const allowed = (env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

  const origin = request.headers.get('Origin')

  return {
    // Echo the origin only when it's on the allowlist; otherwise send the
    // canonical site so an unknown origin simply fails the browser's check.
    'Access-Control-Allow-Origin': allowed.includes(origin) ? origin : allowed[0] || '',
    'Vary': 'Origin',
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json',
  }
}

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env)

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: { ...cors, 'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS' },
      })
    }

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: cors,
      })
    }

    const current = Number(await env.HITS.get(KEY)) || 0

    // HEAD peeks at the total without counting itself.
    if (request.method === 'HEAD') {
      return new Response(JSON.stringify({ count: current }), { headers: cors })
    }

    const next = current + 1
    await env.HITS.put(KEY, String(next))

    return new Response(JSON.stringify({ count: next }), { headers: cors })
  },
}
