import { Link } from 'react-router-dom'
import { SITE } from '../data/site'
import { CONTACT_HREF } from '../data/routes'

function whatsappHref() {
  const text = encodeURIComponent(SITE.whatsapp.defaultMessage)
  return `https://wa.me/${SITE.whatsapp.e164}?text=${text}`
}

function ContactCard() {
  return (
    <div className="legal-page__contact-card">
      <a className="legal-page__contact-item" href={`mailto:${SITE.email}`}>
        <span className="legal-page__contact-label">Email</span>
        <span className="legal-page__contact-value">{SITE.email}</span>
      </a>
      <a
        className="legal-page__contact-item"
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="legal-page__contact-label">WhatsApp</span>
        <span className="legal-page__contact-value">{SITE.whatsapp.display}</span>
      </a>
      <div className="legal-page__contact-item legal-page__contact-item--static">
        <span className="legal-page__contact-label">Business hours</span>
        <span className="legal-page__contact-value">{SITE.businessHours}</span>
      </div>
      <div className="legal-page__contact-item legal-page__contact-item--static">
        <span className="legal-page__contact-label">Entity</span>
        <span className="legal-page__contact-value">
          {SITE.legalName} · {SITE.serviceArea}
        </span>
      </div>
      <Link className="legal-page__contact-cta" to={CONTACT_HREF}>
        Go to contact form
      </Link>
    </div>
  )
}

export default function LegalSectionContent({ sections }) {
  return (
    <div className="legal-page__content">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="legal-page__section">
          <h3>{section.title}</h3>
          {section.paragraphs?.map((text, index) => (
            <p key={`${section.id}-p-${index}`}>{text}</p>
          ))}
          {section.list && (
            <ul>
              {section.list.map((item, index) => (
                <li key={`${section.id}-li-${index}`}>{item}</li>
              ))}
            </ul>
          )}
          {section.paragraphsAfterList?.map((text, index) => (
            <p key={`${section.id}-pa-${index}`}>{text}</p>
          ))}
          {section.contact ? <ContactCard /> : null}
        </section>
      ))}
    </div>
  )
}