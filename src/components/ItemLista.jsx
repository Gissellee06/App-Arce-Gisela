import React from 'react';

import { Box } from '@mui/material';
import ItemList from './ItemList';

const ItemLista = ({ items }) => {
  return (
    <Box container sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 10 }}>      
      {
        items.map( items => (
          <ItemList key={ items.id } items={ items } />
        ))
      }
    </Box>
  )
}

export default ItemLista