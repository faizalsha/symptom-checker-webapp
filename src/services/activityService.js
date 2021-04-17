import {
  QUESTIONNAIRE_SUBMISSIONS,
  QUESTIONNAIRE_QUESTION_RESPONSES,
} from '../constants/apiConstants';

import { getAuthResponse } from './httpService';

/**
 * Service Function to fetch user's questionnaire responses.
 * @param {String} token
 * @returns Questionnaire Responses of the User.
 */
export const fetchQuestionnaireResponses = (token) => {
  return getAuthResponse(`${QUESTIONNAIRE_SUBMISSIONS}`, token);
};

/**
 * Function to fetch particular questionnaire response.
 * @param {Integer} questionnaireResponseId
 * @param {String} token
 * @returns A particular questionnaire response.
 */
export const fetchQuestionnaireResponse = (questionnaireResponseId, token) => {
  return getAuthResponse(
    `${QUESTIONNAIRE_SUBMISSIONS}${questionnaireResponseId}/`,
    token
  );
};

/**
 * Service Method to fetch question responses.
 * @param {Number} questionnaireResponseId
 * @param {String} token
 * @returns Question Responses of a given questionnaireResponseId.
 */
export const fetchQuestionResponses = (questionnaireResponseId, token) => {
  return getAuthResponse(
    `${QUESTIONNAIRE_QUESTION_RESPONSES}?questionnaire_response=${questionnaireResponseId}`,
    token
  );
};
