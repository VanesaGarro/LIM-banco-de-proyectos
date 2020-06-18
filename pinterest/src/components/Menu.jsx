import React from 'react';
// import { Link } from 'react-router-dom';
import './Menu.css';
import PropTypes from 'prop-types';
import logo from '../assets/images/pinterest.svg';

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
          search();
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
Menu.propTypes = {
  search: PropTypes.func.isRequired,
  getCategory: PropTypes.func.isRequired,
  setcategory: PropTypes.func.isRequired,
};
export default Menu;
