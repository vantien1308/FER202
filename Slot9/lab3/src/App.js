import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import MenuSection from './components/MenuSection';
import BookTable from './components/BookTable.js';

const App = () => (
  <div className="App">
    <Navbar />
    <HeroCarousel />
    <MenuSection />
    <BookTable />
  </div>
);

export default App;
