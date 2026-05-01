import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { usePageTransition } from './hooks/usePageTransition'
import { ThemeProvider } from './contexts/ThemeContext'
import SidebarNav from './components/SidebarNav'
import Gallery from './pages/Gallery'
import Videobook from './pages/Videobook'
import Biography from './pages/Biography'
import CV from './pages/CV'
import Contact from './pages/Contact'
import './App.css'
import './styles/animations.css'

function AppLayout() {
  const { transitionStage, displayLocation } = usePageTransition()

  return (
    <>
      <aside className="app-sidebar">
        <SidebarNav />
      </aside>
      <main className="app-main">
        <div className={`page-wrapper page-${transitionStage}`}>
          <Routes location={displayLocation}>
            <Route path="/" element={<Navigate to="/gallery" replace />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videobook" element={<Videobook />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppLayout />
      </ThemeProvider>
    </Router>
  )
}

export default App
