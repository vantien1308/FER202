import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Container className="p-4">
      <h1 className="mb-4 text-center">🛍️ Redux Shopping Cart</h1>
      <ProductList />
      <Cart />
    </Container>
  );
}

export default App;
