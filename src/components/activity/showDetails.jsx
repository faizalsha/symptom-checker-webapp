import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Tips from '../questionnaire/tips';
import ShowResponses from './showResponses';

const ShowDetails = () => {
  // Getting activity slice from the store.
  const {
    activity: {
      questionnaireResponse,
      questionnaire,
      questions,
      questionResponses,
    },
  } = useSelector((state) => state.activity);
  return (
    <Container className="w-70">
      <h1>Questionnaire - {questionnaire.title}</h1>
      <h3>Risk Score - {questionnaireResponse.score}</h3>
      <h3>Responses:-</h3>
      <ShowResponses
        questions={questions}
        questionResponses={questionResponses}
      />
      <Tips responseId={questionnaireResponse.id} />
    </Container>
  );
};

export default ShowDetails;
