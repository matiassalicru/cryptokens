import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import GlobalCss from './global.css'
import TokenContextProvider from './context/TokensContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element | DocumentFragment
)
root.render(
  <StrictMode>
    <GlobalCss />
    <TokenContextProvider>
      <App />
    </TokenContextProvider>
  </StrictMode>
)
