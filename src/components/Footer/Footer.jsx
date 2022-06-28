import React from 'react';
import './Footer.css';
// import logo from '../../assets/img/diclo.png';
import { NavLink } from 'react-router-dom';

export default function Footer () {
    return(
        <footer>
            <div className="row">
                <div className="footer footer-center">

                
                    <div className="left-foot">
                        <NavLink to={`/posts`} className=" footer-link">Productos</NavLink>
                    </div>
                    <div className="left-foot">
                        <NavLink to={`/contact`} className="footer-link">Contáctanos</NavLink>
                    </div>
                    <div className="right-foot">
                        <h2>Nuestras redes</h2>
                        <a href="https://www.instagram.com/"><i class="fab fa-instagram-square"></i></a>
                        <a href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a>
                        <a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>

                    </div>
                </div>
                <div className="footer-copyright">
                    <p className="copyright">© Copyright 2022 Gisela Arce - Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}

