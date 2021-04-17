import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { clearLoginError, loginUser } from '../../redux/actions/loginActions';
import LoginComponent from './loginComponent';
import { HOME_ROUTE } from '../../constants/routesPath';
import Loader from '../loader';
import { clearError } from '../../redux/actions/errorActions';
import { displayErrors } from '../../utlis';

const Login = ({ setLoading }) => {
  // state to keep user credential filled in form
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  /**
   * useDispatch hook for dispatching the api result to redux store
   */
  const dispatch = useDispatch();

  const history = useHistory();
  const { state } = history.location;
  /**
   * useSelector hook for reading data from the state (loginUser slice)
   */
  const { isLoading, isAuthenticated } = useSelector((state) => state.auth);

  const { email, password } = credentials;

  const errorsSelector = useSelector((state) => state.errors);

  const { allErrors } = errorsSelector;

  /**
   * Handling loader state
   */
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    displayErrors(allErrors);
    return () => dispatch(clearError())
  }, [allErrors]);
  /**
   * handling onChange event on input fields
   */
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setCredentials({
      ...credentials,
      [id]: value,
    });
  };

  /**
   * handling user login form submission with default validation
   * provided by the react-bootstrap Form
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.stopPropagation();
    } else {
      if (password.trim().length === 0) return;
      dispatch(loginUser(email, password));
    }
  };

  const handleFocus = () => {
    dispatch(clearLoginError());
  };
  // Redirect user to home page if already logged in.
  if (isAuthenticated) {
    if (state && state.next) {
      return <Redirect to={state.next} />;
    }
    return <Redirect to={HOME_ROUTE} />;
  }

  const propsToPass = {
    email,
    password,
    handleChange,
    handleSubmit,
    handleFocus,
  };
  return <LoginComponent {...propsToPass} />;
};

Login.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

export default Loader(Login);
