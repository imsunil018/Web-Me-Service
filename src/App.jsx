import { ThemeProvider } from './context/ThemeContext'
import Seo from './components/Seo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Support from './components/Support'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <ThemeProvider>
      <Seo />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Pricing />
        <Testimonials />
        <Support />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  )
}

export default App