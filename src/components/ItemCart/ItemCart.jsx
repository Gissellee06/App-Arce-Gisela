import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const ItemCart = ({ items, quantity }) => {
    const { removeItem } = useContext(CartContext);

    return(
        <div>
            
            <div className="show-products">
                
                <p className="items-bougth">Producto: {items.title}</p>
                <img src={items.image} style={{ width:"220px", textAlign:"center"}}></img>
                <p className="items-bougth">Cantidad: {quantity}</p>
                <p className="items-bougth">Precio $ {items.price}</p>
                
                <button   onClick={() => removeItem(items.id)} style={{ color:"#ba135d", padding:"8px", border:"#ba135d solid 1px", borderRadius:"3px", backgroundColor:"floralwhite", alignItems:"center", marginBottom:"4px", fontSize:'15px'}}> Eliminar producto</button>
            </div>           

        </div>
    )
}
export default ItemCart;