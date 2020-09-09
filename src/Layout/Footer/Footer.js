import React from 'react'
import ChipsLink from './ChipsLink/ChipsLink'
import style from './Footer.module.css'
import Address from './Address/Address'
import Hotline from './Hotline/Hotline'

function Footer() {
  return (
    <div className={style.Footer}>
      {/* Chips link */}
      <ChipsLink />

      {/* Address */}
      <Address />

      {/* Hotline */}
      <Hotline />
    </div>
  )
}

export default Footer
