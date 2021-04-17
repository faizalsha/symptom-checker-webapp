import {
  PLEASE_LOGIN_AGAIN,
  TOKEN_KEY,
  UNEXPECTED_ERROR,
} from "../../constants/commonConstants";
import { HTTP_401 } from "../../constants/errorCodes";
import { getUserDetails } from "../../services/authService";
import { deleteStorageValue } from "../../utlis";
import {
  loadUserRequest,
  loadUserSuccess,
  loadUserFailure
} from "../actionCreators/loadUser";



/**
 * Handle dispatch while laoding user details
 * @param {string} email
 * @param {string} password
 * @param {store.dispatch()} dispatch
 */
const loadUser = (token, dispatch) => {
  dispatch(loadUserRequest());
  getUserDetails(token)
    .then((response) =>
      dispatch(loadUserSuccess(response))
    )
    .catch((error) => {
      if (error === HTTP_401) {
        deleteStorageValue(TOKEN_KEY);
        dispatch(loadUserSuccess(PLEASE_LOGIN_AGAIN));
      } else {
        dispatch(loadUserFailure(UNEXPECTED_ERROR));
      }
    });
};

export default loadUser;
