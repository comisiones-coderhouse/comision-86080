import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import './index.scss'

const DOMElement = document.getElementById('root')

const VirtualDOMElement = createRoot(DOMElement)

VirtualDOMElement.render(
  <StrictMode>
    <App />
  </StrictMode>,
)