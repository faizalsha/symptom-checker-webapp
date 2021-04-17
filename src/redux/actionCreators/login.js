import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_CLEAR_ERROR,
    LOG_OUT_USER,
} from "../actions/types";


const loginUserRequest = () => ({ type: LOGIN_USER_REQUEST })

const loginUserSuccess = (token) => ({ type: LOGIN_USER_SUCCESS, token })

const loginUserFailure = (message) => ({
    type: LOGIN_USER_FAILURE,
    loginError: message,
})

const logout = () => ({ type: LOG_OUT_USER })

const loginUserClearError = () => ({ type: LOGIN_USER_CLEAR_ERROR })

export {
    loginUserRequest,
    loginUserSuccess,
    loginUserFailure,
    loginUserClearError,
    logout,
}
