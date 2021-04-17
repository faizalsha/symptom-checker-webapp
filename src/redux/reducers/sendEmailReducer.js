import {
  EMAIL_VERIFICATION_REQUEST,
  EMAIL_VERIFICATION_SUCCESS,
  EMAIL_VERIFICATION_FAILURE,
} from "../actions/types";

const initialState = {
  isLoading: false,
};

const sendEmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_VERIFICATION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EMAIL_VERIFICATION_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    case EMAIL_VERIFICATION_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default sendEmailReducer;
