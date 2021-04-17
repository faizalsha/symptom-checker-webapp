import {
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  forgotPasswordClearSuccess,
} from "../actionCreators/forgotPassword"

import { sendForgotPasswordLink } from "../../services/forgotPasswordService";
import { setErrorAction } from "../actionCreators/errors";

/**
 * handle dispatch event for forgot password view
 * @param {dictionary} email
 * @param {store.dispatch()} dispatch
 */
const forgotPassword = (email) => dispatch => {
  dispatch(forgotPasswordRequest());
  sendForgotPasswordLink(email)
    .then((response) =>
      dispatch(forgotPasswordSuccess(response))
    )
    .catch((error) => {
      dispatch(setErrorAction(error))
      dispatch(forgotPasswordFailure(error))
    });
};

const clearForgotPasswordSuccess = () => dispatch => {
  dispatch(forgotPasswordClearSuccess());
}

export {
  forgotPassword,
  clearForgotPasswordSuccess,
};
