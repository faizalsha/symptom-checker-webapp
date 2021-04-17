import {
  ACTIVITY_ERROR,
  ACTIVITY_LOADED,
  ACTIVITY_LOADING,
  ACTIVITY_QUESTIONNAIRE_RESPONSES_LOADED,
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
  activity: null,
  questionnaireResponses: null,
};

/**
 * Function to reduce the actions related to activity.
 * @param {Object} state
 * @param {Object} action
 * @returns Updated State of the Activity Slice
 */
const activityReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIVITY_LOADING:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case ACTIVITY_LOADED:
      return {
        ...state,
        isLoading: false,
        activity: payload,
      };
    case ACTIVITY_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case ACTIVITY_QUESTIONNAIRE_RESPONSES_LOADED:
      return {
        ...state,
        isLoading: false,
        questionnaireResponses: payload,
      };
    default:
      return state;
  }
};

export default activityReducer;
