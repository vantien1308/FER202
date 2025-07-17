import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import NotFound from "./NotFound";

function LaptopDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [laptop, setLaptop] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/Laptops/${id}`)
      .then((res) => setLaptop(res.data))
      .catch(() => setError(true));
  }, [id]);

  if (error) return <NotFound />;
  if (!laptop) return <div className="text-center mt-5">Loading...</div>;

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow">
           <Card.Img
  src={laptop.image}
  alt={laptop.model}
  style={{
    maxHeight: '250px',         // ✅ giới hạn chiều cao
    objectFit: 'contain',       // ✅ không cắt hình
    width: '100%',              // ✅ tự giãn theo chiều ngang
    padding: '10px'             // ✅ cách ảnh khỏi viền
  }}
/>
            <Card.Body>
              <Card.Title className="mb-3">
                {laptop.brand} {laptop.model}
              </Card.Title>
              <Card.Text>
                <p>
                  <strong>Year:</strong> {laptop.year}
                </p>
                <p>
                  <strong>Price:</strong> {laptop.price}
                </p>
                <p>
                  <strong>Description:</strong> High-quality {laptop.brand}{" "}
                  {laptop.model} laptop, reliable for performance and
                  portability.
                </p>
              </Card.Text>
              <div className="d-grid">
                <Button variant="primary" onClick={() => navigate("/laptops")}>
                  Back to Laptop List
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LaptopDetail;
