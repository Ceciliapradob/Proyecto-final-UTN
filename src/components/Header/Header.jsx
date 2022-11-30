import React from 'react';
import './Header.css'
import Instagram from '../../assets/icono-instagram.png'
import Facebook from '../../assets/icono-facebook.png'

const Header = () => {
    return (
        <>
            <header className="contenedor-navegacion">
                <nav className="navegacion">
                   <h1 className="titulo">Cecilia Prado</h1>
                    <a href="#sobremi">Sobre mi</a>
                    <a href="#tecnologia">Tecnologías que manejo</a>
                    <a href="#contacto">Contacto</a>
                    
                </nav>
                <figure className="icono">
                    <a href="https://www.instagram.com/cecilinn_/" target="_blank"><img src={Instagram} alt /></a>
                    <a href="https://www.facebook.com/profile.php?id=100065123491685" target="_blank"><img src={Facebook} className="face" alt /></a>
                </figure>
            </header>
        </>
    )
}

export default Header 