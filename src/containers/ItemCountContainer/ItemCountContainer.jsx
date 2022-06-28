
import React, { useState, useEffect, useContext } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

export default function ItemCountContainer({item, setQuantityAdd, setFinishBuy }){

    const[number, setNumber] = useState(0);
    
    const[itemAdd, setItemAdd] = useState(false);
   
    const{addItem} = useContext(CartContext);


    useEffect(() => {
        
    }, [number, itemAdd]);


    function onIncrement() {
        if(number < 5){
          setNumber(number + 1);  
        }else{
            alert('No hay más stock')
        }
        
    }

    function onDecrement() {
        if(number > 1){
         setNumber(number - 1);   
        }else{
            alert('Debes agregar un item')
        }
               
    }

    function onAdd() {
        setItemAdd(true)
        addItem(item, number)
        setFinishBuy(true);
    }
    
           
        return(
            <div>
                
                <ItemCount number={number} increment={onIncrement} decrement={onDecrement} onAdd={onAdd} itemAdded={setItemAdd} />
                
                  
            </div>
        )
}

