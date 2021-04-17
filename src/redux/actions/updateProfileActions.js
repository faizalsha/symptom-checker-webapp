import { updateUser, updateUserPassword } from "../../services/authService";
import { getCurrentUserToken } from "../../utlis";
import {
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  updatePasswordRequest,
  updatePasswordSuccess,
  updatePasswordFailure
} from "../actionCreators/updateProfile";
import { setError } from "./errorActions";

/**
 * Handle dispatch for updating user profile
 * @param {Object} updatedUser
 * @param {store.dispatch} dispatch
 */
const updateProfile = (updatedUser, id) => dispatch => {
  dispatch(updateUserRequest());
  const token = getCurrentUserToken();
  updateUser(updatedUser, id, token)
    .then((response) =>
      dispatch(updateUserSuccess(response))
    )
    .catch((error) => {
      dispatch(setError(error))
      dispatch(updateUserFailure(error))
    }
    );
};

const updatePassword = (currentPassword, newPassword) => dispatch => {
  dispatch(updatePasswordRequest())
  updateUserPassword(currentPassword, newPassword)
    .then(res => {
      dispatch(updatePasswordSuccess(res))
    })
    .catch(error => {
      dispatch(setError(error))
      dispatch(updatePasswordFailure(error))
    })
}

export { updateProfile, updatePassword };
