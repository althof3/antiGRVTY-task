import React from 'react'
import { Chip } from '@material-ui/core'
import style from './ChipsLink.module.css'

function ChipsLink() {
  return (
    <div className={style.Chips}>
      <Chip size="small" label="Beranda" component="a" href="#" clickable variant="outlined" />
      <Chip size="small" label="Mobil" component="a" href="#" clickable variant="outlined" />
      <Chip size="small" label="Service" component="a" href="#" clickable variant="outlined" />
      <Chip size="small" label="Sparepart" component="a" href="#" clickable variant="outlined" />
      <Chip size="small" label="Tentang Kami" component="a" href="#" clickable variant="outlined" />
      <Chip size="small" label="Hubungi Kami" component="a" href="#" clickable variant="outlined" />
    </div>
  )
}

export default ChipsLink
