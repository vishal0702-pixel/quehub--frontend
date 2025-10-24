import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App></App>
  </StrictMode>,
)
