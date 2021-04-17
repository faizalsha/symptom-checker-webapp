import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_CLEAR_ERORR,
  REGISTER_USER_CLEAR_SUCCESS,
} from "../actions/types";

const initialState = {
  isLoading: false,
};

/**
 * Action reducer
 * 1. REGISTER_USER_REQUEST
 * 2. REGISTER_USER_SUCCESS
 * 3. REGISTER_USER_FAILURE
 * 4. REGISTER_USER_CLEAR_ERORR
 * @param {object} state
 * @param {*} action
 */
const registerUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case REGISTER_USER_CLEAR_ERORR:
      return {
        ...state,
        error: null,
      };
    case REGISTER_USER_CLEAR_SUCCESS:
      return {
        ...state,
        data: null
      }
    default:
      return state;
  }
};

export default registerUserReducer;
