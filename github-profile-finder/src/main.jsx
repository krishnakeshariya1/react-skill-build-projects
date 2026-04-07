import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GitHubProvider } from './ContextAPI/GithubContext.jsx'

createRoot(document.getElementById('root')).render(
  < GitHubProvider>
    <App />
  </GitHubProvider>
)
