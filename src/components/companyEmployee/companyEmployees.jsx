import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getMyEmployee } from '../../redux/actions/employeeActions';
import { clearError } from '../../redux/actions/errorActions';
import { displayErrors } from '../../utlis';
import EmployeesComponent from './employees';

const CompanyEmployee = () => {

    const dispatch = useDispatch()

    const history = useHistory()

    const { companyId } = useParams()

    const { employees } = useSelector(state => state.myEmployees)

    const errorsSelector = useSelector(state => state.errors)

    const { allErrors } = errorsSelector;

    useEffect(() => {
        dispatch(getMyEmployee(companyId))
    }, [])

    useEffect(() => {
        displayErrors(allErrors)
        return () => dispatch(clearError())
    }, [allErrors])

    const handleItemClick = (index) => {
        console.log('item clicked', index)
    }

    const addMoreEmployee = () => {
        history.push(`/companies/${companyId}/send-invite`)
    }

    return <EmployeesComponent
        employees={employees}
        handleItemClick={handleItemClick}
        addMoreEmployee={addMoreEmployee} />
}

export default CompanyEmployee
