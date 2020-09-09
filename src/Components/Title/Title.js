import React from 'react'
import style from './Title.module.css'

const color = {
  white: '#ffffff',
  black: '#000000'
}

function Title(props) {
  return (
    <h5 className={style.title} style={{color: color[props.color]}}>
      {props.children}
    </h5>
  )
}

export default Title
