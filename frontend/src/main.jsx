import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from "@asgardeo/auth-react";
import './index.css'
import App from './App.jsx'

// Replace with your actual Asgardeo Console details
const authConfig = {
  signInRedirectURL: "http://localhost:5173", // Make sure this matches your Vite port
  signOutRedirectURL: "http://localhost:5173",
  clientID: "si8N0SZR2ZIJP4uizWzGbxp_BJsa",
  baseUrl: "https://api.asgardeo.io/t/nikka",
  scope: ["openid", "profile", "email"]
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider config={authConfig}>
      <App />
    </AuthProvider>
  </StrictMode>,
)