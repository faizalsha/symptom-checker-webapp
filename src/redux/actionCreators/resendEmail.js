import {
    EMAIL_VERIFICATION_REQUEST,
    EMAIL_VERIFICATION_SUCCESS,
    EMAIL_VERIFICATION_FAILURE,
} from "../actions/types";
import { LOGIN_AGAIN_TO_RESEND } from "../../constants/commonConstants";

const emailVerificationRequest = () => ({ type: EMAIL_VERIFICATION_REQUEST })

const emailVerificationSuccess = response => ({ type: EMAIL_VERIFICATION_SUCCESS, data: response })

const emailVerificationFailure = error => ({ type: EMAIL_VERIFICATION_FAILURE, error })

const invalidToken = () => ({
    type: EMAIL_VERIFICATION_FAILURE,
    error: LOGIN_AGAIN_TO_RESEND,
})

export {
    emailVerificationRequest,
    emailVerificationSuccess,
    emailVerificationFailure,
    invalidToken,
}
