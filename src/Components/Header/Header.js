import React from 'react'
import style from './Header.module.css'
import HeaderTop from './HeaderTop/HeaderTop'
import TabSection from './TabSection/TabSection'

function Header() {
  return (
    <div className={style.Header}>
      {/* logo and sidemenu button */}
      <HeaderTop />

      {/* TabSection component */}
      <TabSection />
    </div>
  )
}

export default Header
