import { AboutSection } from './components/sections/AboutSection'
import { ApproachSection } from './components/sections/ApproachSection'
import { FeatureSection } from './components/sections/FeatureSection'
import { Hero } from './components/sections/Hero'
import { IndustriesSection } from './components/sections/IndustriesSection'
import { SolutionsSection } from './components/sections/SolutionsSection'
import { StatsSection } from './components/sections/StatsSection'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ComingSoonPage } from './pages/ComingSoonPage'

const routeTitles: Record<string, string> = {
  '/about': 'About',
  '/solution': 'Solutions',
  '/solutions': 'Solutions',
  '/industries': 'Industries',
  '/approach': 'Approach',
  '/contact': 'Contact',
}

function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'
  const routeTitle = routeTitles[pathname]

  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f1e9] text-[#06112b]">
      <Header />
      {routeTitle ? (
        <ComingSoonPage title={routeTitle} />
      ) : (
        <main>
          <Hero />
          <AboutSection />
          <StatsSection />
          <SolutionsSection />
          <FeatureSection />
          <IndustriesSection />
          <ApproachSection />
        </main>
      )}
      <Footer />
    </div>
  )
}

export default App
