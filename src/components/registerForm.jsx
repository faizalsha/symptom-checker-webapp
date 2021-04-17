import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../App.css"

import {
  clearRegistrationError,
  clearRegistrationSuccess,
  registerUser,
} from "../redux/actions/registerActions";
import { REGISTRATION_SUCCESSFUL_MESSAGE, USER_ALREADY_EXIST, WELCOM_MESSAGE } from "../constants/commonConstants";
import Loader from "./loader";
import { DANGER, SUCCESS } from "../constants/componentVariants";
import InfoComponent from "./infoComponent";
import { clearError } from "../redux/actions/errorActions";
import { displayErrors } from "../utlis";
import { PASSWORD_PATTERN_LENGTH } from "../constants/regexConstants";
import { HOME_ROUTE } from "../constants/routesPath";
import { Redirect } from "react-router";

const RegisterForm = (props) => {

  const { setLoading } = props;

  // passwordMatch state for validating password and confirmPassword match
  const [passwordMatch, setPasswordMatch] = useState(true);

  // store form detail for a user
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  /**
   * useSelector hook for reading data from the state (registerUser slice)
   */
  const registerUserSelector = useSelector((state) => state.registerUser);

  const { isLoading, data, error } = registerUserSelector;

  const { allErrors } = useSelector(state => state.errors)

  /**
   * useDispatch hook for dispatching the api result to redux store
   */
  const dispatch = useDispatch();

  /**
   * removing success reponse on unmounting 
   * so that when user come back to register route 
   * then register form should be rendered not the success message
   */
  useEffect(() => {
    return dispatch(clearRegistrationSuccess());
  }, [])

  /**
   * Handling loader state
   */
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading])

  useEffect(() => {
    displayErrors(allErrors)
    return () => dispatch(clearError())
  }, [allErrors])


  const { isAuthenticated } = useSelector((state) => state.auth);

  const { email, firstName, lastName, password, confirmPassword } = user;

  /**
   *handling user registration form submission with validation
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else if (password === confirmPassword) {
      setPasswordMatch(true);

      const newUser = {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
      };
      dispatch(registerUser(newUser));
    } else if (password !== confirmPassword) {
      setPasswordMatch(false); // for showing info message to user
    }
  };

  /**
   * handling onChange event on input fields
   */
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  // handling when user click on email input
  const handleFocus = () => {
    dispatch(clearRegistrationError());
  };

  const propsToPass = {
    variant: SUCCESS,
    title: WELCOM_MESSAGE,
    message: REGISTRATION_SUCCESSFUL_MESSAGE,
  }

  if (isAuthenticated) {
    return <Redirect to={HOME_ROUTE} />;
  }

  return (

    <Container className="w-50">
      <h2 className="text-center">Register new account</h2>
      {data &&
        <InfoComponent {...propsToPass} />
      }
      {!data &&
        <>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                value={email}
                onChange={handleChange}
                onFocus={handleFocus}
              />
            </Form.Group>
            <Row>
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={firstName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  value={lastName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                value={password}
                onChange={handleChange}
                pattern={PASSWORD_PATTERN_LENGTH}
              />
              <Form.Text className="text-muted">
                Password must be atleast 8 character long <br />
                Allowed character A-Z, a-z and 0-9
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                required
                type="password"
                value={confirmPassword}
                onChange={handleChange}
              />
            </Form.Group>
            {!passwordMatch && (
              <Alert variant={DANGER}>
                Password and confirm password does not match
              </Alert>
            )}
            <Button type="submit" disabled={isLoading}>
              Register
        </Button>
          </Form>
        </>
      }
    </Container>
  );
};

export default Loader(RegisterForm);
