import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import TechnologiesSection from './components/TechnologiesSection'
import ProcessSection from './components/ProcessSection'
import AchievementsSection from './components/AchievementsSection'
import SelectedWork from './components/SelectedWork'
import Industries from './components/Industries'
import WhyMariox from './components/WhyMariox'
import ClientTestimonials from './components/ClientTestimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechnologiesSection />
        <ProcessSection />
        <AchievementsSection />
        <SelectedWork />
        <Industries />
        <WhyMariox />
        <ClientTestimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App