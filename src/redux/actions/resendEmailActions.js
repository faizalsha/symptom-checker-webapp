import { sendEmailVerification } from "../../services/emailServices";
import {
  emailVerificationRequest,
  emailVerificationSuccess,
  emailVerificationFailure,
  invalidToken,
} from "../actionCreators/resendEmail";

const sendVerificationMail = token => dispatch => {
  dispatch(emailVerificationRequest());

  sendEmailVerification(token)
    .then((response) =>
      dispatch(emailVerificationSuccess(response))
    )
    .catch((error) =>
      dispatch(emailVerificationFailure(error))
    );
};

const invalidTokenAction = () => dispatch => {
  dispatch(invalidToken());
};

export { sendVerificationMail, invalidTokenAction };
