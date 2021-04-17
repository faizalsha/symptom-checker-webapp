import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionnaireResponses } from '../../redux/actions/activityActions';
import { displayErrors } from '../../utlis';
import Loader from '../loader';
import ListItem from './listItem';

const Activity = ({ setLoading }) => {
  const dispatch = useDispatch();
  // Feting user Token from Auth slice of the store.
  const { token } = useSelector((state) => state.auth);
  // Feting activity Slice(questionnaireResponse) from store.
  const { isLoading, error, questionnaireResponses } = useSelector(
    (state) => state.activity
  );
  // Fetching questionnaire responses made by the user in the past.
  useEffect(() => {
    dispatch(getQuestionnaireResponses(token));
  }, []);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  if (error) displayErrors(error);

  return (
    <>
      {questionnaireResponses && (
        <Container className="w-50">
          <h1>Your Previous Activities</h1>
          <ol>
            {questionnaireResponses.map((questionnaireResponse) => {
              const {
                id,
                company_name,
                questionnaire_title,
                score,
              } = questionnaireResponse;
              return (
                <ListItem
                  key={id}
                  id={id}
                  company={company_name}
                  questionnaireTitle={questionnaire_title}
                  score={score}
                />
              );
            })}
          </ol>
        </Container>
      )}
    </>
  );
};

export default Loader(Activity);
