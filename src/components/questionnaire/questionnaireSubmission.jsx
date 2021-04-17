import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Loader from '../loader';
import SubmissionResult from './submissionResult';
import { displayErrors } from '../../utlis';

const QuestionnaireSubmission = ({ setLoading }) => {
  // Fetching the isLoading, error and response from the redux state.
  const { isLoading, error, response } = useSelector(
    (state) => state.questionnaireSubmission
  );

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  // By defualt if user directly try to access this url, directly.
  if (isLoading === false && error === null && response === null) {
    return <Redirect to="/" />;
  }

  if (error) displayErrors(error);

  return <>{response && <SubmissionResult response={response} />}</>;
};

export default Loader(QuestionnaireSubmission);
