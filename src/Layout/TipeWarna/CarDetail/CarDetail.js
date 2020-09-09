import React from 'react'
import style from './CarDetail.module.css'

function CarDetail(props) {

  return (
    <div>
      <img className={style.img} src={props.src} alt='detail' />
      <p className={style.text}>
        {String(props.text).toUpperCase()}
      </p>
    </div>
  )
}

export default CarDetail
