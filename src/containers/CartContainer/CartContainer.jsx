/*import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCart from '../../components/ItemCart/ItemCart';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Cart.css';
import Swal from 'sweetalert2';

const { createOrder } = require('../../services/post.service');



export default function CartContainer() {
    const{ cart, clear } = useContext(CartContext);
    let total = 0;

    for(let i =0; i< cart.length; i++) {
        console.log(cart);
        total = total + cart[i].items.price * cart[i].quantity;
    }

    const [buyer, setBuyer] = useState(
        { name: "", 
        phone: "", 
        email: "" });

        const {name, phone, email} = buyer;
        
       
    const handleInputChange = (e) => {
        setBuyer({
          ...buyer,
          [e.target.name]: e.target.value,
        });
      };   

      const handleOnSubmit = (e) => {
        e.preventDefault();
        if ((name && phone && email).trim() === ''){
        //    return 
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes completar con los datos requeridos',
          }); 
        }else{
        createOrder(buyer, cart, total);
        Swal.fire({
            
            icon: 'success',
            title: 'Tu pedido se ha realizado con éxito',
            showConfirmButton: false,
            // timer: 2000,
             
          })    
        
        }
           
      };  
      

         

    return(
        <div className="container">
            <h2 style={{color:"#8785a2", fontFamily:"cursive"}}>Hola desde Cart ...este es tu carrito</h2>
            <div>
                {cart.lenght === 0 ? (
                    alert("Disculpa, pero no has seleccionado ningún producto")
                ) : (
                    cart.map((item, key) => 
                    <ItemCart key={key} {...item}/>)
                    )}
                    
                    <div>
                        <h3 style={{color:"rgba(63, 162, 159, 0.878)", fontFamily:"arial", margin:"6px", textAlign:"center"}}>TOTAL A PAGAR $ {total}</h3>
                    </div>
                    <Button onClick={() =>clear()} style={{  border: "solid",  color:"#8785a2", margin: "10px"}}>Vaciar Carrito</Button> 

                    <Link to="/posts" style={{textDecoration:"none"}}>

                    <Button style={{  border: "solid",  color:"#8785a2", textDecoration: "none"}}>
                        Volver a la lista
                    </Button>
                    </Link> 

            </div>

            <div>
            
                <form className="form-buyer" onSubmit={handleOnSubmit} type="submit">
                <label htmlFor="name">Nombre</label>
                    <input className="form-buyer__input"
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    id="name"
                    placeholder="Nombre "
                    />
                    
                    
                    <label htmlFor="tel">Teléfono</label>
                    <input className="form-buyer__input"
                    type="text"
                    name="phone"
                    onChange={handleInputChange}
                    id="tel"
                    placeholder="Teléfono"
                    />
                    
                    <label htmlFor="email">Email</label>
                    <input className="form-buyer__input"
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    id="email"
                    placeholder="Email"
                    />
                    <button className="button-cart"  type="submit">
                Confirmar Pedido
                </button>
                </form>
              

               
                
                 
            </div>


        </div>

    )
} */