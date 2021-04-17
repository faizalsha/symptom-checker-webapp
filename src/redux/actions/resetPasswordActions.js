import { UNEXPECTED_ERROR, BAD_LINK } from "../../constants/commonConstants";
import { HTTP_401 } from "../../constants/errorCodes";
import { changeUserPassword } from "../../services/authService";

import {
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure
} from "../actionCreators/resetPassword"
import { setError } from "./errorActions";

/**
 * Handle reset password dispatch
 * @param {string } password
 * @param {string} token
 * @param {store.dispatch()} dispatch
 */
const resetPassword = (password, paramToken) => dispatch => {
  dispatch(resetPasswordRequest());
  changeUserPassword(password, paramToken)
    .then((response) => {
      dispatch(resetPasswordSuccess(response));
    })
    .catch((error) => {
      dispatch(setError(error))
      dispatch(resetPasswordFailure(error));
    });
};

export { resetPassword };
