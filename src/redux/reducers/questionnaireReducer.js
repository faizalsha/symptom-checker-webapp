import {
  QUESTIONNAIRE_ERROR,
  QUESTIONNAIRE_LOADING,
  QUESTIONNAIRE_LOADED,
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
  questionnaire: null,
};

/**
 * Function to update the state in accordance with action type.
 * @param {Object} state
 * @param {Object} action
 * @returns updated state of the questionnaire slice.
 */
const questionnaireReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case QUESTIONNAIRE_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case QUESTIONNAIRE_LOADED:
      return {
        ...state,
        isLoading: false,
        questionnaire: payload,
      };
    case QUESTIONNAIRE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default questionnaireReducer;
