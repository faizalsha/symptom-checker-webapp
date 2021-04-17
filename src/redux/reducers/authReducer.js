import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_CLEAR_ERROR,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  LOG_OUT_USER,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_FAILURE,
  UPDATE_TOKEN,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  CHECK_ADMIN_REQUEST,
  CHECK_ADMIN_SUCCESS,
  CHECK_ADMIN_FAILURE,
} from "../actions/types";

import { TOKEN_KEY } from '../../constants/commonConstants'

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  token: localStorage.getItem(TOKEN_KEY)
};

/**
 * Action Reducer
 * 1. LOGIN_USER_REQUEST
 * 2. LOGIN_USER_SUCCESS
 * 3. LOGIN_USER_FAILURE
 * 4. LOGIN_USER_CLEAR_ERROR
 * 5. LOAD_USER_REQUEST,
 * 6. LOAD_USER_SUCCESS,
 * 7. LOAD_USER_FAILURE,
 * 8. UPDATE_USER_REQUEST,
 * 9. UPDATE_USER_SUCCESS,
 *10. UPDATE_USER_FAILURE,
 *11. LOG_OUT_USER
 * @param {Object} state
 * @param {Redux action} action
 */
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: localStorage.getItem(TOKEN_KEY)
      }
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.token,
        isAuthenticated: true,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        loginError: action.loginError,
      };

    case LOGIN_USER_CLEAR_ERROR:
      return {
        ...state,
        loginError: null,
      };
    case LOAD_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userDetails: action.userDetails,
        token: action.token,
        isAuthenticated: true,
      };
    case LOAD_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        loadUserError: action.loadUserError,
      };
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userDetails: action.userDetails,
        updateSuccess: action.updateSuccess,
        updateProfileError: null,
      };

    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        updateProfileError: action.updateProfileError,
        updateSuccess: null,
      };

    case LOG_OUT_USER:
      return {
        isLoading: false,
        isAuthenticated: false,
        token: null,
      };

    case VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        verifyEmailError: action.verifyEmailError,
      };
    case CHECK_ADMIN_REQUEST:
      return {
        ...state,
        isAdminLoading: true
      }
    case CHECK_ADMIN_SUCCESS:
      return {
        ...state,
        isAdminLoading: false,
        isAdmin: true,
      }
    case CHECK_ADMIN_FAILURE:
      return {
        ...state,
        isAdminLoading: false,
        isAdmin: false,
      }

    case UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasPasswordUpdated: action.hasPasswordUpdated,
        passwordUpdateError: null
      }
    case UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
        passwordUpdateError: action.passwordUpdateError,
        hasPasswordUpdated: null
      }
    default:
      return state;
  }
};

export default authReducer;
