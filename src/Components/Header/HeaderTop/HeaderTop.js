import React, { useState } from 'react'
import style from './HeaderTop.module.css'
import Logo from '../../../assets/Icon/suzuki.svg'
import {IconButton, Drawer, List, ListItem, ListItemText, Divider, Button} from '@material-ui/core'
import {Menu, Clear} from '@material-ui/icons';
import phone from '../../../assets/Icon/phone.svg'
import mySuzuki from '../../../assets/img/my_suzuki.svg'
import Hotline from '../../../assets/img/suzuki_hotline.svg'


function HeaderTop() {

  const [drawer, setDrawer] = useState(false)

  const listSideMenu = [
    'Beranda', 
    'Tentang Kami', 
    'Mobil', 
    'Service', 
    'Sparepart', 
    'Hubungi Kami'
  ]

  const icon = (url) => (
    <img className={style.icon} alt='icon' src={url} />
  )

  const toogleDrawer = () => {
    setDrawer((prevState) => !prevState)
  }

  const sideMenu = () => (
    <div
      className={style.sideMenu}
      role="presentation"
      
    >
      <div style={{textAlign: 'right'}}>
        <IconButton className={style.Menu} onClick={toogleDrawer}>
          <Clear style={{color: 'white'}} />
        </IconButton>
      </div>
      <List>
        {listSideMenu.map(item => (
          <ListItem onClick={toogleDrawer} button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <Button startIcon={icon(phone)} className={style.buttonPhone} variant='outlined' >
            (022) 6204645
          </Button>
        </ListItem>
        <ListItem>
          <img style={{width: '81px'}} src={Hotline} alt='pkoto' />
          <img style={{width: '180px'}} src={mySuzuki} alt='car' />
        </ListItem>
      </List>
      <div style={{marginTop: '120px', textAlign: 'left !important'}}>
        © 2020 Suzuki Indonesia.
        <br/>
        All rights reserved.
      </div>
    </div>
  )

  return (
    <div className={style.HeaderTop}>
      <img src={Logo} alt='logo' />
      <div className={style.HeaderTop__textWrap}>
        <h5>SUZUKI NJS BUAH BATU</h5>
        <p>Nusantara jaya Sentosa</p>
      </div>

      <>
        <IconButton onClick={toogleDrawer} className={style.Menu}>
          <Menu style={{color: 'white'}} />
        </IconButton>
        <Drawer anchor='right' open={drawer} onClose={toogleDrawer}>
          {sideMenu()}
        </Drawer>
      </>
      


    </div>
  )
}

export default HeaderTop
