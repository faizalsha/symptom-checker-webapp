import {
  PENDING_QUESTIONNAIRES,
  QUESTIONNAIRE,
  QUESTIONNAIRE_SUBMIT,
  QUESTIONNAIRE_QUESTIONS,
  MANDATORY_QUESTIONNAIRES,
  TIPS,
  COMPANIES_RESOURCE,
  SURVEYS_RESOURCE,
} from '../constants/apiConstants';
import { getCurrentUserToken } from '../utlis';
import { deleteAuthRequest, getAuthResponse, postAuthData, putAuthRequest } from './httpService';

/**
 * Function for fetching User's Pending questionnaires.
 * @param {String} token
 * @returns function to get pending questionnaires.
 */
export const fetchPendingQuestionnaires = (token) => {
  return getAuthResponse(PENDING_QUESTIONNAIRES, token);
};

/**
 * Function for fetching mandatory qyestionnaires not filled so far.
 * @param {String} token
 * @returns function to get mandatory questionnaires.
 */
export const fetchMandatoryQuestionnaires = (token) => {
  return getAuthResponse(MANDATORY_QUESTIONNAIRES, token);
};

/**
 * Function for accessing a particular questionnaire.
 * @param {Number} questionnaireId
 * @param {String} token
 * @returns questionnaire object.
 */
export const fetchQuestionnaire = (questionnaireId, token) => {
  return getAuthResponse(`${QUESTIONNAIRE}${questionnaireId}/`, token);
};

/**
 * Function for posting user's questionnaire response.
 * @param {Object} data
 * @param {String} token
 * @returns response of the submission.
 */
export const postResponse = (data, token) => {
  return postAuthData(`${QUESTIONNAIRE_SUBMIT}`, data, token);
};

/**
 * Function for fetching questions belonging to a questionnaire.
 * @param {Number} questionnaireId
 * @param {String} token
 * @returns
 */
export const fetchQuestions = (questionnaireId, token) => {
  return getAuthResponse(
    `${QUESTIONNAIRE_QUESTIONS}?questionnaire=${questionnaireId}`,
    token
  );
};

export const fetchTips = (responseId, token) => {
  return getAuthResponse(`${TIPS}${responseId}/`, token);
};


export const fetchAvailableQuestionnaires = (companyId) => {
  const token = getCurrentUserToken()
  return getAuthResponse(`${SURVEYS_RESOURCE}/${companyId}/available-questionnaire/`, token)
}

export const createCompanyQuestionnaire = (companyId, questionnaireId) => {
  const token = getCurrentUserToken()
  const data = { questionnaire: questionnaireId }
  return postAuthData(
    `${COMPANIES_RESOURCE}/${companyId}/questionnaire/`, data, token
  )
}

export const createQuestionnaireRule = (cron, companyId, questionnaireId) => {
  const token = getCurrentUserToken()
  cron['minute'] = '0'
  const data = { 'cron': cron }
  return postAuthData(
    `${COMPANIES_RESOURCE}/${companyId}/questionnaire/${questionnaireId}/rule/`,
    data,
    token
  )
}

export const fetchQuestionnaireRuleList = (companyId, companyQuestionnaireId) => {
  const token = getCurrentUserToken()
  return getAuthResponse(
    `${COMPANIES_RESOURCE}/${companyId}/questionnaire/${companyQuestionnaireId}/rule/`,
    token
  )
}

export const deleteQuestionaireRule = (companyId, companyQuestionnaireId, ruleId) => {
  const token = getCurrentUserToken()
  return deleteAuthRequest(
    `${COMPANIES_RESOURCE}/${companyId}/questionnaire/${companyQuestionnaireId}/rule/${ruleId}/`,
    token
  )
}

export const changeCompanyQuestionnaireState = (companyId, companyQuestionnaireId, state) => {
  const token = getCurrentUserToken()
  const data = { "currently_active": state }
  return putAuthRequest(
    `${COMPANIES_RESOURCE}/${companyId}/questionnaire/${companyQuestionnaireId}/`,
    data,
    token
  )
}
