import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client';

import CursorProvider from './context/CursorContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CursorProvider>
    <StrictMode>
    <App />
    </StrictMode> 
  </CursorProvider>
);
