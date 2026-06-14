import { lazy, Suspense } from 'react'
import Hero from '../components/Hero'

const Services = lazy(() => import('../components/Services'))
const Pricing = lazy(() => import('../components/Pricing'))
const Work = lazy(() => import('../components/Work'))
const WhyChoose = lazy(() => import('../components/WhyChoose'))
const ProcessSection = lazy(() => import('../components/ProcessSection'))
const Technologies = lazy(() => import('../components/Technologies'))
const Industries = lazy(() => import('../components/Industries'))
const Support = lazy(() => import('../components/Support'))
const Contact = lazy(() => import('../components/Contact'))

function SectionFallback() {
  return null
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <Services />
        <Pricing />
        <Work />
        <WhyChoose />
        <ProcessSection />
        <Technologies />
        <Industries />
        <Support />
        <Contact />
      </Suspense>
    </>
  )
}