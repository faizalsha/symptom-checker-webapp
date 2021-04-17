import React from 'react';
import { Form, FormGroup, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { TEXT } from '../../constants/commonConstants';

const Question = ({ question, onChangeHandler, disabled, pos }) => {
  const {
    id: questionId,
    text: questionText,
    question_type: questionType,
  } = question;
  return (
    <ListGroup.Item>
      <h6>{pos}. {questionText}</h6>
      {String(questionType) === TEXT ? (
        <FormGroup>
          <Form.Control
            required
            type="text"
            disabled={disabled}
            onChange={onChangeHandler}
            name={questionId}
            placeholder="Your response" />
        </FormGroup>
      ) : (
        <div onChange={onChangeHandler}>
          {question.choices.map((choice) => {
            const { id: choiceId, text: choiceText } = choice;
            return (
              <Form.Check
                key={choiceId}
                type="radio"
                disabled={disabled}
                id={choiceId}
                label={choiceText}
                name={questionId}
                value={choiceText}
                required
              />
            );
          })}
        </div>
      )}
    </ListGroup.Item>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Question.defaultProps = {
  disabled: false
}

export default Question;
