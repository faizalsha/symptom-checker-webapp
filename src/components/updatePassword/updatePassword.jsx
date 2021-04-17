import React, { useEffect, useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { PASSWORD_PATTERN_LENGTH } from '../../constants/regexConstants';
import { clearError } from '../../redux/actions/errorActions';
import { updatePassword } from '../../redux/actions/updateProfileActions';
import { displayErrors } from '../../utlis';
import Loader from '../loader';

const UpdatePassword = ({ setLoading }) => {
  const dispatch = useDispatch();

  const errorsSelector = useSelector((state) => state.errors);

  const { allErrors } = errorsSelector;

  const { hasPasswordUpdated, isLoading } = useSelector((state) => state.auth);

  const [passwordMatch, setPasswordMatch] = useState(true);

  const emptyForm = {
    oldPassword: '',
    password: '',
    confirmPassword: '',
  };

  const [formInput, setFormInput] = useState(emptyForm);

  const { oldPassword, password, confirmPassword } = formInput;

  useEffect(() => {
    displayErrors(allErrors);
    return () => dispatch(clearError())
  }, [allErrors]);

  useEffect(() => {
    setFormInput(emptyForm);
  }, [hasPasswordUpdated]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      dispatch(updatePassword(oldPassword, password));
    }
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFormInput({
      ...formInput,
      [id]: value,
    });
  };

  const handleFocus = () => {
    setPasswordMatch(true);
  };

  useEffect(() => {
    console.log('reached');
    setLoading(isLoading);
  }, [isLoading]);

  return (
    <Container className="w-50">
      <h2 className="text-center">Update password</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="oldPassword">
          <Form.Label>Old password</Form.Label>
          <Form.Control
            type="password"
            value={oldPassword}
            onChange={handleChange}
            placeholder="Enter old password"
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            value={password}
            pattern={PASSWORD_PATTERN_LENGTH}
            onChange={handleChange}
            onFocus={handleFocus}
            type="password"
            placeholder="Enter password"
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
            value={confirmPassword}
            onChange={handleChange}
            onFocus={handleFocus}
            type="password"
            placeholder="Enter password again"
          />
        </Form.Group>

        {!passwordMatch && (
          <Alert variant="danger">
            Password and confirm password does not match
          </Alert>
        )}
        {hasPasswordUpdated && (
          <Alert variant="success">
            Password has been changed successfully
          </Alert>
        )}

        <Button type="submit">Update password</Button>
      </Form>
    </Container>
  );
};

UpdatePassword.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

export default Loader(UpdatePassword);
