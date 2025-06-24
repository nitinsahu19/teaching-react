import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { NameContextFun } from './RoutesFol/NameContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < NameContextFun>
    <BrowserRouter>
      <App />
    </BrowserRouter>
     </NameContextFun>
  </StrictMode>
)



