import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BookTable = () => (
  <div className="py-5">
    <h2 className="text-center mb-4 book-form-label">Book Your Table</h2>
    <Row className="justify-content-center">
      <Col md={8}>
        <Form>
          <Row>
            <Col md={4} className="mb-3">
              <Form.Control type="text" placeholder="Your Name *" required className="book-form-input" />
            </Col>
            <Col md={4} className="mb-3">
              <Form.Control type="email" placeholder="Your Email *" required className="book-form-input" />
            </Col>
            <Col md={4} className="mb-3">
              <Form.Select required className="book-form-input">
                <option value="">Select a Service</option>
                <option value="dine-in">Dine-In</option>
                <option value="takeaway">Takeaway</option>
                <option value="delivery">Delivery</option>
              </Form.Select>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" placeholder="Please write your comment" rows={4} required className="book-form-input" />
          </Form.Group>
          <div className="text-center">
            <Button variant="warning" type="submit">Send Message</Button>
          </div>
        </Form>
      </Col>
    </Row>
  </div>
);

export default BookTable;