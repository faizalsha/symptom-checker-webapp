import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

import { forgotPassword, clearForgotPasswordSuccess } from "../../redux/actions/forgotPasswordActions";
import ForgotPasswordComponent from "./forgotPasswordComponent";
import Loader from "../loader";
import { displayErrors } from "../../utlis";
import { clearError } from "../../redux/actions/errorActions";

const ForgotPasswordContainer = ({ setLoading }) => {
  // mark validated property
  const [validated, setValidated] = useState(false);

  // user email input
  const [email, setEmail] = useState("");

  // for accessing redux (forgotPassword slice)
  const forgotPasswordSelector = useSelector((state) => state.forgotPassword);

  const errorsSelector = useSelector(state => state.errors)

  const { allErrors } = errorsSelector;

  const { isLoading, data, error } = forgotPasswordSelector;

  // store.dispatch method to be passed as an argument
  const dispatch = useDispatch();

  useEffect(() => {
    return dispatch(clearForgotPasswordSuccess())
  }, [])

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])


  useEffect(() => {
    displayErrors(allErrors)
    return () => dispatch(clearError())
  }, [allErrors])


  /**
   * handle form input changes
   */
  const handleChange = ({ target }) => {
    setEmail(target.value);
  };

  /**
   * handle form submit
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      dispatch(forgotPassword({ email }));
    }
  };

  // grouping all values to be passed as props
  const propToPass = {
    validated,
    email,
    data,
    error,
    handleChange,
    handleSubmit,
  };
  return (
    <Container className="w-50">
      <h2>Forgot password</h2>
      <ForgotPasswordComponent {...propToPass} />
    </Container>
  );
};

ForgotPasswordComponent.propTypes = {
  setLoading: PropTypes.func.isRequired
}

export default Loader(ForgotPasswordContainer);
