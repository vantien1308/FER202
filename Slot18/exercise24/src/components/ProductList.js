import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateCart, deleteFromCart } from '../redux/cartSlice';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const product = {
  id: '123456',
  name: 'Example Product',
  price: 9.99,
  description: 'This is an example product.',
  catalogs: ['catalog1', 'catalog2']

  
};

function ProductList() {
  const dispatch = useDispatch();

  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
              <Card.Text><strong>Catalogs:</strong> {product.catalogs.join(', ')}</Card.Text>
              <Button variant="success" onClick={() => dispatch(addToCart(product))} className="me-2">Add to Cart</Button>
              <Button variant="warning" onClick={() => dispatch(updateCart({ ...product, price: 10.99 }))} className="me-2">Update to Cart</Button>
              <Button variant="danger" onClick={() => dispatch(deleteFromCart(product.id))}>Delete from Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductList;
