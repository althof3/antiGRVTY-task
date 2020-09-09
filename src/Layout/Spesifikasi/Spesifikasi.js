import React, { useState } from 'react'
// import style from './Spesifikasi.module.css'
import AccordionWrapper from '../../Components/AccordionWrapper/AccordionWrapper'
import AccordionItem from '../../Components/AccordionWrapper/AccordionItem/AccordionItem';
import { List} from '@material-ui/core';
import CustomListItem from '../../Components/AccordionWrapper/ListItem/ListItem';

function Spesifikasi() {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const dimensi = [
    {
      primary: 'Panjang Keseluruhan', 
      secondary: '4,450 mm'
    },
    {
      primary: 'Lebar Keseluruhan', 
      secondary: '1,775 mm'
    },
    {
      primary: 'Tinggi Keseluruhan', 
      secondary: '1,710 mm'
    },
    {
      primary: 'Jarak Poros Roda', 
      secondary: '2,740 mm'
    },
    {
      primary: 'Jarak Pijak Depan', 
      secondary: '1,515 mm'
    },
    {
      primary:"Jarak Pijak Belakang",
      secondary:'1,530 mm'
    },
    {
      primary:"Jarak Terendah",
      secondary:'5,1'
    },
    {
      primary:"Radius Putar Minimum",
      secondary:'200 mm'
    },
  ]

  const accordionItems = [
    {header:'DIMENSI', data: dimensi},
    {header:'MESIN', data: dimensi},
    {header:'TRANSMISI', data: dimensi},
    {header:'BERAT', data: dimensi},
    {header:'RANGKA', data: dimensi},
    {header:'KAPASITAS', data: dimensi}
  ]

  return (
    <AccordionWrapper title='Spesifikasi'>
      {accordionItems.map((item, id) => (
          <AccordionItem 
            key={id}
            expanded={expanded === `panel${id}`}
            onChange={handleChange(`panel${id}`)}
            header={item.header}
          >
            <List>
              {item.data.map((dimensi, id) => (
                <CustomListItem
                  key={id}
                  primary={dimensi.primary} 
                  secondary={dimensi.secondary} 
                />
              ))}
            </List>
          </AccordionItem>
      ))}
    </AccordionWrapper>
  )
}

export default Spesifikasi
