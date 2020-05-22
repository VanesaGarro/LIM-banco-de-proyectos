import React from 'react';
// import { Link } from 'react-router-dom';
import './Menu.css';
import logo from '../assets/images/pinterest.svg';
// import PropTypes from 'prop-types';

const Menu = ({
  search, getCategory, setcategory,
}) => (
  <nav className="nav-header">

    <li>
      <img src={logo} alt="logo" className="logo-header" />
    </li>
    <li>
      <button
        type="submit"
        className="button-inicio"
        onClick={() => {
          setcategory('aesthetic');
          document.getElementById('searchbar').value = '';
        }}
      >
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
          onKeyPress={getCategory}
          id="searchbar"
        />
      </form>
    </div>

  </nav>
);

export default Menu;
