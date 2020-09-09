import React from 'react'
import style from './AccordionItem.module.css'
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

function AccordionItem(props) {
  return (
    <Accordion className={style.AccordionItem} expanded={props.expanded} onChange={props.onChange}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
      >
        <Typography className={style.heading} >{props.header}</Typography>
      </AccordionSummary>
      <AccordionDetails style={{flexDirection: 'column'}}>
        
          {props.children}
        
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionItem
