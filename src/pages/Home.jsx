import Hero       from '../components/Hero'
import About      from '../components/About'
import Experience from '../components/Experience'
import Projects   from '../components/Projects'
import Skills     from '../components/Skills'
import Contact    from '../components/Contact'
import Footer     from '../components/Footer'

/**
 * Home — assembles all portfolio sections in order.
 * Adding a new section is as simple as importing it and placing it here.
 */
const Home = () => (
  <main>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </main>
)

export default Home
