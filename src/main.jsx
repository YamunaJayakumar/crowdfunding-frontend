import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { CampaignFilterProvider } from "./context/CampaignFilterContext"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CampaignFilterProvider>
      <GoogleOAuthProvider clientId='801408052186-efa8vk8rcvtmrr6dt5k1p0l4u48u76g7.apps.googleusercontent.com'>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </CampaignFilterProvider>
  </StrictMode>,
)
