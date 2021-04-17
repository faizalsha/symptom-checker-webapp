import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';

const EmployeesComponent = (props) => {
    const { employees, handleItemClick, addMoreEmployee } = props

    return <Container>
        <h2 className="text-center m-3">Employees</h2>
        <Button className="mb-1" onClick={addMoreEmployee}>Add more employeee</Button>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => (
                    <tr key={index} onClick={() => handleItemClick(index)}>
                        <td>{index + 1}</td>
                        <td>{employee.user.email}</td>
                        <td>{employee.user.first_name}</td>
                        <td>{employee.user.last_name}</td>
                        <td>{employee.is_company_admin ? 'Admin' : 'Employee'}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Container>
}

export default EmployeesComponent
