import React from 'react'
import { ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core'
import style from './ListItem.module.css'

function CustomListItem(props) {
  return (
    <ListItem className={style.ItemText}>
      <ListItemText
        primary={props.primary}
      />
      <ListItemSecondaryAction>
        {props.secondary}
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default CustomListItem
