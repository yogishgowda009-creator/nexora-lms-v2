import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'
import PillarPage from './pages/PillarPage'
import LessonPage from './pages/LessonPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0D0E1A]">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/"                                  element={<HomePage />} />
          <Route path="/pillars"                           element={<HomePage />} />
          <Route path="/pillar/:slug"                      element={<PillarPage />} />
          <Route path="/pillar/:slug/lesson/:lessonId"     element={<LessonPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
