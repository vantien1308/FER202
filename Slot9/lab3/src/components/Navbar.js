import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#333', color: '#fff' }}>
      <Container className="px-8">
        <Navbar.Brand href="#" style={{ color: '#fff', fontWeight: 'bold' }}>Pizza House</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: '#fff' }}>Home</Nav.Link>
            <Nav.Link href="#about" style={{ color: '#fff' }}>About Us</Nav.Link>
            <Nav.Link href="#contact" style={{ color: '#fff' }}>Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-0"
              aria-label="Search"
              style={{ backgroundColor: '#fff', border: 'none', padding: '5px' }}
            />
            <Button variant="outline-light" style={{ backgroundColor: '#d32f2f', borderColor: '#d32f2f', color: '#fff', padding: '5px', marginLeft: '-5px', height: '10%' }}>
              <Image src="./images/icon.png" alt="Search Icon" style={{ width: '20px', height: '20px' }} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;