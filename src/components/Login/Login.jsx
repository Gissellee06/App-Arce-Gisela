// import React from 'react';
// import { CartContext } from "../../context/CartContext";
// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Login.css";



// // const { createOrder } = require('../../services/post.service');

// export default function Login() {
//     const context = useContext(CartContext);
//     const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });

//     const handleInputChange = (e) => {
//         setBuyer({
//           ...buyer,
//           [e.target.name]: e.target.value,
//         });
//       };


   

// return(
// <div>

//     <div>
//         <Link to="/cart" >
//           <span>Ir al Carrito</span>
//         </Link>
//    </div>

//     <div>
//         <div>Facturación</div>


//         <input
//           type="text"
//           name="name"
//           onChange={handleInputChange}
//           id="name"
//           placeholder=" "
//         />
//         <label htmlFor="name">Nombre</label>

//         <input
//           type="text"
//           name="phone"
//           onChange={handleInputChange}
//           id="tel"
//           placeholder=" "
//         />
//         <label htmlFor="tel">Teléfono</label>

//         <input
//           type="email"
//           name="email"
//           onChange={handleInputChange}
//           id="email"
//           placeholder=" "
//         />
//         <label htmlFor="email">Email</label>

// {/* QUIERO PONER UN ONCLICK PARA "createOrder"  ¿¿??*/}

//     </div>

//     </div> 
// );
// }