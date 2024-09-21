import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import "./navigationBar.css";

const Header = () => (
  <div className="header">
    <div className="frame-4">
      <div className="logo">
        <div className="text-wrapper-4">COMPANY NAME</div>
      </div>
      <div className="frame-5">
        <div className="div-wrapper">
          <Link to="/"> {/* Link to the home route */}
            <div className="text-wrapper-5">Home</div>
          </Link>
        </div>
        <div className="header-2">
          <Link to="/products"> {/* Link to the products route */}
            <div className="text-wrapper-5">Products</div>
          </Link>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-5">About</div>
        </div>
        <div className="header-3">
        <Link to="/signUp"> {/* Link to the products route */}
          <div className="text-wrapper-6">Sign Up</div>
          </Link>
          <div className="under-line" />
        </div>
      </div>
      <div className="search-component-set-wrapper">
        <div className="search-component-set">
          <div className="frame-6">
            <p className="p">What are you looking for?</p>
            <img className="Component2" src="/assets/Component2.svg" alt="Search Icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
