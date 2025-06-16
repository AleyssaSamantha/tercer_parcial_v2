import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Navegar } from './componentes/Navegar'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/tercer_parcial/'>
    <Navegar />
    <App />
  </BrowserRouter>,
)
