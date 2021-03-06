import React from 'react'
import Overview from './Overview/Overview'
import TipeWarna from './TipeWarna/TipeWarna'
import Eksterior from './Eksterior/Eksterior'
import Interior from './Interior/Interior'
import Spesifikasi from './Spesifikasi/Spesifikasi'
import DaftarHarga from './DaftarHarga/DaftarHarga'
import Footer from './Footer/Footer'
import Copyrights from '../Components/Copyrights/Copyrights'
import style from './Layout.module.css'

function Layout() {
  return (
    <div>
      {/* ../Overview */}
      <Overview />

      {/* ../TipeWarna Section */}
      <TipeWarna />
      
      {/* ../Eksterior Section */}
      <Eksterior />

      {/* ../Interior Section */}
      <Interior />

      {/* ../Spesifikasi Section */}
      <Spesifikasi />

      {/* ../DaftarHarga Section */}
      <DaftarHarga />

      {/* ../Footer section */}
      <Footer />

      <div className={style.Copyrights}>
        <Copyrights />
      </div>
    </div>
  )
}

export default Layout
