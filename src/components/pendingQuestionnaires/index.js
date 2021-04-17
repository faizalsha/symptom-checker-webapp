import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPendingQuestionnaires } from '../../redux/actions/pendingQuestionnaireActions';
import Loader from '../loader';
import ShowQuestionnaires from './showQuestionnaires';
import { displayErrors } from '../../utlis';

const PendingQuestionnaire = ({ setLoading }) => {
  // Fetching isLoading, error and companyQuestionnaires from redux state.
  const {
    isLoading,
    error,
    companyQuestionnaires,
    mandatoryQuestionnaires,
  } = useSelector((state) => state.pending);

  // Fetching user's token.
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // Fetching Pending Questionnaires on component mounting.
  useEffect(() => {
    dispatch(getPendingQuestionnaires(token));
  }, []);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  if (error) displayErrors(error);

  return (
    <>
      {mandatoryQuestionnaires && (
        <ShowQuestionnaires
          heading={'Mandatory Questionnaires'}
          questionnaires={mandatoryQuestionnaires}
        />
      )}
      {companyQuestionnaires && (
        <ShowQuestionnaires
          heading={'Pending Questionnaires'}
          questionnaires={companyQuestionnaires}
        />
      )}
    </>
  );
};

export default Loader(PendingQuestionnaire);
