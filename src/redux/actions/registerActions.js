import {
  registerNewUser,
  verifyUserEmail,
} from "../../services/registerUserService";
import { saveToLocalStorage } from "../../utlis";
import { HTTP_400 } from "../../constants/errorCodes";
import {
  UNEXPECTED_ERROR,
  USER_ALREADY_EXIST,
  TOKEN_KEY,
} from "../../constants/commonConstants";
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
  registerUserClearError,
  verifyEmailRequest,
  verfiyEmailSuccess,
  verifyEmailFailure,
  registerUserClearSuccess
} from "../actionCreators/register";
import { setErrorAction } from "../actionCreators/errors";

/**
 * Handle dispatch while registering a user
 * @param {object} user
 * @param {store.dispatch()} dispatch
 */
export const registerUser = user => dispatch => {
  dispatch(registerUserRequest());
  registerNewUser(user)
    .then((response) =>
      dispatch(registerUserSuccess(response))
    )
    .catch((error) => {
      dispatch(setErrorAction(error))
      if (error === HTTP_400) {
        dispatch(registerUserFailure(USER_ALREADY_EXIST));
      } else {
        dispatch(registerUserFailure(UNEXPECTED_ERROR));
      }
    });
};

/**
 * Handle dispatch action for verifying email address
 * @param {string } token
 * @param {store.dispatch()} dispatch
 */
export const verifyEmail = token => dispatch => {
  dispatch(verifyEmailRequest());
  verifyUserEmail(token)
    .then(({ token }) => {
      saveToLocalStorage(TOKEN_KEY, token);
      dispatch(verfiyEmailSuccess(token));
    })
    .catch((error) =>
      dispatch(verifyEmailFailure(error))
    );
};

/**
 * clear registration error
 * @param {store.dispatch} dispatch
 */
export const clearRegistrationError = () => dispatch => {
  dispatch(registerUserClearError());
};

/**
 * clear success response from redux
 * @param {store.dispatch} dispatch 
 */
export const clearRegistrationSuccess = () => dispatch => {
  dispatch(registerUserClearSuccess())
}
