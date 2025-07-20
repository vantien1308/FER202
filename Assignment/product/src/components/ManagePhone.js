import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Button, Table, Modal, Form, Alert } from 'react-bootstrap';

function ManagePhone() {
  const [phones, setPhones] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', description: '', price: '', currentPrice: '', images: '' });
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    axios.get('http://localhost:3001/phones').then(res => setPhones(res.data));
  }, []);

  const handleShowModal = (phone = null) => {
    if (phone) {
      setForm(phone);
      setEditId(phone.id);
    } else {
      setForm({ name: '', description: '', price: '', currentPrice: '', images: '' });
      setEditId(null);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditId(null);
    setForm({ name: '', description: '', price: '', currentPrice: '', images: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`http://localhost:3001/phones/${editId}`, form);
      setMessage('Update successful!');
    } else {
      await axios.post('http://localhost:3001/phones', form);
      setMessage('Added successfully!');
    }
    axios.get('http://localhost:3001/phones').then(res => setPhones(res.data));
    handleCloseModal();
    setTimeout(() => setMessage(''), 1500);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await axios.delete(`http://localhost:3001/phones/${id}`);
      axios.get('http://localhost:3001/phones').then(res => setPhones(res.data));
      setMessage('Deleted successfully!');
      setTimeout(() => setMessage(''), 1500);
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(phones.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPhones = phones.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className="py-5">
      <Card className="shadow-lg mb-4" style={{ background: 'linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%)', borderRadius: 16 }}>
        <Card.Body>
          <h2 className="text-center mb-4" style={{ fontWeight: 700, color: '#007bff', letterSpacing: 2 }}>Product Management</h2>
          {message && <Alert variant="success" className="text-center">{message}</Alert>}
          <div className="d-flex justify-content-end mb-3">
            <Button variant="primary" style={{ fontWeight: 600, letterSpacing: 1 }} onClick={() => handleShowModal()}>
              + Add New
            </Button>
          </div>
          <Table bordered hover responsive className="bg-white rounded shadow-sm">
            <thead className="table-primary">
              <tr style={{ fontWeight: 600 }}>
                <th>Name</th>
                <th>Description</th>
                <th>Original Price</th>
                <th>Sale Price</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPhones.map(phone => (
                <tr key={phone.id}>
                  <td style={{ fontWeight: 500 }}>{phone.name}</td>
                  <td>{phone.description}</td>
                  <td>{phone.price} đ</td>
                  <td>{phone.currentPrice} đ</td>
                  <td>
                    <img src={`/images/${phone.images}`} alt={phone.name} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 8, border: '1px solid #eee' }} />
                  </td>
                  <td>
                    <Button variant="warning" size="sm" className="me-2" onClick={() => handleShowModal(phone)}>
                      Edit
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(phone.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* Pagination */}
          <nav className="d-flex justify-content-center mt-4">
            <ul className="pagination">
              <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&laquo;</button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i + 1} className={`page-item${currentPage === i + 1 ? ' active' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                </li>
              ))}
              <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>&raquo;</button>
              </li>
            </ul>
          </nav>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? 'Update Product' : 'Add New Product'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control name="name" value={form.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" value={form.description} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Original Price</Form.Label>
              <Form.Control name="price" value={form.price} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sale Price</Form.Label>
              <Form.Control name="currentPrice" value={form.currentPrice} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image (file name)</Form.Label>
              <Form.Control name="images" value={form.images} onChange={handleChange} required />
              <Form.Text className="text-muted">Example: iphone15promax.jpg</Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {editId ? 'Save Changes' : 'Add New'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default ManagePhone;