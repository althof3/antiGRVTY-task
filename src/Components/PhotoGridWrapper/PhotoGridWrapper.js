import React from 'react'
import style from './PhotoGrid.module.css'
import { Button } from '@material-ui/core'
import Title from '../Title/Title'

function PhotoGridWrapper(props) {
  return (
    <div className={style.PhotoWrapper}>
      <Title>
        {props.title}
      </Title>

      {props.children}

      <Button className={style.readMore} variant="outlined">
        Lihat Semua {props.title}
      </Button>
    </div>
  )
}

export default PhotoGridWrapper
