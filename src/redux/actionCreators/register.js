import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    REGISTER_USER_CLEAR_SUCCESS,
    VERIFY_EMAIL_REQUEST,
    VERIFY_EMAIL_FAILURE,
    REGISTER_USER_CLEAR_ERORR,
    LOGIN_USER_SUCCESS,
} from "../actions/types";


const registerUserRequest = () => ({ type: REGISTER_USER_REQUEST })

const registerUserSuccess = response => ({ type: REGISTER_USER_SUCCESS, data: response })

const registerUserFailure = error => ({
    type: REGISTER_USER_FAILURE,
    error,
})

const registerUserClearError = () => ({ type: REGISTER_USER_CLEAR_ERORR })

const registerUserClearSuccess = () => ({ type: REGISTER_USER_CLEAR_SUCCESS })

const verifyEmailRequest = () => ({ type: VERIFY_EMAIL_REQUEST });

const verfiyEmailSuccess = token => ({ type: LOGIN_USER_SUCCESS, token })

const verifyEmailFailure = error => ({ type: VERIFY_EMAIL_FAILURE, verifyEmailError: error })

export {
    registerUserRequest,
    registerUserSuccess,
    registerUserFailure,
    registerUserClearError,
    registerUserClearSuccess,
    verifyEmailRequest,
    verfiyEmailSuccess,
    verifyEmailFailure
}

