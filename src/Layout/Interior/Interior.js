import React from 'react'
import PhotoGridWrapper from '../../Components/PhotoGridWrapper/PhotoGridWrapper'
import FilteredImage from '../../Components/PhotoGridWrapper/FilteredImage/FilteredImage'
import FlexWrapper from '../../Components/FlexWrapper/FlexWrapper'

import interior from '../../assets/img/car_interior/interior.png'
import acDigital from '../../assets/img/car_interior/ac_digital.png'
import engineButton from '../../assets/img/car_interior/engine_button.png'
import midDisplay from '../../assets/img/car_interior/mid_display.png'
import armRest from '../../assets/img/car_interior/arm_rest.png'


function Interior() {
  return (
    <PhotoGridWrapper title='Interior'>
      <FilteredImage text='Extra Large Space for Seven' src={interior} />
      <FlexWrapper>
        <FilteredImage text='AC DIGITAL' src={acDigital} />
        <FilteredImage text='ENGINE START STOP BUTTON (ALPHA & BETA)' src={engineButton} />
      </FlexWrapper>
      <FlexWrapper>
        <FilteredImage text='STUNNING MID DISPLAY COLOR DOT' src={midDisplay} />
        <FilteredImage text='1ST & 2ND ROW CENTER ARM REST' src={armRest} />
      </FlexWrapper>
    </PhotoGridWrapper>
  )
}

export default Interior
