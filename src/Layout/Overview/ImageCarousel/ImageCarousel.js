import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../../assets/img/hero.svg'
import prev from '../../../assets/Icon/prev.svg'
import next from '../../../assets/Icon/next.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect}
      nextIcon ={
        <img
          src={next}
          alt="First slide"
        />
      }
      prevIcon={
        <img
          src={prev}
          alt="First slide"
        />
      }
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    
  );
}

export default ImageCarousel
