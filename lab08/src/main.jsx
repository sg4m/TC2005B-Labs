import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Polyfill Buffer and process for browser bundles that use node-style crypto
import { Buffer } from 'buffer'
window.Buffer = window.Buffer || Buffer
window.process = window.process || { env: {} }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
