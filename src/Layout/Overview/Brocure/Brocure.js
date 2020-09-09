import React from 'react'
import style from './Brocure.module.css'
import titleImg from '../../../assets/img/GearToAcomplished.svg'
import {Button} from '@material-ui/core'

function Brocure() {
  return (
    <div className={style.Brocure}>
      {/* title */}
      <img className={style.brocure__title} src={titleImg} alt='title' />

      {/* detail brocure */}
      <p className={style.brocure__detail}>
        Suzuki XL7 hadir dengan tampilan maskulin, tangguh dan berkarakter. Desain modern SUV 7-Seater memberikan kebanggaan dan kepercayaan bagi penggunanya. Dilengkapi dengan fitur canggih semakin membuat XL7 menjadi SUV yang luar biasa di kelasnya
      </p>
      
      <hr style={{border: '.2px solid rgba(255, 255, 255, 0.2)', width: '100%'}} />
      
      <div className={style.Brocure__buttonWrapper}>
        <Button className={style.unduh} variant="outlined">
          unduh brosur
        </Button>
        <Button className={style.harga} variant="contained" disableElevation>
          harga
        </Button>
      </div>
    </div>
  )
}

export default Brocure
