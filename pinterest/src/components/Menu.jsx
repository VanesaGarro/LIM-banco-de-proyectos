import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logo from '../assets/images/pinterest.svg';
// import PropTypes from 'prop-types';

const Menu = (
) => (
  <nav className="nav-header">

    <li>
      <img src={logo} alt="logo" className="logo-header" />
    </li>
    <li>
      <button type="submit" className="button-inicio">
        {' '}
        Inicio
      </button>
    </li>

    <div className="search">
      <form action="#">
        <input
          type="text"
          placeholder="Buscar"
          name="search"
        />
      </form>
    </div>

  </nav>
);

export default Menu;
