import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToggleTheamFun } from './Components/ToggleTheam.jsx'
import {Provider} from 'react-redux'
import { store } from './redux/store.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

    <ToggleTheamFun>

    <BrowserRouter>
      <App />
      </BrowserRouter>
    </ToggleTheamFun>
    </Provider>
  </StrictMode>,
)
