import react from 'react'
import { StrictMode } from 'react'
import reactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import ImgConverter from './pages/ImgConverter.jsx'
import RemoveBg from './pages/RemoveBg.jsx'
import VideoConverter from './pages/VideoConverter.jsx'
import Sidebar from './components/Sidebar'

import './index.css'

reactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/img-converter" element={<ImgConverter />} />
      <Route path="/remove-bg" element={<RemoveBg />} />
      <Route path="/video-converter" element={<VideoConverter />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
)