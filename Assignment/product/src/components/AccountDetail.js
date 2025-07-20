import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, logout } from '../redux/authSlice';
import axios from 'axios';
import { Form, Button, Container, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AccountDetail() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ ...user });
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(`http://localhost:3001/users/${form.id}`, form);
    dispatch(updateUser(res.data));
    setMessage('Cập nhật thành công!');
  };

  // const handleLogout = () => {
  //   dispatch(logout());
  //   navigate('/');
  // };

  if (!user) return <p>Chưa đăng nhập</p>;

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card style={{ width: 400, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}>
        <Card.Body>
          <h2 className="text-center mb-4" style={{ fontWeight: 700, color: '#007bff' }}>Profile</h2>
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
           <Form.Group className="mb-3">
          <Form.Label>Họ tên</Form.Label>
          <Form.Control value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
        </Form.Group>
            <Button type="submit" className="me-2">Cập nhật</Button>
            {/* <Button variant="danger" onClick={handleLogout}>Logout</Button> */}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AccountDetail;