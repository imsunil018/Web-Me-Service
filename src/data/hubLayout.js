import { SERVICES } from './site'
import { HOME_SECTIONS, homeHref } from './routes'

/** Normalized hub node positions (0–1) — synced with HUB_SVG / 600×300 viewBox */
export const HUB_COORDS = {
  tl: [198 / 600, 78 / 300],
  tr: [402 / 600, 78 / 300],
  center: [0.5, 0.5],
  bl: [198 / 600, 222 / 300],
  br: [402 / 600, 222 / 300],
}

/** SVG viewBox coordinates for connector lines */
export const HUB_SVG = {
  tl: [198, 78],
  tr: [402, 78],
  center: [300, 150],
  bl: [198, 222],
  br: [402, 222],
}

export const HUB_SLOTS = [
  { id: 'smart-contract', slot: 'tl', gridClass: 'hero__hub-node--tl', shortTitle: 'Smart Contracts' },
  { id: 'web-dev', slot: 'tr', gridClass: 'hero__hub-node--tr', shortTitle: 'Web Development' },
  { id: 'blockchain', slot: 'center', gridClass: 'hero__hub-node--center', shortTitle: 'Blockchain Hub' },
  { id: 'uiux', slot: 'bl', gridClass: 'hero__hub-node--bl', shortTitle: 'UI/UX Design' },
  { id: 'mobile', slot: 'br', gridClass: 'hero__hub-node--br', shortTitle: 'Mobile Apps' },
]

export const HUB_CARD_DETAILS = {
  'smart-contract': {
    hubFx: 'chain',
    href: homeHref(HOME_SECTIONS.blockchainServices),
  },
  'web-dev': {
    hubFx: 'web',
    href: homeHref(HOME_SECTIONS.webDevelopmentServices),
  },
  blockchain: {
    hubFx: 'core',
    href: homeHref(HOME_SECTIONS.blockchainServices),
  },
  uiux: {
    hubFx: 'design',
    href: homeHref(HOME_SECTIONS.uiuxServices),
  },
  mobile: {
    hubFx: 'mobile',
    href: homeHref(HOME_SECTIONS.mobileDevelopmentServices),
  },
}

const serviceById = Object.fromEntries(SERVICES.map((s) => [s.id, s]))

export const HUB_SERVICES = HUB_SLOTS.map(({ id, slot, gridClass, shortTitle }) => ({
  ...serviceById[id],
  ...HUB_CARD_DETAILS[id],
  slot,
  gridClass,
  hubLabel: shortTitle || serviceById[id]?.title,
})).filter((s) => s.id)

/** Spoke + outer ring line segments for SVG */
export const HUB_SPOKES = [
  ['tl', 'center'],
  ['tr', 'center'],
  ['bl', 'center'],
  ['br', 'center'],
]

export const HUB_ALL_LINES = [...HUB_SPOKES]

/** Mobile vertical layout — center top, nodes in 2×2 below (400×400 viewBox) */
export const MOBILE_HUB_SVG = {
  center: [200, 68],
  tl: [100, 196],
  tr: [300, 196],
  bl: [100, 312],
  br: [300, 312],
}

/** Normalized mobile hub positions (0–1) — synced with MOBILE_HUB_SVG / 400×400 viewBox */
export const MOBILE_HUB_COORDS = {
  center: [200 / 400, 68 / 400],
  tl: [100 / 400, 196 / 400],
  tr: [300 / 400, 196 / 400],
  bl: [100 / 400, 312 / 400],
  br: [300 / 400, 312 / 400],
}

export function hubSvgPath(from, to, coords = HUB_SVG) {
  const [x1, y1] = coords[from]
  const [x2, y2] = coords[to]
  return `M${x1},${y1} L${x2},${y2}`
}