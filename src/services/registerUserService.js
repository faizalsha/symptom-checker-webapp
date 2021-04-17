import { postData, getResponse } from "./httpService";
import { VERIFY_EMAIL_ENDPOINT } from "../constants/apiConstants";
import { USER_ENDPOINT } from "../constants/apiConstants";

/**
 * Register new user
 * @param {object} user
 */
//TOOD: use arrow function
export function registerNewUser(user) {
  return postData(USER_ENDPOINT, user);
}

/**
 * verify user email
 * @param {string} token
 */
export const verifyUserEmail = (token) => {
  return getResponse(`${VERIFY_EMAIL_ENDPOINT}/${token}/`);
};
