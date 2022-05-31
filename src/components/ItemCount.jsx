import React, {useState} from "react";
import { Box, Button, Fab, Typography } from "@mui/material";

export default function ItemCount ({stock, initial, onAdd}) {
    const[ItemCount, setItemCount]= useState(initial)
    function addItem() {
    if (ItemCount < stock) {
      setItemCount(Number(ItemCount) + 1);
    }
  }

    const removeItem = () => {
        if (ItemCount > 0) {
            setItemCount(Number (ItemCount) - 1);
        }
    }

    return (
        <Box width={190} sx={{ marginX: 'auto'}} >
            <Box
            sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
              }}
            >
              <Fab
                disabled={ItemCount === 0 }
                size='small'
                variant='primary'
                onClick={ removeItem }
              >
                -
              </Fab>
              <Typography variant="body1" sx={{ userSelect: 'none' }}>
                {ItemCount }
              </Typography>
              <Fab
                disabled={ ItemCount === stock }
                size='small'
                variant='primary'
                onClick={ addItem }
              >
                +
              </Fab>

        </Box>

        <Box>
        <Button
          disabled={ ItemCount === 0 }
          variant='primary'
          size='small'
          onClick={ () => onAdd(ItemCount) }
        >
          Agregar al carrito
        </Button>
      </Box>
    </Box>
    )
}






