import React from 'react'
import FilteredImage from '../../Components/PhotoGridWrapper/FilteredImage/FilteredImage'
import PhotoGridWrapper from '../../Components/PhotoGridWrapper/PhotoGridWrapper'
import FlexWrapper from '../../Components/FlexWrapper/FlexWrapper'
import headlamp from '../../assets/img/car_exterior/headlamp.png'
import frontBumper from '../../assets/img/car_exterior/front_bumper.png'
import lowerFrontBumper from '../../assets/img/car_exterior/front_lowerbumper.png'
import doorMirror from '../../assets/img/car_exterior/door_mirror.png'
import roof from '../../assets/img/car_exterior/roof.png'

function Eksterior() {
  return (
    <div id='eksterior'>
        <PhotoGridWrapper title='Eksterior'>
        <FilteredImage text='Bold LED Headlamp With DRL (AUTO ON)' src={headlamp} />
        <FlexWrapper>
          <FilteredImage text='MUSCULAR CHROME FRONT GRILLE' src={frontBumper} />
          <FilteredImage text='GARNISH FRONT BUMPER LOWER' src={lowerFrontBumper} />
        </FlexWrapper>
        <FlexWrapper>
          <FilteredImage text='OUTSIDE DOOR MIRROR' src={doorMirror} />
          <FilteredImage text='ROOF RAIL' src={roof} />
        </FlexWrapper>
      </PhotoGridWrapper>
    </div>
    
  )
}

export default Eksterior
