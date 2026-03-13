# Jeremy Wang — AI Engineer Portfolio

Personal portfolio website for **Yuanpeng (Jeremy) Wang** — AI Engineer & Software Developer.

**Live URL:** `https://jerw18.github.io/`

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS v3 |
| Routing | React Router v6 (HashRouter) |
| Animations | Framer Motion v11 |
| Icons | React Icons v5 |
| Deployment | GitHub Pages via `gh-pages` |

---

## Project Structure

```
JerW18.github.io/
├── public/
│   ├── favicon-32x32.png        # 32×32 favicon
│   ├── apple-touch-icon.png     # 180×180 Apple touch icon
│   ├── site.webmanifest         # PWA manifest
│   └── .nojekyll                # Disables Jekyll on gh-pages branch
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav with active-section tracking
│   │   ├── Hero.jsx             # Full-viewport landing with animations
│   │   ├── About.jsx            # Bio, interests, education, languages
│   │   ├── Experience.jsx       # Vertical timeline of work history
│   │   ├── Projects.jsx         # Responsive project card grid
│   │   ├── ProjectCard.jsx      # Individual project card component
│   │   ├── Skills.jsx           # Categorised skill badge grid
│   │   ├── Contact.jsx          # Contact info + CTA
│   │   └── Footer.jsx           # Footer with social links
│   ├── pages/
│   │   └── Home.jsx             # Assembles all sections
│   ├── data/
│   │   ├── projects.js          # Project data array
│   │   ├── experience.js        # Work + education data
│   │   ├── skills.js            # Skills by category
│   │   └── socials.js           # Social links (shared by Hero, Footer, Contact)
│   ├── App.jsx                  # Router shell
│   ├── main.jsx                 # React entry point
│   └── index.css                # Tailwind directives + global styles
├── index.html
├── vite.config.js               # base: '/'
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Local Development

```bash
# 1. Clone the repository
git clone https://github.com/JerW18/JerW18.github.io.git
cd JerW18.github.io

# 2. Install dependencies
npm install

# 3. Start the dev server (hot-reload at http://localhost:5173/)
npm run dev
```

---

## Deployment

### Deploying updates

```bash
git add .
git commit -m "update portfolio"
git push origin main

npm run deploy
```

---

## Customisation

All content lives in `src/data/` — no need to touch component code for content updates.

| File | What to edit |
|------|-------------|
| `src/data/projects.js` | Add / remove / update projects |
| `src/data/experience.js` | Update work history and education |
| `src/data/skills.js` | Add or reorganise skill categories |
| `src/components/Hero.jsx` | Name, title, bio, social links |
| `src/components/Contact.jsx` | Email, GitHub, LinkedIn, location |
| `tailwind.config.js` | Change `primary` colour or fonts |


---

## License

MIT © Yuanpeng (Jeremy) Wang
