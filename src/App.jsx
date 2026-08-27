import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-chrome md:flex md:items-start">
        <Navbar />
        <div className="flex-1 min-w-0 pt-14 md:pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
