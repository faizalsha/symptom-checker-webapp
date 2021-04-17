import { getResponse } from './httpService';

import {
  USER_COUNT,
  COMPANY_COUNT,
  QUESTIONNAIRE_COUNT,
} from '../constants/apiConstants';

export const fetchUserCount = () => {
  return getResponse(USER_COUNT);
};

export const fetchQuestionnaireCount = () => {
  return getResponse(QUESTIONNAIRE_COUNT);
};

export const fetchCompanyCount = () => {
  return getResponse(COMPANY_COUNT);
};
