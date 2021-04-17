import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { MY_COMPANIES_ROUTE } from '../../constants/routesPath';
import CompanyDetails from './companyDetails';

const MyCompanyDetails = () => {

    const { companyId } = useParams()

    const history = useHistory()

    const { companies } = useSelector(state => state.myCompaniesList)

    useEffect(() => {
        if (!companies || companies.length < companyId)
            history.replace(MY_COMPANIES_ROUTE)
    }, [companies])

    const redirectToInvites = () => {
        history.push(`/companies/${companies[companyId - 1].id}/invites`)
    }

    const redirectToEmployees = () => {
        history.push(`/companies/${companies[companyId - 1].id}/employee`)
    }

    const redirectToQuestionnaire = () => {
        history.push(`/companies/my/${companies[companyId - 1].id}/questionnaire`)
    }

    return <Container className="w-50 mt-3">
        {companies.length > 0 && <> <CompanyDetails company={companies[companyId - 1]} />
            <Button className="mr-4 mt-2" onClick={redirectToEmployees}>All Employees</Button>
            <Button className="mr-4 mt-2" onClick={redirectToInvites}>All invites</Button>
            <Button className="mt-2" onClick={redirectToQuestionnaire}>Questionnaires</Button> </>}
    </Container>
}

export default MyCompanyDetails
