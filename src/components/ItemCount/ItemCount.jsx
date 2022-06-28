
import React from 'react';
import './ItemCount.css';
import Button from '@material-ui/core/Button';

import { useNavigate } from 'react-router-dom';
export default function ItemCount({number, decrement, increment, onAdd, finishBuy}) {
    

    const navigate = useNavigate();
    
        return(
            <div className="count">
            <p className="count-number"> {number}</p>     
            <button className="button-count" onClick={decrement}> - </button>
            <button className="button-count" onClick={increment}> + </button> <br></br>

            <div>
            {
        number > 0 && 
            <Button onClick={onAdd} size="small" color="primary">
            Agregar al carrito</Button> 
            }
            </div>

            <div>
                {
            finishBuy ? (
                <Button onClick={() => navigate.push('/cart')}>Finalizar Compra</Button>
                
            ): null
            
           
            }</div>
             </div>
        )
         
}

