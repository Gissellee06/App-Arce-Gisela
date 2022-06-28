import React, { useState }  from 'react';
// import { Link } from "react-router-dom";
import db from '../../firebase/index';
import firebase from 'firebase/app';
import 'firebase/firestore';
import './Contact.css';
import Swal from 'sweetalert2';


export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
    

  const handleSubmit = (e) => {
    e.preventDefault();
    if((name && email && message).trim() === ''){
      Swal.fire({
        icon:'question',
        text:'Debes completar tu consulta'
      });
    }else{
    db.collection('contacts').add({
      name: name,
      email: email,
      message: message,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    }) 
    .then(() => {
      Swal.fire(
        'Gracias por tu Consulta!',
        'Te contactaremos a la brevedad',
        'success');
    })
    .catch((error) => {
      alert(error.message);
    });
    setName("");
    setEmail("");
    setMessage("");
  }
}
    return(
    <div className="container">
              
                  <h1 style={{color:"#8785a2", fontFamily:"cursive"}}>Sobre Nosotros</h1><br></br>
                <div >  
                  <div className="location-uno">    
                      <p className="frase">Sucursal

                       "Moda Inc - Juy"</p>
                      <p className="frase">Centro - Jujuy</p>
                      <p className="frase"> Envíos a todo el País</p>
                  </div> 
                  <div className="location-dos">
                      <p className="frase">Horario de Atención</p>
                      <p className="frase">Lunes a Sábado</p>
                      <p className="frase">9:00 a 18:00hs</p>
                  </div>
                </div>

          <div>
          
              <form className="form" onSubmit={handleSubmit}>
                <h3 className="contacto">Contacto <span>📩</span></h3>
                
                <label htmlFor="name">Nombre</label>
                  <input className="form-contact__input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="Tu nombre"
                  />
                
                  <label htmlFor="email">Email</label>
                  <input
                  className="form-contact__input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    placeholder="Tu E-mail "
                  />
                  
                  <label >Mensaje/Consulta</label>
                  <textarea className="textarea" placeholder="Escribe tu consulta"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}></textarea>
                  <button className="form-button" type="submit" >Enviar</button>
              </form>

              
          </div>


         
    </div> 
    
    
);
}
     