import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { bindHomeScrollGuards, resetHomeOnHardLoad } from './utils/homeScrollReset'
import { bindPageVisibility } from './utils/pagePerformance'

resetHomeOnHardLoad()
bindHomeScrollGuards()
bindPageVisibility()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
