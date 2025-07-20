import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert, Card } from 'react-bootstrap';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:3001/users?username=${username}&password=${password}`);
    if (res.data.length > 0) {
      dispatch(login(res.data[0]));
      window.alert('Đăng nhập thành công!');
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Card style={{ width: 400, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}>
        <Card.Body>
          <h2 className="text-center mb-4" style={{ fontWeight: 700, color: '#007bff' }}>Welcome Back!</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: 500 }}>Username</Form.Label>
              <Form.Control
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter your username"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: 500 }}>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              className="w-100"
              size="lg"
              style={{ fontWeight: 600, letterSpacing: 1 }}
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginForm;