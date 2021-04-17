import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { SUCCESS } from '../../constants/componentVariants';
import { sendCompanyInvite } from '../../redux/actions/companyInviteActions';
import { clearError } from '../../redux/actions/errorActions';
import { displayErrors, removeNullProperties } from '../../utlis';
import InfoComponent from '../infoComponent';
import Loader from '../loader';

const SendCompanyInvite = () => {

    const [response, setResponse] = useState()

    const [receiverDetails, setReceiverDetails] = useState({
        email: "",
        firstName: "",
        lastName: ""
    })

    const dispatch = useDispatch()

    const { companyId } = useParams()

    const { sendInviteLoading, sendInviteData, sendInviteError } = useSelector(state => state.companyInvite)

    const errorsSelector = useSelector((state) => state.errors);

    const { allErrors } = errorsSelector;

    useEffect(() => {
        displayErrors(allErrors);
        return () => dispatch(clearError())
    }, [allErrors]);

    useEffect(() => {
        if (sendInviteData)
            setResponse(sendInviteData.msg)
    }, [sendInviteData])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            e.stopPropagation();
        } else {
            let data = { receiver_email: email, first_name: firstName, last_name: lastName }
            data = removeNullProperties(data)
            dispatch(sendCompanyInvite(companyId, data))
        }
    }

    const handleChange = ({ target }) => {
        const { id, value } = target
        setReceiverDetails({
            ...receiverDetails,
            [id]: value
        })
        setResponse(null)
    }
    const { email, firstName, lastName } = receiverDetails;

    const errorProps = {
        variant: "danger",
        title: "Error",
        message: "Some error occurred while sending invite"
    }

    return <Container className="w-50">
        <h2 className="text-center">Send company invite</h2>
        {
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        value={email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="firstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        value={firstName}
                        onChange={handleChange}
                        type="text"
                        placeholder="First name" />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        value={lastName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Last name" />
                </Form.Group>
                {response && <Alert variant={SUCCESS}>{sendInviteData.msg}</Alert>}
                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
        }
        {!sendInviteData && sendInviteError && <InfoComponent />}
        {sendInviteLoading && <Loader {...errorProps} />}
    </Container>
}

export default SendCompanyInvite
