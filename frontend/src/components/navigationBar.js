//frontend/src/components/navigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navigationbar">
      <div className="navigationbar-brand">
        <Link to="/">Perfume Store</Link>
      </div>
      <ul className="navigationbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
