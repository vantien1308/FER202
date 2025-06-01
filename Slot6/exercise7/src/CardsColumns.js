import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./CardsColumns.css";

export default function CardsColumns() {
  return (
    <div>
      <div className="cards-columns-title">
        <b>Cards Columns</b>
      </div>
      <div className="cards-columns-row">
        <Row>
          <Col md={4} sm={12} className="mb-3">
            <Card className="blue-card">
              <Card.Img variant="top" src="/image/car.png" className="card-img-top" />
              <Card.Body className="text-center">
                <Card.Text>Some text inside the first card</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <Card className="yellow-card">
              <Card.Img variant="top" src="/image/car.png" className="card-img-top" />
              <Card.Body className="text-center">
                <Card.Text>Some text inside the first card</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <Card className="red-card">
              <Card.Img variant="top" src="/image/car.png" className="card-img-top" />
              <Card.Body className="text-center">
                <Card.Text>Some text inside the first card</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}