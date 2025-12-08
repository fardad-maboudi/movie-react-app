import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,BrowserRouter, RouterProvider } from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'
import AppTwp from './AppTwo.jsx'

// import router from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
