import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = ({
  company,
  companyId,
  questionnaireTitle,
  questionnaireId,
}) => {
  const to = companyId
    ? `/surveys/company/${companyId}/questionnaire/${questionnaireId}`
    : `/surveys/questionnaire/${questionnaireId}`;

  return (
    <li>
      <Link to={to}>
        {company ? <>{company} - </> : <></>}
        {questionnaireTitle}
      </Link>
    </li>
  );
};

ListItem.propTypes = {
  company: PropTypes.string,
  companyId: PropTypes.number,
  questionnaireId: PropTypes.number.isRequired,
  questionnaireTitle: PropTypes.string.isRequired,
};

export default ListItem;
