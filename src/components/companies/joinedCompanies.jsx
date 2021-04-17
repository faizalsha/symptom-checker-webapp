import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { MY_COMPANIES_ROUTE } from '../../constants/routesPath';
import { getJoinedCompanies, getMyCompanies } from '../../redux/actions/companiesListActions';
import { clearError } from '../../redux/actions/errorActions';
import { displayErrors } from '../../utlis';
import Loader from '../loader';
import CompaniesComponent from './companies';

const JoinedCompanies = (props) => {
    const { setLoading } = props;

    const dispatch = useDispatch();

    const history = useHistory();

    const { companies, isLoading } = useSelector(
        (state) => state.joinedCompaniesList
    );

    const errorsSelector = useSelector((state) => state.errors);

    const { allErrors } = errorsSelector;

    useEffect(() => {
        displayErrors(allErrors);
        return () => dispatch(clearError())
    }, [allErrors]);

    useEffect(() => {
        dispatch(getJoinedCompanies());
    }, []);

    useEffect(() => {
        setLoading(isLoading);
    }, [isLoading]);

    const handleItemClick = (index) => {
        // TODO: this has to be updated
        // history.push(`${MY_COMPANIES_ROUTE}/${index + 1}`);
    };

    return (
        <CompaniesComponent
            companies={companies}
            handleItemClick={handleItemClick}
            title="Joined Companies"
            myCompanies={false}
        />
    );
};

export default Loader(JoinedCompanies);
