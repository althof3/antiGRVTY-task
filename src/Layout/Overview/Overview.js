import React from 'react'
import ImageCarousel from './ImageCarousel/ImageCarousel'
import Brocure from './Brocure/Brocure'

function Section() {
  return (
    <div id='home'>
      {/* Image Caroussel */}
      <ImageCarousel />
      
      {/* Brosur */}
      <Brocure />
    </div>
  )
}

export default Section
