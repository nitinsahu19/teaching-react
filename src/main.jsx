import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { NameContextFun } from './RoutesFol/NameContext.jsx'
import { Provider } from 'react-redux'
import { store } from './ReduxFol/store.jsx'
// import 'auraui/styles.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      < NameContextFun>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NameContextFun>
    </Provider>
  </StrictMode>
)



