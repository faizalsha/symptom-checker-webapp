import {
  QUESTIONNAIRE_ERROR,
  QUESTIONNAIRE_LOADING,
  QUESTIONNAIRE_LOADED,
  QUESTIONNAIRE_SUBMISSION_REQUEST,
  QUESTIONNAIRE_SUBMITTED,
  QUESTIONNAIRE_SUBMISSION_ERROR,
  QUESTIONNAIRE_SUBMISSION_CLEAR,
  TIP_ERROR,
  TIP_LOADED,
  TIP_LOADING,
} from '../actions/types';

export const questionnaireLoading = () => ({ type: QUESTIONNAIRE_LOADING });

export const questionnaireLoaded = (payload) => ({
  type: QUESTIONNAIRE_LOADED,
  payload,
});

export const questionnaireError = (payload) => ({
  type: QUESTIONNAIRE_ERROR,
  payload,
});

export const questionnaireSubmissionRequest = () => ({
  type: QUESTIONNAIRE_SUBMISSION_REQUEST,
});

export const questionnaireSubmitted = (payload) => ({
  type: QUESTIONNAIRE_SUBMITTED,
  payload,
});

export const questionnaireSubmissionError = (payload) => ({
  type: QUESTIONNAIRE_SUBMISSION_ERROR,
  payload,
});

export const questionnaireClear = () => ({ type: QUESTIONNAIRE_SUBMISSION_CLEAR })

export const tipsLoading = () => ({ type: TIP_LOADING });

export const tipsLoaded = (payload) => ({ type: TIP_LOADED, payload });

export const tipsError = (payload) => ({ type: TIP_ERROR, payload });
