import { useState } from 'react'
import AuthGate from './components/AuthGate'
import LandingPage from './pages/LandingPage'

function App() {
  // Simple routing based on path
  const isLandingPage = window.location.pathname === '/' || window.location.pathname === '/landing'

  if (isLandingPage) {
    return <LandingPage />
  }

  return <AuthGate />
}

export default App
