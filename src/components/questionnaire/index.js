import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { QUESTIONNAIRE_SUBMISSION } from '../../constants/routesPath';
import {
  submitQuestionnaire,
  getQuestionnaireWithQuestions,
} from '../../redux/actions/questionnaireAction';
import Loader from '../loader';
import FillQuestionnaire from './fillQuestionnaire';
import { displayErrors } from '../../utlis';

const Questionnaire = ({ setLoading }) => {
  const dispatch = useDispatch();
  // Getting questionId and companyId from the URL Parameters.
  const { questionnaireId, companyId } = useParams();
  // Fetching isLoading, error, questionnaire from the redux state.
  const { isLoading, error, questionnaire } = useSelector(
    (state) => state.questionnaire
  );

  const history = useHistory();
  // Fetching out the user's auth token.
  const { token } = useSelector((state) => state.auth);

  const [response, setResponse] = useState({});

  // Fetching questionnaire from server on mounting.
  useEffect(() => {
    dispatch(getQuestionnaireWithQuestions(questionnaireId, token));
  }, []);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  /**
   * Function for handling changes done by user.
   * @param {Object} param0
   */
  const onChangeHandler = ({ target: { name, value } }) => {
    setResponse({ ...response, [name]: value });
  };
  /**
   * Function for handling the submit event by th user
   * @param {Object} e
   */
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let responseData = {
      questionnaire: questionnaireId,
      company: companyId,
      question_responses: [],
    };
    responseData.question_responses = Object.keys(response).map((id) => {
      return {
        question: id,
        user_input: response[id],
      };
    });
    dispatch(submitQuestionnaire(responseData, token));
    history.push(QUESTIONNAIRE_SUBMISSION);
  };

  if (error) displayErrors(error);

  return (
    <>
      {questionnaire && (
        <FillQuestionnaire
          {...questionnaire.questionnaire}
          questions={questionnaire.questions}
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}
        />
      )}
    </>
  );
};

export default Loader(Questionnaire);
