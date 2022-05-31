import React from 'react';
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import ItemList from './ItemList';
import mockItems from '../mocks/ItemsMock'

export default function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockItems)
    }, 2000);
  });

  useEffect(() => {
    fetchItems
      .then(res => setItems(res))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      {
        isLoading ? 
        (
          <Box
            sx={{
              marginTop: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress
              variant="indeterminate"
              size={40}
              thickness={4}
              value={100}
            />
          </Box>
        )
        : (
            <ItemList items={items} />
        )
      }
    </>
  )
}