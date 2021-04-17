import React from "react";
import { Alert, Form, Button } from "react-bootstrap";
import PropTypes from 'prop-types'

import { HTTP_400 } from "../../constants/errorCodes";
import { DANGER, SUCCESS } from "../../constants/componentVariants";
import InfoComponent from "../infoComponent";
import { FORGOT_PASSWORD_SUCCESS_TITLE, FORGOT_PASSWORD_SUCCESS_MESSAGE } from "../../constants/commonConstants";

/**
 * Component for Forgot password form
 * @param props
 */
const ForgotPasswordComponent = ({
  email,
  data,
  error,
  handleChange,
  handleSubmit,
}) => {
  const propsToPass = {
    variant: SUCCESS,
    title: FORGOT_PASSWORD_SUCCESS_TITLE,
    message: FORGOT_PASSWORD_SUCCESS_MESSAGE,
  }
  return (
    <>
      {data && <InfoComponent {...propsToPass} />}
      {!data && <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="foo@bar.com"
          />
        </Form.Group>

        {error === HTTP_400 && (
          <Alert variant={DANGER}>No account linked with this email</Alert>
        )}
        <Button type="submit">Send Reset Link</Button>
      </Form>}
    </>
  );
};

ForgotPasswordComponent.propTypes = {
  validated: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  data: PropTypes.object,
  error: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

ForgotPasswordComponent.defaultProps = {
  data: null,
  error: null
}

export default ForgotPasswordComponent;
