import React from 'react'
import { Chip } from '@material-ui/core'
import style from './ChipsLink.module.css'

function ChipsLink() {

  const chipElem = [
    'Beranda',
    'Mobil',
    'Service',
    'Sparepart',
    'Tentang Kami',
    'Hubungi Kami',
  ]

  return (
    <div className={style.Chips}>
      {chipElem.map(chip => (
        <Chip key={chip} label={chip} 
          size="small"
          component="a" 
          href="#"  
          variant="outlined" 
          clickable
        />  
      ))}
    </div>
  )
}

export default ChipsLink
