import React from "react";
import { Link } from 'react-router-dom';
import '../App.scss';

const Header = () => {
    return (
        <header className="header">
          <h1>Quote App</h1>
          <nav>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Acerca de</a></li>
              <li><a href="#carousel">Galeria</a></li>
              <li><a href="#contact">Contacto</a></li>
              <Link to="/login" className="login">Login</Link>
            </ul>

          </nav>
        </header>
      );
};

export default Header;