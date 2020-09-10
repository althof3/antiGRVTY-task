import React from 'react'
import style from './tabSection.module.css'
import '@material-ui/core'
import { AppBar, Tabs, Tab } from '@material-ui/core'

function TabSection() {

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const jumpTo = (top) => {
    document.getElementById('app').scrollTo(0,top)
  }

  const tabElem = [
    {label:'Overview',top: 0},
    {label:'Tipe & Warna',top: 676},
    {label:'Eksterior',top: 1106},
    {label:'Interior',top: 1863},
    {label:'Spesifikasi',top: 2620},
    {label:'Daftar Harga',top: 3100}
  ]
  return (
    <div className={style.TabSection}>
      <div className={style.TabSection__carType}>XL 7</div>
      
      <AppBar position="static" className={style.TabSection__AppBar} color='default'>
        <Tabs
          className={style.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs example"
        >
          {tabElem.map(tab => (
            <Tab key={tab.top} label={tab.label} onClick={() => jumpTo(tab.top)} />
          ))}
        </Tabs>
      </AppBar>
      
    </div>
  )
}

export default TabSection
