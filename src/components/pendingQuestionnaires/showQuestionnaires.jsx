import React from 'react';
import { Container } from 'react-bootstrap';
import ListItem from './listItem';

const ShowQuestionnaires = ({ heading, questionnaires }) => {
  return (
    <Container className="w-50">
      <h1>{heading}</h1>
      {questionnaires.length === 0 && <p>Empty</p>}
      <ul>
        {questionnaires.map((questionnaires) => {
          const {
            id,
            company_name,
            company,
            questionnaire_title,
            questionnaire,
          } = questionnaires;
          return (
            <ListItem
              key={id}
              company={company_name}
              companyId={company}
              questionnaireTitle={questionnaire_title}
              questionnaireId={questionnaire}
            />
          );
        })}
      </ul>
    </Container>
  );
};

export default ShowQuestionnaires;
