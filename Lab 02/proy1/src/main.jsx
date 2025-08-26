import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Primer } from './Primer.jsx'
import Segundo from './Segundo.jsx'
import Tercer from './Tercer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tercer />
  </StrictMode>,
)
