 import React, { useContext } from 'react';
 import { Link } from "react-router-dom";
// Icono carrito
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
// Importando el CSS
import './CartWidget.css'
import { CartContext } from '../../context/CartContext';

export default function CartWidget(){

    const { cart, cantTotal } = useContext(CartContext);

    let cantCar = cart.map(prod => prod.quantity);
    
    let fullCar = cantCar.reduce((counterBefore, counterAfter) => {
        return counterBefore + counterAfter
    
    }, 0);




    return(
        <div>
            { cart.length === 0 ?
        <Link to= '/cart'>
        
            <ShoppingCartOutlinedIcon  id="shopping-cart" style={{width:"30px",  height:"60px", color:"#845460"}}/> 
        </ Link>
        :  
        <Link to='/cart'>
             <ShoppingCartOutlinedIcon  id="shopping-cart" style={{width:"30px",  height:"50px"}}/> 
             { cantTotal ? <span>{cantTotal}</span> :null}
             <div>
                 {fullCar}
             </div>
        </Link>   
        }      
        </div>
    
    )
}

