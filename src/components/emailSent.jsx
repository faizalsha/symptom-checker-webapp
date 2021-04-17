import React from "react";
import { Alert, Container } from "react-bootstrap";
import { SUCCESS } from "../constants/componentVariants";

const EmailSent = () => {
  return (
    <Container>
      <Alert variant={SUCCESS}>
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Great! Your email has been successfully registered. An email has been
          sent to your email address with a verification link click on the link
          to verify your email address
        </p>
      </Alert>
    </Container>
  );
};

export default EmailSent;
