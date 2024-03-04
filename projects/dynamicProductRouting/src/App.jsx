import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Card from './components/Card';
import Nav from './components/Nav';
import ProductPage from './components/ProductPage';

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
      <Route path="/" element={<Card/>} />
      <Route path="/:id" element={<ProductPage/>} />
      </Routes>
    </div>
  );
}

export default App;
