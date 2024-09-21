//frontend/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navigationBar';
import TopHeader from './components/TopHeader';
import Home from './pages/Home';
import Products from './pages/Products';
import Admin from './pages/Admin';
import SignUp from './pages/SignUp'; 
import Footer from "./components/footer";

function App() {
  const [isSpecialOffer, setIsSpecialOffer] = useState(true);  // Condition to show TopHeader

  return (
    <Router>
      <div className="App">
        {isSpecialOffer && <TopHeader />}  
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>

    </Router>

  );
}

export default App;
