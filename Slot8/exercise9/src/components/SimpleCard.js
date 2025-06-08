import React from 'react';
import { Container, Row, Col, Card, Image as RBImage } from 'react-bootstrap';
import Title from './Title';
import Description from './Description';
import Image from './Image';

const FptHeader = () => {
  return (
    <Card className="mb-4 p-4 shadow-sm">
      <Row className="align-items-center">
        <Col md={6}>
          <RBImage
            src="./images/logo.png"
            height="60"
            alt="FPT Logo"
          />
        </Col>
        <Col md={6} className="text-end">
          <div className="fw-bold">Hoai Nguyen - FPT DaNang</div>
          <div>Mobile: 0982827763</div>
        </Col>
      </Row>
    </Card>
  );
};

const SimpleCard = ({ item }) => {
  const { title, description, imageUrl } = item;

  return (
    <Container className="p-4" style={{ fontFamily: 'Arial, sans-serif' }}>
      <FptHeader />

      <div
        style={{
          border: '2px solid blue',
          maxWidth: '400px',
          display: 'flex'
        }}
      >
        <Image url={imageUrl} />
        <div style={{ padding: '10px', flex: 1, border: '1px solid orange' }}>
          <Title text={title} />
          <Description text={description} />
        </div>
      </div>
    </Container>
  );
};

export default SimpleCard;
