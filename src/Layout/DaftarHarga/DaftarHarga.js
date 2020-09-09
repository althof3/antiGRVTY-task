import React from 'react'
import AccordionWrapper from '../../Components/AccordionWrapper/AccordionWrapper'
import style from './DaftarHarga.module.css'
import { Button } from '@material-ui/core'

function DaftarHarga() {

  const accordionItems = [
    {type: 'XL7 ZETA M/T', price: 'Rp 232.000.000'},
    {type: 'XL7 ZETA A/T', price: 'Rp 242.500.000'},
    {type: 'XL7 BETA M/T', price: 'Rp 248.500.000'},
    {type: 'XL7 BETA A/T', price: 'Rp 259.000.000'},
    {type: 'XL7 ALPHA M/T', price: 'Rp 258.500.000'},
    {type: 'XL7 ALPHA A/T', price: 'Rp 269.000.000'}
  ]

  return (
    <AccordionWrapper title='Daftar Harga' secondTitle='XL 7' >
      {accordionItems.map(item => (
        <div key={item.type} className={style.cardPrice}>
          <p>{item.type}</p>
          <p>{item.price}</p>
        </div>
      ))}

      <Button className={style.button} variant='outlined' >Lihat Semua Harga Mobil</Button>
    </AccordionWrapper>
  )
}

export default DaftarHarga
