import AnimateOnScroll from './AnimateOnScroll'

export default function SectionHeader({ label, title, desc, compact = false, titleId }) {
  return (
    <AnimateOnScroll direction="up">
      <div className={`section__header${compact ? ' section__header--compact' : ''}`}>
        <span className="section__label">{label}</span>
        <h2 className="section__title" id={titleId}>
          {title}
        </h2>
        {desc && <p className="section__desc">{desc}</p>}
      </div>
    </AnimateOnScroll>
  )
}