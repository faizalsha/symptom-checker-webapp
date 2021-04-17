import React from 'react';
import { Link } from 'react-router-dom';
import { QUESTIONNAIRE_ACTIVITY } from '../../constants/routesPath';
import PropTypes from 'prop-types';

const ListItem = ({ id, company, questionnaireTitle, score }) => {
  // If company is null then we are not going to display it to the screen.
  let showCompanyName = null;
  if (company !== null) {
    showCompanyName = <>{company} - </>;
  }
  return (
    <li>
      <Link to={`${QUESTIONNAIRE_ACTIVITY}/${id}`}>
        {showCompanyName}
        {`${questionnaireTitle} --> score ${score}`}
      </Link>
    </li>
  );
};

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  company: PropTypes.string,
  questionnaireTitle: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

ListItem.defaultProps = {
  company: 'null',
};

export default ListItem;
