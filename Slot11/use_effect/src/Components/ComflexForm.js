import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";

function ComplexForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const validName = name.trim().length > 0;
    const validGender = gender !== "";
    const validCountry = country !== "";
    const validAgree = agree;
    setFormValid(validName && validGender && validCountry && validAgree);
  }, [name, gender, country, agree]);

  return (
    <Container className="my-4">
      <Card className="shadow">
        <Card.Body>
          <h4 className="mb-4 text-primary">Exercise 6: Comflex Form</h4>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập tên của bạn"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Male"
                  name="gender"
                  type="radio"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                  checked={gender === "male"}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  type="radio"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                  checked={gender === "female"}
                />
                <Form.Check
                  inline
                  label="Other"
                  name="gender"
                  type="radio"
                  value="other"
                  onChange={(e) => setGender(e.target.value)}
                  checked={gender === "other"}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Select value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="">--Choose country--</option>
                <option value="vn">Viet Nam</option>
                <option value="us">America</option>
                <option value="jp">Japan</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Tôi đồng ý với điều khoản"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
            </Form.Group>

            <Button variant="primary" disabled={!formValid}>
              Gửi
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ComplexForm;
