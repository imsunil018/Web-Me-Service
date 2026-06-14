import { Link, useLocation, useNavigate } from 'react-router-dom'
import { isHomeHashHref, parseHomeHashHref, ROUTES } from '../data/routes'
import { scheduleHashScroll } from '../utils/hashScroll'

/**
 * Hash links on the homepage (e.g. /#contact) use React Router so navigation
 * works from any page. External and mailto links stay as plain anchors.
 */
export default function NavHashLink({ href, to, className, onClick, children, ...rest }) {
  const location = useLocation()
  const navigate = useNavigate()
  const target = to ?? href

  if (!target) return null

  const handleClick = (event) => {
    onClick?.(event)
    if (event.defaultPrevented) return

    document.documentElement.classList.remove('nav-open')

    const parsed =
      typeof target === 'object' && target.pathname && target.hash
        ? target
        : isHomeHashHref(target)
          ? parseHomeHashHref(target)
          : null

    if (!parsed || parsed.pathname !== ROUTES.home || !parsed.hash) return

    const id = parsed.hash.replace('#', '')
    const onHome = location.pathname === ROUTES.home

    if (onHome) {
      event.preventDefault()
      if (location.hash !== parsed.hash) {
        navigate(parsed, { preventScrollReset: true })
        // ScrollToHash handles scrolling after hash change
      } else {
        scheduleHashScroll(id, { delay: 0 })
      }
    }
  }

  if (typeof target === 'object' && target.pathname && target.hash) {
    return (
      <Link
        to={target}
        preventScrollReset
        className={className}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  if (isHomeHashHref(target)) {
    return (
      <Link
        to={parseHomeHashHref(target)}
        preventScrollReset
        className={className}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  return (
    <a href={target} className={className} onClick={onClick} {...rest}>
      {children}
    </a>
  )
}