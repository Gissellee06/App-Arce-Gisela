import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import ItemCountContainer from '../../containers/ItemCountContainer/ItemCountContainer';
import{ CartContext } from '../../context/CartContext';
// import './ItemDetail.css';
import { useNavigate } from 'react-router-dom';
import './ItemDetail.css';

export default function ItemDetail({item}) {
    //Estados
    const[quantityItemAdd, setQuantityAdd] = useState([]);
    const initial = 1;
    const[finishBuy, setFinishBuy] = useState(false);
    
    const{cart, addItem} = useContext(CartContext);

    const addToCart = () => {
        item.stock -= quantityItemAdd;
        setQuantityAdd(initial);

        addItem(item, quantityItemAdd);
    }

    const navigate = useNavigate();



useEffect(() => {
    setQuantityAdd(quantityItemAdd);
}, [cart]);


    return( 
    
       <div className="container"><h2 style={{color:"#8785a2", fontFamily:"cursive"}}>Descripción del producto</h2>
            <div style={{display: "flex", flexDirection:"column", justifyContent: 'center', alignItems:"center",  width:500, border:"solid", color:"white", margin:"20px 20px", padding:"2.4em", marginRight:"1em", textAlign:"center"}}>
                        
                <div  key={item.id}>  
                <img src={item.image} alt={item.image} style={{width:"250px", height:"200px", border:"solid 1px", color:"#8785a2", borderRadius:"3px"}}></img>
                <p>Categoría: {item.category}</p> <br></br> 
                <p>{item.title}</p>
                <p>{item.subtitle}</p> <br></br>
                
                <p>Detalles: {item.description}</p>  <br></br>                  
                <p>Precio:$ {item.price}</p><br></br>
                </div>

            <ItemCountContainer item ={item} 
            stock={item.stock} value={quantityItemAdd} setQuantityAdd={setQuantityAdd} setFinishBuy={setFinishBuy}/>

          

             { 
             finishBuy ? (
                <Button onClick={() => navigate.push('/cart')}>Finalizar Compra</Button>
               
            ): null
            }

               
            </div>
            
            
           
        </div>
        
                
            )
}





