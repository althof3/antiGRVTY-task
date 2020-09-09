import React from 'react'
import PhotoGridWrapper from '../../Components/PhotoGridWrapper/PhotoGridWrapper'
import FilteredImage from '../../Components/PhotoGridWrapper/FilteredImage/FilteredImage'
import interior from '../../assets/img/car_interior/interior.png'
import acDigital from '../../assets/img/car_interior/ac_digital.png'
import engineButton from '../../assets/img/car_interior/engine_button.png'
import midDisplay from '../../assets/img/car_interior/mid_display.png'
import armRest from '../../assets/img/car_interior/arm_rest.png'
import { Grid } from '@material-ui/core'


function Interior() {

  const gridElem = [
    {text:'Extra Large Space for Seven', src:interior, width:12},
    {text:'AC DIGITAL', src:acDigital, width:6},
    {text:'ENGINE START STOP BUTTON (ALPHA & BETA)', src:engineButton, width:6},
    {text:'STUNNING MID DISPLAY COLOR DOT', src:midDisplay, width:6},
    {text:'1ST & 2ND ROW CENTER ARM REST', src:armRest, width:6},
  ]

  return (
    <div id='interior'>
      <PhotoGridWrapper title='Interior'>
        <Grid container>
          {gridElem.map(item => (
            <Grid item xs={item.width}>
              <FilteredImage text={item.text} src={item.src} />
            </Grid>
          ))}
        </Grid>
      </PhotoGridWrapper>
    </div>
    
  )
}

export default Interior
