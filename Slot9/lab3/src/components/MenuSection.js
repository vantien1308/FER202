import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';

const pizzas = [
  {
    id: 1,
    name: 'Margherita Pizza',
    originalPrice: '$40.00',
    discountPrice: '$24.00',
    image: '/images/menu1.jpg',
    badge: 'SALE',
  },
  {
    id: 2,
    name: 'Mushroom Pizza',
    originalPrice: '',
    discountPrice: '$25.00',
    image: '/images/menu2.jpg',
  },
  {
    id: 3,
    name: 'Hawaiian Pizza',
    originalPrice: '',
    discountPrice: '$30.00',
    image: '/images/menu3.jpg',
    badge: 'NEW',
  },
  {
    id: 4,
    name: 'Pesto Pizza',
    originalPrice: '$50.00',
    discountPrice: '$30.00',
    image: '/images/menu4.jpg',
    badge: 'SALE',
  },
];

function MenuSection() {
  return (
   <div className="menu-section">
  <Container className="menu-container">
    <h2 className="menu-title">Our Menu</h2>
    <Row className="justify-content-center">
      {pizzas.map((pizza) => (
        <Col key={pizza.id} xs={12} sm={6} md={6} lg={3} className="pizza-col">
          <Card className="pizza-card">
            <div style={{ position: 'relative' }}>
              {pizza.badge && (
                <div className="pizza-badge">{pizza.badge}</div>
              )}
              <Card.Img className="pizza-img" variant="top" src={pizza.image} alt={pizza.name} />
            </div>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title className="pizza-title">{pizza.name}</Card.Title>
              <Card.Text className="pizza-price">
                {pizza.originalPrice ? (
                  <>
                    <span className="pizza-price-original">{pizza.originalPrice}</span>
                    <span className="pizza-price-discount">{pizza.discountPrice}</span>
                  </>
                ) : (
                  <span className="pizza-price-normal">{pizza.discountPrice}</span>
                )}
              </Card.Text>
              <Button className="pizza-button">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</div>

  );
}

export default MenuSection;