import React from 'react'
import style from './tabSection.module.css'
import '@material-ui/core'
import { AppBar, Tabs, Tab } from '@material-ui/core'

function TabSection() {

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          <Tab label='Overview' href='#home' />
          <Tab label='Tipe & Warna' href='#tipewarna' />
          <Tab label='Eksterior' href='#eksterior' />
          <Tab label='Interior' href='#interior' />
          <Tab label='Spesifikasi' href='#spesifikasi' />
          <Tab label='Daftar Harga' href='#daftarharga' />
        </Tabs>
      </AppBar>
      
    </div>
  )
}

export default TabSection
