import React from 'react'
import style from './Address.module.css'
import { Button } from '@material-ui/core'
import mapIcon from '../../../assets/Icon/map-pin.svg'
import phone from '../../../assets/Icon/phone.svg'

function Address() {

  const Icon = (url) => (
    
    <img className={style.icon} alt='icon' src={url} />
    
  )

  return (
    <div className={style.Address}>
      <h3>Alamat</h3>
      <p>SUZUKI NJS BUAH BATU JL. Soekarno – Hatta No. 513 Bandung</p>
      <div className={style.buttonWrap}>
        <Button startIcon={Icon(mapIcon)} className={style.button} variant='outlined' >
          CEK GOOGLE MAPS
        </Button>
        <Button startIcon={Icon(phone)} className={style.buttonPhone} variant='outlined' >
          (022) 6204645
        </Button>
      </div>
    </div>
  )
}

export default Address
