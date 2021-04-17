import {
  getAuthResponse,
  postAuthData,
  postData,
  putAuthFormData,
} from "./httpService";
import { deleteStorageValue, getCurrentUserToken } from "../utlis";
import { TOKEN_KEY } from "../constants/commonConstants";
import {
  LOGIN_USER_ENDPOINT,
  PROFILE_ENDPOINT,
  RESET_PASSWORD_ENDPOINT,
  USER_ENDPOINT,
  UPDATE_PASSWORD_ENDPOINT
} from "../constants/apiConstants";


/**
 * Login user
 * @param {string} email
 * @param {string} password
 */
const login = (email, password) => {
  return postData(LOGIN_USER_ENDPOINT, { email, password });
};

/**
 * logout user
 * delete user token saved in localstroage
 */
const logout = () => {
  deleteStorageValue(TOKEN_KEY);
};

/**
 * Get current user details while loading <App /> into DOM
 */
const loadUser = (token) => {
  return getAuthResponse(PROFILE_ENDPOINT, token);
};

/**
 * update user profile
 * @param {Object} updatedUser
 * @param {string} token
 */
const updateUser = (updatedUser, userId, token) => {
  return putAuthFormData(`${USER_ENDPOINT}${userId}/`, updatedUser, token);
};

/**
 * Fetch user details given user token
 * @param {string} token
 */
const getUserDetails = (token) => {
  return getAuthResponse(`${PROFILE_ENDPOINT}`, token);
};

const changeUserPassword = (newPassword, paramToken) => {
  const requestPayload = {
    token: paramToken,
    new_password: newPassword,
  };
  return postData(`${RESET_PASSWORD_ENDPOINT}`, requestPayload);
};

const updateUserPassword = (oldPassword, newPassword) => {
  const requestPayload = {
    old_password: oldPassword,
    new_password: newPassword
  }
  const token = getCurrentUserToken()
  return postAuthData(UPDATE_PASSWORD_ENDPOINT, requestPayload, token)
}

export {
  login,
  logout,
  loadUser,
  updateUser,
  getUserDetails,
  changeUserPassword,
  updateUserPassword,
};
