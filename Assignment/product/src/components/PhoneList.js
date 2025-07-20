import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhones } from '../redux/phoneSlice';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap';
import { addToCart } from '../redux/cartSlice';
import { FaCartPlus, FaInfoCircle } from 'react-icons/fa';

function PhoneList({ searchTerm = '' }) {
  const dispatch = useDispatch();
  const { items: phones, status } = useSelector(state => state.phones);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch]);

  const handleAddToCart = (phone) => {
    alert(`Đã thêm ${phone.name} vào giỏ hàng!`);
    dispatch(addToCart(phone));
  };

  // Search logic
  const filteredPhones = phones.filter(phone =>
    phone.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPhones.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPhones = filteredPhones.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (status === 'loading') return <Spinner animation="border" />;
  if (status === 'failed') return <p>Error loading phones.</p>;

  return (
    <div className="container mt-4">
      
      <Row>
        {currentPhones.map(phone => (
          <Col xs={12} sm={6} md={4} lg={4} key={phone.id} className="mb-4">
            <Card className="shadow-sm h-100 border-0" style={{ borderRadius: 18, transition: 'transform 0.2s', cursor: 'pointer' }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              <div style={{ background: '#f8f9fa', borderTopLeftRadius: 18, borderTopRightRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 250 }}>
                <Card.Img variant="top" src={`/images/${phone.images}`} style={{ maxHeight: 220, width: 'auto', objectFit: 'contain' }} />
              </div>
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="mb-2" style={{ fontWeight: 700, fontSize: 20 }}>{phone.name}</Card.Title>
                <div className="mb-2">
                  {phone.price && phone.price !== phone.currentPrice && (
                    <span style={{ textDecoration: 'line-through', color: '#888', marginRight: 8, fontSize: 15 }}>{phone.price} đ</span>
                  )}
                  <span style={{ color: '#e53935', fontWeight: 700, fontSize: 22 }}>{phone.currentPrice} đ</span>
                </div>
                <div className="d-flex gap-2 mt-2">
                  <Link to={`/detail/${phone.id}`} className="btn btn-outline-primary flex-fill d-flex align-items-center justify-content-center" style={{ fontWeight: 600, borderRadius: 8 }}>
                    <FaInfoCircle className="me-2" /> View Detail
                  </Link>
                  <Button variant="success" className="flex-fill d-flex align-items-center justify-content-center" style={{ fontWeight: 600, borderRadius: 8 }} onClick={() => handleAddToCart(phone)}>
                    <FaCartPlus className="me-2" /> Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
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
    </div>
  );
}

export default PhoneList;