import React from 'react';
import PropTypes from 'prop-types'
import { PHONE_NUMBER_PATTERN, DOB_PATTERN } from '../../constants';
import { Alert, Button, Container, Form, Row, Col, Image } from 'react-bootstrap';
import { UNEXPECTED_ERROR } from '../../constants/commonConstants';
import placeholder from '../../assets/images/default.jpg';
import { Link } from 'react-router-dom';
import { RESEND_VERIFICATION_MAIL_ROUTE } from '../../constants/routesPath';
import { DANGER } from '../../constants/componentVariants';

const UpdateProfileComponent = ({
  formChanged,
  updateSuccess,
  updateProfileError,
  handleChange,
  handleSubmit,
  handleImageChange,
  email,
  first_name,
  last_name,
  phone,
  dob,
  profile_image,
  is_email_verified,
}) => {
  return (
    <Container className="w-50">
      <h3 style={{ textAlign: 'center', paddingBottom: '10px' }}>
        Profile Details
      </h3>
      { !is_email_verified && <><Alert variant="warning">Your email is not verified</Alert>
        <Button as={Link} to={RESEND_VERIFICATION_MAIL_ROUTE} variant="warning" block className="mb-4">Verify Email</Button></>}
      <Row>
        <Image
          src={profile_image || placeholder}
          width="200px"
          height="200px"
          roundedCircle
          style={{ margin: 'auto' }}
        />
      </Row>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control readOnly defaultValue={email} />
        </Form.Group>
        <Row>
          <Form.Group as={Col} controlId="first_name">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              value={first_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="last_name">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              value={last_name}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              pattern={PHONE_NUMBER_PATTERN}
              value={phone}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Enter 10 digits phone number e.g. 9503524001
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="dob">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control
              type="text"
              pattern={DOB_PATTERN}
              value={dob}
              onChange={handleChange}
              placeholder="YYYY-MM-DD"
            />
            <Form.Control.Feedback type="invalid">
              Date of must follow the 'YYYY-MM-DD' pattern
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group>
          <Form.File id="profileImage" label="Update Profile Image" onChange={handleImageChange} />
        </Form.Group>
        {updateSuccess && <Alert variant="success">Successfully updated</Alert>}
        <Button disabled={!formChanged} type="submit">
          Update
        </Button>
      </Form>
      {
        updateProfileError && (
          <Alert variant={DANGER}>{`${UNEXPECTED_ERROR}`}</Alert>
        )
      }
    </Container >
  );
};

UpdateProfileComponent.propTypes = {
  formChanged: PropTypes.bool.isRequired,
  updateProfileError: PropTypes.string,
  email: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  updateSuccess: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

UpdateProfileComponent.defaultProps = {
  updateProfileError: "",
  updateSuccess: false
}

export default UpdateProfileComponent;
