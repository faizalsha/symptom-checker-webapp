import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import PropTypes from "prop-types";

import Loader from '../loader';


const CompanyRegistrationComponent = ({
    validated,
    name,
    about,
    address,
    phone,
    city,
    state,
    pincode,
    handleChange,
    handleSubmit,
    handleFileChange,
    isLoading,
}) => {
    return <Container className="w-50">
        <h2 className="text-center">New Company Registration</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Company name</Form.Label>
                <Form.Control required type="text" value={name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="about">
                <Form.Label>About</Form.Label>
                <Form.Control as="textarea" required type="text" value={about} onChange={handleChange} />
            </Form.Group>
            <Row>
                <Form.Group as={Col} controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control required type="text" value={address} onChange={handleChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control required type="text" value={phone} onChange={handleChange} />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control required type="text" value={city} onChange={handleChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control required type="text" value={state} onChange={handleChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="pincode">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control required type="text" value={pincode} onChange={handleChange} />
                </Form.Group>
            </Row>

            <Form.Group controlId="logo">
                <Form.File
                    name="file"
                    label="Logo"
                    onChange={handleFileChange}
                />
            </Form.Group>
            <Button type="submit">Register Company</Button>
        </Form>
        <Loader visibility={isLoading} />
    </Container>
}

CompanyRegistrationComponent.propTypes = {
    validated: PropTypes.bool,
    name: PropTypes.string,
    about: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    pincode: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleFileChange: PropTypes.func,
    isLoading: PropTypes.bool,
}

export default CompanyRegistrationComponent;
