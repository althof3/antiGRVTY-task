import React from 'react'
import filter from '../../../assets/img/filter.png'
import style from './FilteredImage.module.css'

function FilteredImage(props) {
  return (
    <div className={style.FilteredImage}>
      <p className={style.FilteredImage__caption}>{props.text}</p>
      <img className={style.FilteredImage__filter} alt='filter' src={filter} />
      <img alt='img' style={{width: '100%'}} src={props.src} />
    </div>
  )
}

export default FilteredImage
