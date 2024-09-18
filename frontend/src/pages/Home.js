//frontend/src/pages/Home.js
import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div className="Home">
      <h1>Welcome to the Perfume Store</h1>
      <p>Discover our exclusive collection of perfumes.</p>
      <a href="/products" className="cta-button">Shop Now</a>
    </div>
  );
};

export default Home;
