import { FORGOT_PASSWORD_ENDPOINT } from "../constants/apiConstants";
import { postData } from "./httpService";

/**
 * Send forgot password email
 * @param {email} email
 */
export const sendForgotPasswordLink = (email) => {
  return postData(FORGOT_PASSWORD_ENDPOINT, email);
};
