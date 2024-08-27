import React, { useState, useEffect } from 'react';
import './App.css';
import ProductsForYou from './components/ProductsForYou'; 
import TopCategories from './components/TopCategories';
import Navigation from './components/Navigation';
import Header from './components/Header';
import LowestPrices from'./components/LowestPrices';
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <LowestPrices />
      <TopCategories />
      <ProductsForYou/>
    </div>
  );
}

export default App;
