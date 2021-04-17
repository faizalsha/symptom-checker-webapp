import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { MY_COMPANIES_ROUTE } from '../../constants/routesPath';
import { getMyCompanies } from '../../redux/actions/companiesListActions';
import { clearError } from '../../redux/actions/errorActions';
import { displayErrors } from '../../utlis';
import Loader from '../loader';
import CompaniesComponent from './companies';

const MyCompanies = (props) => {
    const { setLoading } = props;

    const dispatch = useDispatch();

    const history = useHistory();

    const { companies, isLoading } = useSelector(
        (state) => state.myCompaniesList
    );

    const errorsSelector = useSelector((state) => state.errors);

    const { allErrors } = errorsSelector;

    useEffect(() => {
        displayErrors(allErrors);
        return () => dispatch(clearError())
    }, [allErrors]);

    useEffect(() => {
        dispatch(getMyCompanies());
    }, []);

    useEffect(() => {
        setLoading(isLoading);
    }, [isLoading]);

    const handleItemClick = (index) => {
        history.push(`${MY_COMPANIES_ROUTE}/${index + 1}`);
    };

    return (
        <CompaniesComponent
            companies={companies}
            handleItemClick={handleItemClick}
            title="My Companies"
            myCompanies={true}
        />
    );
};

export default Loader(MyCompanies);
