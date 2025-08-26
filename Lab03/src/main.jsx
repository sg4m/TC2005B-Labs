import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Segundo from './Segundo'
import Tercer from './Tercer'
import Fetch from './Fetch'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
