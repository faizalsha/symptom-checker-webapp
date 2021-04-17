import {
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,
} from "../actions/types";

const resetPasswordRequest = () => ({ type: RESET_PASSWORD_REQUEST });

const resetPasswordSuccess = (response) => ({
    type: RESET_PASSWORD_SUCCESS,
    data: response,
});

const resetPasswordFailure = (error) => ({
    type: RESET_PASSWORD_FAILURE,
    error,
});


export {
    resetPasswordRequest,
    resetPasswordSuccess,
    resetPasswordFailure
}
