import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Form, InputGroup } from 'react-bootstrap';

function LaptopList() {
  const [laptops, setLaptops] = useState([]);
  const [search, setSearch] = useState(''); // dùng để lọc
  const [query, setQuery] = useState('');   // dùng để nhập

  useEffect(() => {
    axios.get('http://localhost:3001/Laptops')
      .then((res) => setLaptops(res.data));
  }, []);

  const filtered = laptops.filter((l) =>
    l.brand.toLowerCase().includes(search.toLowerCase()) ||
    l.model.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault(); // ngăn reload
    setSearch(query);   // chỉ cập nhật khi nhấn nút
  };

  return (
    <div className="container mt-4">
      <h2>Laptop List</h2>

      <Form className="mb-3" onSubmit={handleSearch}>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Search by brand or model"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="secondary" type="submit">
            Search
          </Button>
        </InputGroup>
      </Form>

      <Row>
        {filtered.map((laptop) => (
          <Col md={3} key={laptop.id} className="mb-4 d-flex">
            <Card className="h-100 w-100 shadow-sm">
              <Card.Img
                variant="top"
                src={laptop.image}
                alt={laptop.model}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                <Card.Text>
                  <strong>Year:</strong> {laptop.year}<br />
                  <strong>Price:</strong> {laptop.price}
                </Card.Text>
                <Link to={`/laptops/${laptop.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default LaptopList;
