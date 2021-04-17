import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";
import { INFO } from "../constants/componentVariants";

const InfoComponent = ({
  variant,
  title,
  message,
  extra,
}) => {
  return (
    <Alert variant={variant}>
      <Alert.Heading>{title}</Alert.Heading>
      <p>{message}</p>
      <hr />
      {extra && <p className="mb-0">{extra}</p>}
    </Alert>
  );
};

InfoComponent.propType = {
  variant: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  extra: PropTypes.string,
}

InfoComponent.defaulProps = {
  variant: INFO,
  title: "Success",
  message: "",
  extra: ""
}

export default InfoComponent;
