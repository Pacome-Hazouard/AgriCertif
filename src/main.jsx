import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AgriCertifApp from './AgriCertifApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AgriCertifApp />
  </StrictMode>,
)
