import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { LEGAL_SECTIONS, ROUTES, SERVICE_ROUTE } from './data/routes'
import Seo from './components/Seo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollToHash from './components/ScrollToHash'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

const LegalPage = lazy(() => import('./pages/LegalPage'))
const ServicesOverviewPage = lazy(() => import('./pages/ServicesOverviewPage'))
const TechnologiesPage = lazy(() => import('./pages/TechnologiesPage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))

function PageFallback() {
  return <div className="sr-only" aria-live="polite">Loading page…</div>
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToHash />
        <Seo />
        <Navbar />
        <main>
          <Routes>
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route
              path={ROUTES.legal}
              element={
                <Suspense fallback={<PageFallback />}>
                  <LegalPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.services}
              element={
                <Suspense fallback={<PageFallback />}>
                  <ServicesOverviewPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.technologies}
              element={
                <Suspense fallback={<PageFallback />}>
                  <TechnologiesPage />
                </Suspense>
              }
            />
            <Route
              path={SERVICE_ROUTE}
              element={
                <Suspense fallback={<PageFallback />}>
                  <ServicePage />
                </Suspense>
              }
            />
            <Route path="/services/blockchain-solutions" element={<Navigate to="/services/blockchain-development" replace />} />
            <Route path="/privacy" element={<Navigate to={{ pathname: ROUTES.legal, hash: `#${LEGAL_SECTIONS.privacy}` }} replace />} />
            <Route path="/terms" element={<Navigate to={{ pathname: ROUTES.legal, hash: `#${LEGAL_SECTIONS.terms}` }} replace />} />
            <Route path="/contact" element={<Navigate to={{ pathname: '/', hash: '#contact' }} replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App