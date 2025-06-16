import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [touched, setTouched] = useState({ email: false, password: false });

  useEffect(() => {
    setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    setPasswordValid(password.length >= 8);
  }, [email, password]);

  const formValid = emailValid && passwordValid;

  return (
    <Container className="my-4">
      <Card className="shadow">
        <Card.Body>
          <h4 className="mb-4 text-primary">Exercise 5: Login Form</h4>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                isInvalid={touched.email && !emailValid}
              />
              <Form.Control.Feedback type="invalid">
                Email không hợp lệ
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Tối thiểu 8 ký tự"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
                isInvalid={touched.password && !passwordValid}
              />
              <Form.Control.Feedback type="invalid">
                Mật khẩu phải có ít nhất 8 ký tự
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              variant="primary"
              className="mt-4"
              disabled={!formValid}
            >
              Đăng nhập
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginForm;
