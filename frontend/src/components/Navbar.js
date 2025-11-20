import React from 'react';
import HarajLogo from '../assets/haraj_petroly.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={HarajLogo} alt="Haraj Petroly" className="navbar-logo" />
      <ul className="navbar-links">
        <li>Home</li>
        <li>Add Product</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}
