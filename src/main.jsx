import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <App />
    <Footer/>
  </StrictMode>,
)
