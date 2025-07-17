import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Card ,Alert} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginForm({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/UserAccounts');
      const users = response.data;

      const matchedUser = users.find(
        (u) => u.username === username && u.password === password
      );

      if (matchedUser) {
        setUser(matchedUser);
        navigate('/laptops');
      } else {
        setShowAlert('Invalid username or password!');
      }
    } catch (error) {
      console.error('Login error:', error);
      setShowAlert('Error during login. Please make sure JSON Server is running.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
          <Card className="shadow p-4" style={{ minWidth: '350px' }}>
            <Card.Title className="text-center mb-4">
              <h3>Login</h3>
            </Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Login
                </Button>
                {showAlert && (
          <Alert variant="danger" className="mt-3">
            Invalid username or password!
          </Alert>
        )}
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LoginForm;
