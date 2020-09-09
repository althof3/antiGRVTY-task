import React, { useState } from 'react'
import style from './TipeWarna.module.css'
import { AppBar, Tabs, Tab, IconButton } from '@material-ui/core'
import Orange from '../../assets/img/car_orange.png'
import White from '../../assets/img/car_white.png'
import Black from '../../assets/img/car_black.png'
import Gold from '../../assets/img/car_gold.png'
import CarDetail from './CarDetail/CarDetail';
import Title from '../../Components/Title/Title'


function TipeWarna() {
  const color = [
    {class:style.orange, name: 'Orange', url: Orange}, 
    {class:style.gold, name: 'Gold', url: Gold}, 
    {class: style.black, name: 'Black', url: Black}, 
    {class: style.white, name: 'White', url: White}
  ]
  const [value, setValue] = useState(0);
  const [text, setText] = useState('Orange')
  const [img, setImg] = useState(Orange)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };
  const handleColor = (e) => {
    const name = color[e.target.id].name
    const url = color[e.target.id].url
    setText(name)
    setImg(url)
  }
  
  return (
    <div className={style.TipeWarna} id="tipewarna">
      <Title color='black'>Tipe & Warna</Title>
      <AppBar position="static" className={style.TipeWarna__AppBar} color='default'>
        <Tabs
          className={style.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          scrollButtons="off"
          aria-label="scrollable auto tabs example"
        >
          <Tab label='XL7 Alpha' />
          <Tab label='XL7 Beta' />
          <Tab label='VL7 Zeta' />
        </Tabs>
      </AppBar>
      <CarDetail src={img} text={`RISING ${text} + BLACK`} />
      <div className={style.iconWrapper}>
        {
          color.map((color, id) => {
            return <IconButton 
              key={id}
              id={id}
              onClick={handleColor}
              className={color.class} 
            />
          })
        }
      </div>
    </div>
  )
}

export default TipeWarna
