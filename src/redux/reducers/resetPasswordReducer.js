import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from "../actions/types";

const initialState = {
  isLoading: false,
};

const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: null,
        isLoading: false,
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default resetPasswordReducer;
