import React from 'react'
import style from './Hotline.module.css'
import suzuki from '../../../assets/img/suzuki_hotline.svg'
import mySuzuki from '../../../assets/img/my_suzuki.svg'
import ecstar from '../../../assets/img/ECSTAR.svg'

function Hotline() {
  return (
    <div className={style.Hotline}>
      <h5>HOTLINE 24 JAM (Bebas Pulsa)</h5>
      <img className={style.img1} alt='halosuzuki' src={suzuki} />
      <h5>DOWNLOAD MY SUZUKI</h5>
      <img className={style.img2} alt='mysuzuki' src={mySuzuki} />
      <img className={style.img3} alt='ecstart' src={ecstar} />
    </div>
  )
}

export default Hotline
