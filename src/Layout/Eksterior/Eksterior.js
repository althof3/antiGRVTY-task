import React from 'react'
import FilteredImage from '../../Components/PhotoGridWrapper/FilteredImage/FilteredImage'
import PhotoGridWrapper from '../../Components/PhotoGridWrapper/PhotoGridWrapper'
import headlamp from '../../assets/img/car_exterior/headlamp.png'
import frontBumper from '../../assets/img/car_exterior/front_bumper.png'
import lowerFrontBumper from '../../assets/img/car_exterior/front_lowerbumper.png'
import doorMirror from '../../assets/img/car_exterior/door_mirror.png'
import roof from '../../assets/img/car_exterior/roof.png'
import { Grid} from '@material-ui/core'

function Eksterior() {

  const gridElem = [
    {text:'Bold LED Headlamp With DRL (AUTO ON)', src:headlamp, width:12},
    {text:'MUSCULAR CHROME FRONT GRILLE', src:frontBumper, width:6},
    {text:'GARNISH FRONT BUMPER LOWER', src:lowerFrontBumper, width:6},
    {text:'OUTSIDE DOOR MIRROR', src:doorMirror, width:6},
    {text:'ROOF RAIL', src:roof, width:6},
  ]

  return (
    <PhotoGridWrapper title='Eksterior'>
      <Grid container>
        {gridElem.map(item => (
          <Grid key={item.text} item xs={item.width}>
            <FilteredImage text={item.text} src={item.src} />
          </Grid>
        ))}
      </Grid>
    </PhotoGridWrapper>
  )
}

export default Eksterior
