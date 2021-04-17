import React from 'react';
import PropTypes from 'prop-types'
import { Card, Container, Image, Button, Row, Col } from 'react-bootstrap'
import Loader from '../loader';
import InfoComponent from '../infoComponent';

const ComapnyDetailsComponent = ({
    isLoading,
    data,
    error,
    acceptHandler,
    rejectHandler
}) => {
    const errorProps = {
        variant: "danger",
        title: "Invalid invite",
        message: "Invite has been already used or expired"
    }
    return <Container className="w-50 mt-5">
        {isLoading && <Loader />}
        {!isLoading && data && <Card className="text-center">
            <Card.Header>Company Details</Card.Header>
            <Card.Body>
                {data.logo && <Image src={data.logo} className="mb-3" roundedCircle />}<br />
                {data.name && <Card.Title>{data.name}</Card.Title>}
                {data.about && <Card.Text>{data.about}</Card.Text>}
                {data.registration_date && <p>{data.registration_date}</p>}
                <h5>Address</h5>
                {data.address && <span>{data.address}, </span>}
                {data.city && <span>{data.city}, </span>}
                {data.state && <span>{data.state}, </span>}
                {data.pincode && <span>{data.pincode} </span>}
                <h5>Contact</h5>
                {data.phone && <p>{data.phone}</p>}
                <h3>You have been invited to join the company</h3>
                <Row>
                    <Button as={Col}
                        className="m-3"
                        variant="primary"
                        onClick={acceptHandler}
                    >Accpet</Button>

                    <Button as={Col}
                        className="m-3"
                        variant="danger"
                        onClick={rejectHandler}
                    >Reject</Button>
                </Row>
            </Card.Body>
        </Card>}
        {!isLoading && error && <InfoComponent {...errorProps} />}
    </Container>
}

ComapnyDetailsComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.object,
    error: PropTypes.string,
    acceptHandler: PropTypes.func.isRequired,
    rejectHandler: PropTypes.func.isRequired
}

export default ComapnyDetailsComponent
