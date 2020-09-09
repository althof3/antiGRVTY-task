import React, { useState } from 'react'
import style from './BottomNav.module.css'
import {Button, Fade, Modal, Backdrop, TextField, InputLabel, Select, MenuItem, FormControl} from '@material-ui/core';
import whatsapp from '../../assets/img/whatsapp.svg'
import Kredit from '../../assets/img/simulasi_kredit.svg'
import CloseIcon from '@material-ui/icons/Close';

function BottomBar() {

  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen((prevState) => !prevState);
  };

  const [mobil, setMobil] = React.useState('XL7');
  const [tipe, setTipe] = useState('ZETA M/T')

  const handleMobil = (event) => {
    setMobil(event.target.value);
  };
  const handleTipe = (event) => {
    setTipe(event.target.value);
  };

  return (
    <div className={style.BottomNav}>
      <Button className={style.Bookingbutton} onClick={handleModal}
        variant="contained" 
        color="primary" 
        disableElevation
      >
        Booking Mobil
      </Button>
      <Button className={style.Whatsappbutton}>
        <img className={style.Whatsappbutton__icon} src={whatsapp} alt='whatsapp' />
      </Button>
      <Button className={style.Kreditbutton}>
        <img className={style.Kreditbutton__icon} src={Kredit} alt='whatsapp' />
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={style.modal}
        open={open}
        onClose={handleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={style.paper}>
            <CloseIcon onClick={handleModal} style={{margin: '10px 0 0 10px', cursor: 'pointer'}} />
            <h4>Booking Mobil</h4>

            <form className={style.form} noValidate autoComplete="off">
              <TextField id="standard-basic" label="NAMA LENGKAP" />
              <TextField id="standard-basic" label="EMAIL" />
              <TextField id="standard-basic" label="NO. HANDPHONE" />

              <FormControl className={style.formControl}>
                <InputLabel id="demo-simple-select-label">MOBIL</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={mobil}
                  onChange={handleMobil}
                >
                  <MenuItem value='XL7'>XL7</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={[style.formControl, style.formTipe].join(' ')}>
                <InputLabel id="demo-simple-select-label">TIPE</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tipe}
                  onChange={handleTipe}
                >
                  <MenuItem value={'ZETA M/T'}>ZETA M/T</MenuItem>
                  <MenuItem value={'ZETA A/T'}>ZETA A/T</MenuItem>
                  <MenuItem value={'BETA M/T'}>BETA M/T</MenuItem>
                  <MenuItem value={'BETA A/T'}>BETA A/T</MenuItem>
                  <MenuItem value={'ALPHA M/T'}>ALPHA M/T</MenuItem>
                  <MenuItem value={'ALPHA A/T'}>ALPHA A/T</MenuItem>
                </Select>
              </FormControl>
            </form>

            <div className={style.flex}>
              <Button className={style.button} onClick={handleModal}
                variant='outlined' 
              >
                Batal</Button>
              <Button className={style.Bookingbutton} onClick={handleModal}
                variant="contained" 
                color="primary" 
              >
                Kirim
              </Button>
            </div>
            
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default BottomBar
