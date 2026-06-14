const icons = {
  react: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8.5 16.5V7.5h2.1l3.2 5.4V7.5H16v9" fill="currentColor" />
      <path d="M17.2 16.5h1.4l-2.2-9h-1.5l2.3 9z" fill="currentColor" />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5l7.5 4.3v8.4L12 19.5 4.5 15.2V6.8L12 2.5z" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9.2 14.8V9.2l2.8-1.6 2.8 1.6v5.6l-2.8 1.6-2.8-1.6z" fill="currentColor" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
      <path d="M8 10h8v1.6H12.4V17H10V11.6H8V10z" fill="var(--tech-icon-bg, #fff)" />
      <path d="M13.8 10h2.1c1.4 0 2.3.8 2.3 2.1 0 1.1-.6 1.8-1.6 2l1.8 2.9h-1.9l-1.5-2.5h-1.2V17h-1.8V10zm1.8 3.3c.7 0 1.1-.4 1.1-1s-.4-1-1.1-1h-.3v2z" fill="var(--tech-icon-bg, #fff)" />
    </svg>
  ),
  solidity: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 7.5l4 2.3v4.4L12 16.5 8 14.2V9.8l4-2.3z" fill="currentColor" />
    </svg>
  ),
  ethereum: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l7.5 12.2L12 21l-7.5-5.8L12 3z" fill="currentColor" opacity="0.95" />
      <path d="M12 3v7.2l7.5 4.5L12 3z" fill="currentColor" opacity="0.55" />
      <path d="M12 10.2V21l7.5-5.8L12 10.2z" fill="currentColor" opacity="0.75" />
      <path d="M4.5 15.2L12 21V10.2l-7.5 4.5z" fill="currentColor" opacity="0.55" />
    </svg>
  ),
  polygon: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.2 3.5h-8.4L3.5 9.8v4.4l4.3 6.3h8.4l4.3-6.3V9.8L16.2 3.5z" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 8.2l3.4 2v3.6L12 16.4 8.6 13.8v-3.6L12 8.2z" fill="currentColor" />
    </svg>
  ),
  web3js: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    </svg>
  ),
  'react-native': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6" y="3" width="12" height="18" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="5.5" ry="2" fill="none" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="12" cy="12" rx="5.5" ry="2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
    </svg>
  ),
  flutter: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5h7.5l2.5 2.5H7.5V14L5 11.5V5z" fill="currentColor" />
      <path d="M5 14h5l2.5 2.5H5V14z" fill="currentColor" opacity="0.75" />
      <path d="M12.5 7.5L19 14l-3 3-6.5-6.5 3-3z" fill="currentColor" opacity="0.55" />
    </svg>
  ),
  wordpress: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.5 12c0-2.2 1.4-4.1 3.4-4.8l1.2 4.9c-.5.2-.9.7-.9 1.3 0 .8.6 1.4 1.4 1.4.6 0 1.1-.4 1.3-.9l1.2-4.8c2 .7 3.4 2.6 3.4 4.9 0 2.8-2.2 5-5 5s-5-2.2-5-5z" fill="currentColor" />
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="10" y="3" width="4" height="4" rx="2" fill="#F24E1E" />
      <rect x="10" y="10" width="4" height="4" rx="2" fill="#A259FF" />
      <rect x="10" y="17" width="4" height="4" rx="2" fill="#1ABCFE" />
      <circle cx="8" cy="12" r="2" fill="#0ACF83" />
      <circle cx="8" cy="19" r="2" fill="#FF7262" />
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4c-3.8 0-7 2.4-7 6.8 0 2.5 1.2 4.4 3 5.6-.3 1-.9 2.6-1 3.2 0 .2.1.4.4.4.5 0 1.8-1.2 2.4-1.8.8.2 1.6.4 2.5.4 3.8 0 7-2.4 7-6.8S15.8 4 12 4z" fill="currentColor" />
      <circle cx="9.5" cy="10.5" r="1" fill="var(--tech-icon-bg, #0f172a)" />
      <circle cx="14.5" cy="10.5" r="1" fill="var(--tech-icon-bg, #0f172a)" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 15.5c2.8 2 6.4 2.2 9.8 1.1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 12.5l-2.5 1.2L7 15l2.5-1.2L7 12.5zM17 12.5l-2.5 1.2 2.5 2.3 2.5-1.2-2.5-2.3z" fill="currentColor" />
      <path d="M5 8.5h14v2.8H5z" fill="currentColor" opacity="0.85" />
    </svg>
  ),
  stripe: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="3" fill="currentColor" />
      <path d="M9.5 14.2c0 .8-.6 1.3-1.6 1.3-.7 0-1.2-.2-1.5-.5v-3.4c.4-.3 1-.5 1.6-.5 1 0 1.5.5 1.5 1.2 0 .5-.3.8-.8.9.6.1 1.3.6 1.3 1.5zM12.2 10.6c.6 0 1.1.1 1.5.3v1.2c-.4-.2-.9-.4-1.4-.4-.5 0-.8.2-.8.5 0 .9 2.3.4 2.3 2.4 0 1.2-.9 1.9-2.2 1.9-.7 0-1.3-.1-1.8-.4v-1.3c.5.3 1 .5 1.6.5.6 0 .9-.2.9-.6 0-.8-2.3-.4-2.3-2.3 0-1.1.8-1.8 2.2-1.8z" fill="var(--tech-icon-bg, #fff)" />
    </svg>
  ),
  express: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6.5h16v11H4V6.5z" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7.5 16V8.5h2.2l2.4 4.2 2.4-4.2H16.5V16h-1.8v-5.2l-2.2 3.8h-1.2l-2.2-3.8V16H7.5z" fill="currentColor" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5c-2.8 2.2-4.5 5.8-4.5 9.8 0 3.2 1.2 5.8 3.2 7.2.4.3.8.5 1.3.5s.9-.2 1.3-.5c2-1.4 3.2-4 3.2-7.2 0-4-1.7-7.6-4.5-9.8z" fill="currentColor" />
      <path d="M12 6.2v12.8" fill="none" stroke="var(--tech-icon-bg, #0f172a)" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 18.5L12 5.5l7.5 13H4.5z" fill="currentColor" />
    </svg>
  ),
  web3: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    </svg>
  ),
  'smart-contracts': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 8h12v10H6V8z" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6h6v2H9V6z" fill="currentColor" />
      <path d="M8.5 11.5h3v3h-3v-3zm4 0h3v3h-3v-3z" fill="currentColor" opacity="0.85" />
    </svg>
  ),
  tailwindcss: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9.5 8.5c-2.2 0-3.6 1.1-4.2 3.3 0.8-1.1 1.7-1.5 2.7-1.3.6.1 1 .5 1.4 1 .8 1.1 1.7 1.6 2.9 1.6 2.2 0 3.6-1.1 4.2-3.3-.8 1.1-1.7 1.5-2.7 1.3-.6-.1-1-.5-1.4-1-.8-1.1-1.7-1.6-2.9-1.6zm-4.5 6c-2.2 0-3.6 1.1-4.2 3.3 0.8-1.1 1.7-1.5 2.7-1.3.6.1 1 .5 1.4 1 .8 1.1 1.7 1.6 2.9 1.6 2.2 0 3.6-1.1 4.2-3.3-.8 1.1-1.7 1.5-2.7 1.3-.6-.1-1-.5-1.4-1-.8-1.1-1.7-1.6-2.9-1.6z"
        fill="currentColor"
      />
    </svg>
  ),
  ethersjs: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l7.5 12.2L12 21l-7.5-5.8L12 3z" fill="currentColor" opacity="0.9" />
      <path d="M12 3v7.2l7.5 4.5L12 3z" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-8 3h2v2H5v-2zm3 0h2v2H8v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3-4h2v2h-2v-2zM3 13h14.5c.8 2.2-.2 4.6-2.2 5.8-1.8 1.1-4.2 1.1-6.2.2-1.6-.7-2.8-2.2-3.3-4H3v-2z" fill="currentColor" />
    </svg>
  ),
}

export default function TechIcon({ name }) {
  return icons[name] || icons.react
}