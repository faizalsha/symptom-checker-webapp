import React from 'react';
import PropTypes from 'prop-types';

const ShowResponses = ({ questions, questionResponses }) => {
  return (
    <ol>
      {questions.map((question) => {
        const { id, text } = question;
        const { user_input: userInput } = questionResponses.filter(
          (response) => response.question === id
        )[0];
        return (
          <li key={id}>
            <p>{text}</p>
            <p>Ans - {userInput}</p>
          </li>
        );
      })}
    </ol>
  );
};

ShowResponses.propTypes = {
  questions: PropTypes.array,
  questionResponses: PropTypes.array,
};

ShowResponses.defaultProps = {
  questions: [],
  questionResponses: [],
};

export default ShowResponses;
