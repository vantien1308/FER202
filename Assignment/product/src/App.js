import React, { useState } from 'react';
import { Routes, Route, Navigate, Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PhoneList from './components/PhoneList';
import ManagePhone from './components/ManagePhone';
import PhoneDetail from './components/PhoneDetail';
import LoginForm from './components/LoginForm';
import AccountDetail from './components/AccountDetail';
import Cart from './components/Cart';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logout } from './redux/authSlice'; 

function RequireAuth({ children }) {
  const user = useSelector(state => state.auth.user);
  return user ? children : <Navigate to="/" />;
}

function App() {
  const user = useSelector(state => state.auth.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [pendingSearchTerm, setPendingSearchTerm] = useState('');

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(pendingSearchTerm);
    navigate('/home');
  };

  return (
    <>
      {user && location.pathname !== '/' && (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm mb-3" style={{ minHeight: 70, fontSize: '1.25rem' }}>
          <Container>
            <Navbar.Brand as={Link} to="/home" className="fw-bold">
               PhoneApp
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">🏠 Home</Nav.Link>
                <Nav.Link as={Link} to="/manage">🛠 Manage</Nav.Link>
                <Nav.Link as={Link} to="/cart">🛒 Cart</Nav.Link>
              </Nav>
              {/* Search bar */}
              <form className="d-flex me-3" onSubmit={handleSearchSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search phone..."
                  aria-label="Search"
                  value={pendingSearchTerm}
                  onChange={e => setPendingSearchTerm(e.target.value)}
                  style={{ minWidth: 200 }}
                />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
              <Dropdown align="end">
                <Dropdown.Toggle variant="secondary" id="dropdown-user" className="fw-light">
                  👋 Xin chào, <strong>{user?.username}</strong>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/account">👤 Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>🚪 Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<RequireAuth><PhoneList searchTerm={searchTerm} /></RequireAuth>} />
        <Route path="/manage" element={<RequireAuth><ManagePhone /></RequireAuth>} />
        <Route path="/detail/:id" element={<RequireAuth><PhoneDetail /></RequireAuth>} />
        <Route path="/account" element={<RequireAuth><AccountDetail /></RequireAuth>} />
        <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;