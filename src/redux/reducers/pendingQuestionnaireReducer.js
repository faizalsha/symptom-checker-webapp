import {
  PENDING_QUESTIONNAIRES_ERROR,
  PENDING_QUESTIONNAIRES_LOADING,
  PENDING_QUESTIONNAIRES_LOADED,
} from '../actions/types';

const initialState = {
  companyQuestionnaires: null,
  mandatoryQuestionnaires: null,
  isLoading: false,
  error: null,
};

const pendingQuestionnaireReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PENDING_QUESTIONNAIRES_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case PENDING_QUESTIONNAIRES_LOADED:
      return {
        ...state,
        isLoading: false,
        companyQuestionnaires: payload.companyQuestionnaires,
        mandatoryQuestionnaires: payload.mandatoryQuestionnaires,
      };
    case PENDING_QUESTIONNAIRES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default pendingQuestionnaireReducer;
