// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const NavBar = () => {
  return (
<div className="App">
      <header className="App-header">
      <ul>
        <li class="item"><a href="#about">About Us</a></li>
        <li class="item"><a href="#contact">Order Food</a></li>
        <li class="item"><a href="#news">Book A Table</a></li>
        <li class="item"><a class="active" href="#home">Home</a></li>
      </ul>
      </header>
    </div>
  );
};

export default NavBar;
