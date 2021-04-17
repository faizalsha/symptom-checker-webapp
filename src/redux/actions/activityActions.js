import {
  activityError,
  activityLoaded,
  activityLoading,
  activityQuestionnaireResponseLoaded,
} from '../actionCreators/activity';

import {
  fetchQuestionResponses,
  fetchQuestionnaireResponse,
  fetchQuestionnaireResponses,
} from '../../services/activityService';

import {
  fetchQuestionnaire,
  fetchQuestions,
} from '../../services/questionnaireService';

/**
 * Function to fetch Questionnaire Responses
 * @param {String} token
 */
export const getQuestionnaireResponses = (token) => (dispatch) => {
  dispatch(activityLoading());
  fetchQuestionnaireResponses(token)
    .then((res) => dispatch(activityQuestionnaireResponseLoaded(res)))
    .catch((err) => dispatch(activityError(err)));
};

/**
 * Function to get Activity Data.
 * @param {Integer} questionnaireResponseId
 * @param {String} token
 */
export const getActivity = (questionnaireResponseId, token) => (dispatch) => {
  dispatch(activityLoading());
  fetchQuestionnaireResponse(questionnaireResponseId, token)
    .then((questionnaireResponse) => {
      const { questionnaire: questionnaireId } = questionnaireResponse;
      Promise.all([
        fetchQuestionnaire(questionnaireId, token),
        fetchQuestions(questionnaireId, token),
        fetchQuestionResponses(questionnaireResponseId, token),
      ])
        .then(([questionnaire, questions, questionResponses]) => {
          const payload = {
            questionnaireResponse,
            questionnaire,
            questions,
            questionResponses,
          };
          dispatch(activityLoaded(payload));
        })
        .catch((err) => dispatch(activityError(err)));
    })
    .catch((err) => dispatch(activityError(err)));
};
