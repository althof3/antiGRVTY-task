import React from 'react'

function FlexWrapper(props) {
  return (
    <div style={{display: 'flex'}}>
      {props.children}
    </div>
  )
}

export default FlexWrapper
