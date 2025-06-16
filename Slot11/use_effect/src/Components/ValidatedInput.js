import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";

const validateInput = (value) => value.length >= 5;

function ValidatedInput() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Dùng useEffect để kiểm tra hợp lệ mỗi khi value thay đổi
  useEffect(() => {
    const valid = validateInput(value);
    setIsValid(valid);
    setErrorMessage(valid ? "" : "Giá trị phải có ít nhất 5 ký tự!");
  }, [value]);

  // Hàm xử lý khi người dùng submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn reload trang
    if (isValid) {
      alert(`Giá trị bạn đã nhập: "${value}"`);
    }
  };

  return (
    <Container className="my-4">
      <Card className="shadow">
        <Card.Body>
          <h4 className="mb-4 text-primary">Exercise 4: Validated Input</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="validatedInput">
              <Form.Label>Nhập một giá trị</Form.Label>
              <Form.Control
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                isValid={isValid && value !== ""}
                isInvalid={!isValid && value !== ""}
                placeholder="Ít nhất 5 ký tự"
              />
              <Form.Control.Feedback type="invalid">
                {errorMessage}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" className="mt-3" type="submit" disabled={!isValid}>
              Gửi
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ValidatedInput;
