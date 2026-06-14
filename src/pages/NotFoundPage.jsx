import { Link } from 'react-router-dom'
import NavHashLink from '../components/NavHashLink'
import { ROUTES, CONTACT_HREF } from '../data/routes'
import { SERVICE_LINKS } from '../data/servicePages'

export default function NotFoundPage() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="container not-found__inner">
        <p className="not-found__code" aria-hidden="true">404</p>
        <h1 id="not-found-title">Page not found</h1>
        <p className="not-found__desc">
          The page you are looking for may have moved or no longer exists. Explore our software development services or
          contact our team in India for help.
        </p>
        <div className="not-found__actions">
          <Link to={ROUTES.home} className="btn btn--primary btn--lg">
            Back to homepage
          </Link>
          <NavHashLink href={CONTACT_HREF} className="btn btn--outline btn--lg">
            Contact us
          </NavHashLink>
        </div>
        <nav className="not-found__links" aria-label="Popular services">
          <h2 className="not-found__links-title">Popular services</h2>
          <ul>
            {SERVICE_LINKS.slice(0, 7).map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}