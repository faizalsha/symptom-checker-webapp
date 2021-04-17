import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';

const CompaniesComponent = (props) => {
    const { companies, handleItemClick, myCompanies, title } = props

    return <Container>
        <h2 className="text-center m-3">{title}</h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>State</th>
                    <th>Phone</th>
                    {myCompanies && <th>Verification status</th>}
                </tr>
            </thead>
            <tbody>
                {companies.map((company, index) => (
                    <tr className="cursor-pointer" key={index} onClick={() => handleItemClick(index)}>
                        <td>{companies.length - index}</td>
                        <td>{company.name}</td>
                        <td>{company.state}</td>
                        <td>{company.phone}</td>
                        {myCompanies && <td>{company.is_verified ? 'Verifed' : 'Pending'}</td>}
                    </tr>
                )).reverse()}
            </tbody>
        </Table>
    </Container>
}

export default CompaniesComponent
