/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/logo.png'; 
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className="logo-image" />
                <span className="logo-text">Proyecto Final</span>
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item">
                <p>Inicio</p>
                </li>
                <li className="navbar-item">
                <p>Nosotros</p>
                </li>
                <li className="navbar-item">
                <p>Servicios</p>
                </li>
                <li className="navbar-item">
                <p>Contacto</p>
                </li>
            </ul>
        </nav>
        <Link to="/create">
        <button>Agregar un nuevo usuario</button>
        </Link>
        <Link to="/users">
        <button>Listado de usuarios</button>
        </Link>
    </div>
  );
}

export default Home;
