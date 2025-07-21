import React from 'react';
import { useSelector } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap';

function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <Container className="my-4">
      <h3>🛒 My Cart</h3>
      <ListGroup>
        {cart.map((item) => (
          <ListGroup.Item key={item.id}>
            {item.name} - ${item.price}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Cart;
