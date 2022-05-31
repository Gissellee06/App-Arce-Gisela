
import React from 'react';
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import ItemCount from "./ItemCount";

export default function ItemDetail({ items }) {
  
  const onAdd = (count) => {
    if (count > 0) {
      console.log('Agregado al carrito!');
      alert('Agregado al carrito!');
    } else {
      console.log('Error al agregar al carrito: la cantidad no puede ser 0')
      alert('Error al agregar al carrito: la cantidad no puede ser 0')
    }
  }

  const { title, description, pictureUrl, price, stock } = items

  return (

    <Box 
      sx={{
        width: '100%',
        backgroundColor: grey[800],
        borderRadius: '20px',
        padding: '20px',
        display: 'flex',
        gap: 2,
        height: {
          xs: 'auto',
          md: '500px'
        },
        flexDirection: {
          xs: 'column',
          md: 'row'
        }
      }}
    >
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: {xs: '100%', md:'50%'},
          height: {xs: '280px', sm: '420px', md: 'auto'},
          overflow: 'hidden',
          borderRadius: '20px' 
        }}
      >
        <img src={pictureUrl} alt={title} sx={{flexShrink: 1, minWidth: '100%', minHeight: 'auto', objectFit: 'cover' }} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: {xs: '100%', md: '50%'},
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 2,
          maxWidth: {xs: 'auto', md: '400px'},
          margin: 'auto'
        }}
      >

        <Typography variant='h4'>{ title }</Typography>
        <Typography variant='body1'>{ description }</Typography>
        <Typography variant='h4'>$ { price }</Typography>

        <ItemCount stock={ stock } initial={ 1 } onAdd={ onAdd } />

      </Box>
    </Box>
  )
}