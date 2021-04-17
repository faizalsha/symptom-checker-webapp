import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RESET_PASSSWORD_SUCCESS_MESSAGE, RESET_PASSSWORD_SUCCESS_TITLE } from "../constants/commonConstants";
import { DANGER, SUCCESS } from "../constants/componentVariants";

import { PASSWORD_PATTERN_LENGTH } from "../constants/regexConstants";
import { clearError } from "../redux/actions/errorActions";
import { resetPassword } from "../redux/actions/resetPasswordActions";
import { displayErrors } from "../utlis";
import InfoComponent from "./infoComponent";
import Loader from "./loader";

const ResetPassword = (props) => {
  const { setLoading } = props;
  const [validated, setValidated] = useState(false);
  const [passwordMatched, setPasswordMatched] = useState(true);
  const [creds, setCreds] = useState({
    password: "",
    confirmPassword: "",
  });

  const { password, confirmPassword } = creds;

  const dispatch = useDispatch();

  const resetPasswordSelector = useSelector((state) => state.resetPassword);

  const { isLoading, data, error } = resetPasswordSelector;

  const { token: paramToken } = useParams();

  const errorsSelector = useSelector(state => state.errors)

  const { allErrors } = errorsSelector;

  /**
   * Handling loader state
   */
  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  useEffect(() => {
    displayErrors(allErrors)
    return () => dispatch(clearError())
  }, [allErrors])

  /**
   * handling onChange event on input fields
   */
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setCreds({
      ...creds,
      [id]: value,
    });
    if (password === confirmPassword) {
      setPasswordMatched(true);
    }
  };

  /**
   *handling user reset password form submission
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else if (password === confirmPassword) {
      dispatch(resetPassword(password, paramToken));
    } else {
      //TODO: password confirm password doesn't match
      setPasswordMatched(false);
    }

    // setting validated property true after clicking submit button
    setValidated(true);
  };

  const successProps = {
    variant: SUCCESS,
    title: RESET_PASSSWORD_SUCCESS_TITLE,
    message: RESET_PASSSWORD_SUCCESS_MESSAGE,
  };

  return (
    <Container className="w-50">
      <h2>Reset Password</h2>
      {data && <InfoComponent {...successProps} />}
      {!data && <Form onSubmit={handleSubmit}>
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
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            value={confirmPassword}
            onChange={handleChange}
            pattern={PASSWORD_PATTERN_LENGTH}
          />
          {!passwordMatched && (
            <Alert variant={DANGER}>
              Password and confirm password does not match
            </Alert>
          )}
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>}
    </Container>
  );
};

export default Loader(ResetPassword);
