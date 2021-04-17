import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { acceptCompanyInvite, cleanCompanyDetailsRedux, getCompanyDetails, rejectCompanyInvite } from '../../redux/actions/companyInviteActions';
import InfoComponent from '../infoComponent';
import ComapnyDetails from './companyDetails';

const CompanyDetails = () => {
    const { inviteToken } = useParams()
    const { token } = useSelector(state => state.auth)
    const { isLoading, data, error, accept, reject, actionError } = useSelector(state => state.companyInvite)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCompanyDetails(inviteToken, token))
        return dispatch(cleanCompanyDetailsRedux())
    }, [])

    const acceptHandler = () => {
        dispatch(acceptCompanyInvite(inviteToken, token))
    }

    const rejectHandler = () => {
        dispatch(rejectCompanyInvite(inviteToken, token))
    }

    const propsToPass = {
        isLoading,
        data,
        error,
        acceptHandler,
        rejectHandler
    }
    const acceptProps = {
        variant: "success",
        title: "Success",
        message: "Successfully Joined Company",
    }
    const rejectProps = {
        variant: "info",
        title: "Invite rejected",
        message: "Invite has been rejected",
    }
    const errorProps = {
        variant: "danger",
        title: "Invalid invite",
        message: "Invite token is expired or already used"
    }
    return <>
        <Container>
            {accept && <InfoComponent {...acceptProps} />}
            {reject && <InfoComponent {...rejectProps} />}
            {actionError && <InfoComponent {...errorProps} />}
        </Container>
        {!accept && !reject && !actionError && < ComapnyDetails {...propsToPass} />}
    </>
}

export default CompanyDetails;
