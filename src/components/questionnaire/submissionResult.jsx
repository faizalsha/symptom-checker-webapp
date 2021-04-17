import React from 'react';
import { Container } from 'react-bootstrap';
import Tips from './tips';

const SubmissionResult = ({ response }) => {
  const { id, msg } = response;
  return (
    <div>
      <Container className="w-50">
        <h2>Your response is Successfully Submitted.</h2>
        <p>Response Message - {msg}</p>
        <p>Your Risk Score is {response['Risk score']}</p>
        <Tips responseId={id} />
      </Container>
    </div>
  );
};

export default SubmissionResult;
