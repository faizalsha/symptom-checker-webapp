import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FORGOT_PASSWORD_ROUTE } from "../../constants/routesPath";

const LoginComponent = ({
  email,
  password,
  handleChange,
  handleSubmit,
  handleFocus,
}) => {
  return (
    <Container className="w-50">
      <h2 className="text-center">Login</h2>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            value={email}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            value={password}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="Enter password"
          />
        </Form.Group>
        <Row>
          <Col md={4}>
            <Button type="submit" block>
              Login
            </Button>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <Link to={FORGOT_PASSWORD_ROUTE}>Forgot password?</Link>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

LoginComponent.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
}
LoginComponent.defaultProps = {
  loginError: null
}

export default LoginComponent;
