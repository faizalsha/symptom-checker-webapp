import { login } from "../../services/authService";
import { deleteStorageValue, saveToLocalStorage } from "../../utlis";
import { TOKEN_KEY } from "../../constants/commonConstants";
import { HTTP_400 } from "../../constants/errorCodes";
import {
  UNEXPECTED_ERROR,
  WRONG_LOGIN_CREDENTIALS,
} from "../../constants/commonConstants";
import {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  logout,
  loginUserClearError,
} from "../actionCreators/login";
import { setErrorAction } from "../actionCreators/errors";

/**
 * Handle dispatch while loggin in a user
 * @param {string} email
 * @param {string} password
 * @param {store.dispatch()} dispatch
 */
const loginUser = (email, password) => dispatch => {
  dispatch(loginUserRequest());
  login(email, password)
    .then(({ token }) => {
      saveToLocalStorage(TOKEN_KEY, token);
      dispatch(loginUserSuccess(token));
    })
    .catch((error) => {
      dispatch(setErrorAction(error))
      if (error === HTTP_400) {
        dispatch(loginUserFailure(WRONG_LOGIN_CREDENTIALS));
      } else {
        dispatch(loginUserFailure(UNEXPECTED_ERROR));
      }
    });
};

/**
 * log out user and dispatch LOG_OUT_USER
 * @param {store.dispatch} dispatch
 */
const logoutUser = () => dispatch => {
  deleteStorageValue(TOKEN_KEY);
  dispatch(logout());
};

const clearLoginError = () => dispatch => {
  dispatch(loginUserClearError())
}

export { loginUser, logoutUser, clearLoginError };
