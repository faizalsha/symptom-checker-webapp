import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { LOGIN_ROUTE } from '../../constants/routesPath';
import Loader from '../loader';
import { checkCompanyAdmin } from '../../redux/actions/companyInviteActions';
import InfoComponent from '../infoComponent';

const ProtectedRoute = ({
  component: Component,
  isAdminRoute,
  computedMatch,
  ...rest
}) => {
  const { isAuthenticated, isLoading, isAdmin } = useSelector(
    (state) => state.auth
  );
  const location = useLocation();

  const { companyId } = computedMatch.params;

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAdminRoute) dispatch(checkCompanyAdmin(companyId));
  }, [isAdmin]);

  const infoProps = {
    variant: 'info',
    title: 'Unauthorized 404',
    message: 'You should not be here',
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoading) {
          return <Loader />;
        } else if (!isAuthenticated) {
          return (
            <Redirect
              to={{ pathname: LOGIN_ROUTE, state: { next: location.pathname } }}
            />
          );
        } else if (isAdminRoute && !isAdmin) {
          return <InfoComponent {...infoProps} />;
        } else return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
