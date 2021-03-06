import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
// import PropTypes from 'prop-types';

const Menu = (
) => (
    <ul className="nav-header">
    <li>

      <p className="title-header">
        <img src={burger} alt="logo" className="logo-header" />
        <span className="title-header initials-header">B</span>
        urger
        {' '}
        <span className="title-header initials-header">Q</span>
        ueen
      </p>
    </li>
    <Link to="/Home">
      <li className="li-header" id="productos">Productos</li>
    </Link>
    <Link to="/OrdersKitchen">
      <li className="li-header" id="cocina">Cocina </li>
    </Link>
    <Link to="/OrdersKitchen">
      <li className="li-header" id="mesero">Mesero </li>
    </Link>
    </ul>
);

export default Menu;
