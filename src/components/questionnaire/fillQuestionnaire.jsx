import React from 'react';
import { Form, Container, ListGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Question from './question';

const FillQuestionnaire = ({
  title,
  description,
  questions,
  onChangeHandler,
  onSubmitHandler,
}) => {
  return (
    <Container className="w-50">
      <h3>Questionnaire - {title}</h3>
      <p>Description - {description}</p>
      <p>Questions are as below:-</p>
      <Form onSubmit={onSubmitHandler}>
        <ListGroup>
          {questions.map((question, index) => {
            return (
              <Question
                pos={index + 1}
                key={question.id}
                question={question}
                onChangeHandler={onChangeHandler}
              />
            );
          })}
        </ListGroup>
        <Button className="mt-2 px-5" type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

FillQuestionnaire.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
};

export default FillQuestionnaire;
