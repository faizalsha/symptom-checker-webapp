import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
    FORGOT_PASSWORD_CLEAR_SUCCESS,
} from "../actions/types";

const forgotPasswordRequest = () => ({ type: FORGOT_PASSWORD_REQUEST })

const forgotPasswordSuccess = response => ({ type: FORGOT_PASSWORD_SUCCESS, data: response })

const forgotPasswordFailure = error => ({ type: FORGOT_PASSWORD_FAILURE, error: error })

const forgotPasswordClearSuccess = () => ({ type: FORGOT_PASSWORD_CLEAR_SUCCESS })

export {
    forgotPasswordRequest,
    forgotPasswordSuccess,
    forgotPasswordFailure,
    forgotPasswordClearSuccess,
}
