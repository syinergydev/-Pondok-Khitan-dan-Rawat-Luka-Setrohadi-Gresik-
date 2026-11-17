import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Beranda from './pages/Beranda'
import Tentang from './pages/Tentang'
import Layanan from './pages/Layanan'
import KhitanModern from './pages/KhitanModern'
import RawatLuka from './pages/RawatLuka'
import HomeVisit from './pages/HomeVisit'
import Edukasi from './pages/Edukasi'
import Galeri from './pages/Galeri'
import Kredensial from './pages/Kredensial'
import Ulasan from './pages/Ulasan'
import Kontak from './pages/Kontak'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Beranda />} />
          <Route path="tentang" element={<Tentang />} />
          <Route path="layanan" element={<Layanan />} />
          <Route path="khitan-modern" element={<KhitanModern />} />
          <Route path="rawat-luka" element={<RawatLuka />} />
          <Route path="home-visit" element={<HomeVisit />} />
          <Route path="edukasi" element={<Edukasi />} />
          <Route path="galeri" element={<Galeri />} />
          <Route path="kredensial" element={<Kredensial />} />
          <Route path="ulasan" element={<Ulasan />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="*" element={<Beranda />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
