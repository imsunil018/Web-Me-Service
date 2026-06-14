import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../data/routes'
import { shouldHonorHomeHashOnBoot } from '../utils/homeScrollReset'
import { scheduleHashScroll } from '../utils/hashScroll'

let homeBootHandled = false

export default function ScrollToHash() {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const lastHashRef = useRef('')

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (pathname === ROUTES.legal || pathname === ROUTES.services || pathname === ROUTES.technologies) {
      return undefined
    }

    if (pathname !== ROUTES.home) return undefined

    if (!homeBootHandled) {
      homeBootHandled = true

      if (!shouldHonorHomeHashOnBoot()) {
        window.scrollTo(0, 0)
        if (hash) {
          navigate(ROUTES.home, { replace: true })
        }
        lastHashRef.current = ''
        return undefined
      }
    }

    if (!hash) {
      if (lastHashRef.current) {
        window.scrollTo(0, 0)
      }
      lastHashRef.current = ''
      return undefined
    }

    if (hash === lastHashRef.current) return undefined

    lastHashRef.current = hash
    const id = hash.replace('#', '')
    return scheduleHashScroll(id, { delay: 100 })
  }, [pathname, hash, navigate])

  return null
}