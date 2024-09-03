import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import StroreProvider from './StoreProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StroreProvider>
      <App />
    </StroreProvider>
  </StrictMode>,
)
