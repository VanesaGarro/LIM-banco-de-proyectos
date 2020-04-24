import React from 'react';
// import { Link } from 'react-router-dom';
import './Menu.css';
import logo from '../assets/images/pinterest.svg';
// import PropTypes from 'prop-types';

const Menu = ({ search, getCategory, category, getCollection }) => (
  <nav className="nav-header">

    <li>
      <img src={logo} alt="logo" className="logo-header" />
    </li>
    <li>
      <button type="submit" className="button-inicio" onClick={getCollection}>
        {' '}
        Inicio
      </button>
    </li>

    <div className="search">
      <form onSubmit={(event) => {
        event.preventDefault();
        search();
      }}
      >
        <input
          type="text"
          placeholder="Buscar"
          name="search"
          value={category}
          onChange={getCategory}
        />
      </form>
    </div>

  </nav>
);

export default Menu;
