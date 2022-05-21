import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { App } from './App';
import GlobalCss from './global.css';

const root = ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment);
root.render(
  <StrictMode>
    <GlobalCss />
     <App />
  </StrictMode>
);