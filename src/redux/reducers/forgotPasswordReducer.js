import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_CLEAR_SUCCESS,
} from "../actions/types";

const initialState = {
  isLoading: false,
};

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        isLoading: true,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        data: action.data,
        isLoading: false,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        error: action.error,
        isLoading: false,
      };
    case FORGOT_PASSWORD_CLEAR_SUCCESS:
      return {
        ...state,
        data: null
      }
    default:
      return state;
  }
};

export default forgotPasswordReducer;
