import {
  questionnaireClear,
  questionnaireError,
  questionnaireLoaded,
  questionnaireLoading,
  questionnaireSubmissionError,
  questionnaireSubmissionRequest,
  questionnaireSubmitted,
  tipsError,
  tipsLoaded,
  tipsLoading,
} from '../actionCreators/questionnaire';

import {
  fetchQuestionnaire,
  fetchQuestions,
  fetchTips,
  postResponse,
} from '../../services/questionnaireService';

/**
 * Function to Fetch Questionnaire Along with their Questions.
 * @param {Integer} questionnaireId
 * @param {String} token
 */
export const getQuestionnaireWithQuestions = (questionnaireId, token) => (
  dispatch
) => {
  dispatch(questionnaireLoading());
  Promise.all([
    fetchQuestionnaire(questionnaireId, token),
    fetchQuestions(questionnaireId, token),
  ])
    .then(([questionnaire, questions]) =>
      dispatch(
        questionnaireLoaded({
          questionnaire,
          questions,
        })
      )
    )
    .catch((err) => dispatch(questionnaireError(err)));
};

export const clearQuestionnaireWithQuestions = () => dispatch => {
  dispatch(questionnaireClear())
}

/**
 * Function to submit the questionnaire.
 * @param {Object} data
 * @param {String} token
 */
export const submitQuestionnaire = (data, token) => (dispatch) => {
  dispatch(questionnaireSubmissionRequest());
  postResponse(data, token)
    .then((res) => dispatch(questionnaireSubmitted(res)))
    .catch((err) => dispatch(questionnaireSubmissionError(err)));
};

export const getTips = (responseId, token) => (dispatch) => {
  dispatch(tipsLoading());
  fetchTips(responseId, token)
    .then((res) => dispatch(tipsLoaded(res)))
    .catch((err) => dispatch(tipsError(err)));
};
