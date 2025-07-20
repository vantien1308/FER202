import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card, Button, ListGroup, Alert } from 'react-bootstrap';
import { clearCart, removeFromCart } from '../redux/cartSlice';
import { FaTrashAlt } from 'react-icons/fa';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    window.alert('Thanh toán thành công!');
    dispatch(clearCart());
  };

  const handleRemove = (idx) => {
    dispatch(removeFromCart(idx));
  };

  const total = cartItems.reduce((sum, item) => sum + Number((item.currentPrice || '0').toString().replace(/\./g, '')), 0);

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card style={{ width: 500, boxShadow: '0 4px 24px rgba(0,0,0,0.12)', borderRadius: 20 }}>
        <Card.Body>
          <h2 className="text-center mb-4" style={{ fontWeight: 700, color: '#007bff', letterSpacing: 1 }}>🛒 My Card</h2>
          {cartItems.length === 0 ? (
            <Alert variant="info" className="text-center">Cart Is Empty.</Alert>
          ) : (
            <>
              <ListGroup className="mb-3">
                {cartItems.map((item, idx) => (
                  <ListGroup.Item key={idx} className="d-flex align-items-center justify-content-between" style={{ border: 'none', borderBottom: '1px solid #f0f0f0', padding: '16px 0' }}>
                    <div className="d-flex align-items-center gap-3">
                      <img src={`/images/${item.images}`} alt={item.name} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 12, border: '1px solid #eee' }} />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 18 }}>{item.name}</div>
                        <div style={{ color: '#007bff', fontWeight: 700, fontSize: 16 }}>{item.currentPrice} đ</div>
                      </div>
                    </div>
                    <Button variant="outline-danger" size="sm" onClick={() => handleRemove(idx)} title="Xóa khỏi giỏ">
                      <FaTrashAlt />
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <div className="d-flex justify-content-between align-items-center mb-3 px-1">
                <span style={{ fontWeight: 600, fontSize: 20 }}>Total:</span>
                <span style={{ color: '#28a745', fontWeight: 700, fontSize: 22 }}>{total.toLocaleString()} đ</span>
              </div>
              <Button variant="success" className="w-100 py-3" style={{ fontSize: 20, fontWeight: 700, borderRadius: 12, letterSpacing: 1 }} onClick={handleCheckout}>
                Payment
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Cart;