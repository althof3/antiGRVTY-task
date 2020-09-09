import React from 'react'
import style from './Accordion.module.css'
import Title from '../Title/Title'

function AccordionWrapper(props) {
  return (
    <div className={style.Accordion}>
      <Title color='black'>{props.title}</Title>
      <Title color='black'>{props.secondTitle}</Title>

      {props.children}

    </div>
  )
}

export default AccordionWrapper
