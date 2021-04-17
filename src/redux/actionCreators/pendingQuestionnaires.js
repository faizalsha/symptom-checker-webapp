import {
  PENDING_QUESTIONNAIRES_ERROR,
  PENDING_QUESTIONNAIRES_LOADING,
  PENDING_QUESTIONNAIRES_LOADED,
} from '../actions/types';

export const pendingQuestionnaireLoading = () => ({
  type: PENDING_QUESTIONNAIRES_LOADING,
});

export const pendingQuestionnairesLoaded = (payload) => ({
  type: PENDING_QUESTIONNAIRES_LOADED,
  payload,
});

export const pendingQuestionnaireError = (payload) => ({
  type: PENDING_QUESTIONNAIRES_ERROR,
  payload,
});
