import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCompanyInvites } from '../../redux/actions/companyInviteListActions';
import { clearError } from '../../redux/actions/errorActions';
import { displayErrors, getStatus } from '../../utlis';

//TODO: this has to be wrapped into Protected Route
const CompanyInvite = () => {

    const dispatch = useDispatch()

    const { companyId } = useParams()

    const { invites } = useSelector(state => state.companyInviteList)

    const errorsSelector = useSelector(state => state.errors)

    const { allErrors } = errorsSelector;

    useEffect(() => {
        dispatch(getCompanyInvites(companyId))
    }, [])

    useEffect(() => {
        displayErrors(allErrors)
        return () => dispatch(clearError())
    }, [allErrors])


    return <Container>
        <h2 className="text-center m-3">Company Invites</h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {invites.map((invite, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{invite.email}</td>
                        <td>{invite.first_name}</td>
                        <td>{invite.last_name}</td>
                        <td>{getStatus(invite.status)}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Container>
}

export default CompanyInvite;
