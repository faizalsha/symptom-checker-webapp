import {
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAILURE,
} from "../actions/types";
import { UNEXPECTED_ERROR } from "../../constants/commonConstants";

const updateUserRequest = () => ({ type: UPDATE_USER_REQUEST })

const updateUserSuccess = response => ({
    type: UPDATE_USER_SUCCESS,
    userDetails: response,
    updateSuccess: true,
})

const updateUserFailure = error => ({
    type: UPDATE_USER_FAILURE,
    updateProfileError: UNEXPECTED_ERROR,
})

const updatePasswordRequest = () => ({ type: UPDATE_PASSWORD_REQUEST })

const updatePasswordSuccess = response => ({
    type: UPDATE_PASSWORD_SUCCESS,
    hasPasswordUpdated: true
})

const updatePasswordFailure = error => ({
    type: UPDATE_PASSWORD_FAILURE,
    passwordUpdateError: error
})

export {
    updateUserRequest,
    updateUserSuccess,
    updateUserFailure,
    updatePasswordRequest,
    updatePasswordSuccess,
    updatePasswordFailure,
}
