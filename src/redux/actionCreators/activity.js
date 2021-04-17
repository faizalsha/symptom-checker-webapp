import {
  ACTIVITY_ERROR,
  ACTIVITY_LOADED,
  ACTIVITY_LOADING,
  ACTIVITY_QUESTIONNAIRE_RESPONSES_LOADED,
} from '../actions/types';

export const activityLoading = () => ({ type: ACTIVITY_LOADING });

export const activityQuestionnaireResponseLoaded = (response) => ({
  type: ACTIVITY_QUESTIONNAIRE_RESPONSES_LOADED,
  payload: response,
});

export const activityError = (response) => ({
  type: ACTIVITY_ERROR,
  payload: response,
});

export const activityLoaded = (payload) => ({
  type: ACTIVITY_LOADED,
  payload,
});
