import {
  QUESTIONNAIRE_SUBMISSION_ERROR,
  QUESTIONNAIRE_SUBMISSION_REQUEST,
  QUESTIONNAIRE_SUBMITTED,
  QUESTIONNAIRE_SUBMISSION_CLEAR,
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
  response: null,
};

/**
 * Function to update the state in accordance to action type.
 * @param {Object} state
 * @param {Object} action
 * @returns updated state of the questionnaire submission slice.
 */
const questionnaireSubmissionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case QUESTIONNAIRE_SUBMISSION_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case QUESTIONNAIRE_SUBMITTED:
      return {
        ...state,
        isLoading: false,
        response: payload,
      };
    case QUESTIONNAIRE_SUBMISSION_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case QUESTIONNAIRE_SUBMISSION_CLEAR:
      console.log('<<<<<<<<<<<<<<<<<<')
      return initialState;
    default:
      return state;
  }
};

export default questionnaireSubmissionReducer;
