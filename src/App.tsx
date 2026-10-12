import { useEffect } from 'react'
import { ComingSoonPage } from './pages/Index'

function App() {
  useEffect(() => {
    if (window.location.pathname !== '/') {
      window.history.replaceState({}, '', '/')
    }
  }, [])

  return <ComingSoonPage />
}

export default App
