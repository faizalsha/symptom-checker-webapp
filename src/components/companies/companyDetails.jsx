import React from 'react';
import { Card, Image } from 'react-bootstrap';

const CompanyDetails = (props) => {
    const { company } = props

    return <Card className="text-center">
        {company && <><Card.Header>Company Details</Card.Header>
            <Card.Body>
                {company.logo && <Image src={company.logo} width="150px" height="150px" className="mb-3" roundedCircle />}<br />
                {company.name && <Card.Title>{company.name}</Card.Title>}
                {company.about && <Card.Text>{company.about}</Card.Text>}
                {company.registration_date && <p>{company.registration_date}</p>}
                <h5>Address</h5>
                {company.address && <span>{company.address}, </span>}
                {company.city && <span>{company.city}, </span>}
                {company.state && <span>{company.state}, </span>}
                {company.pincode && <span>{company.pincode} </span>}
                <h5>Contact</h5>
                {company.phone && <p>{company.phone}</p>}
            </Card.Body></>}
    </Card>
}

export default CompanyDetails
