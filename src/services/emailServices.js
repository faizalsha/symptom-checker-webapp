import { postAuthData } from "./httpService";
import { RESEND_MAIL_ENDPOINT } from "../constants/apiConstants";

const sendEmailVerification = (token) => {
  return postAuthData(RESEND_MAIL_ENDPOINT, null, token);
};

export { sendEmailVerification };
