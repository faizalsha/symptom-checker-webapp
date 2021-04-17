import {
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE,
} from "../actions/types";

const loadUserRequest = () => ({ type: LOAD_USER_REQUEST })

const loadUserSuccess = (response) => ({
    type: LOAD_USER_SUCCESS,
    userDetails: response,
    token: response.token,
})

const loadUserFailure = (message) => ({
    type: LOAD_USER_FAILURE,
    loadUserError: message,
})

export {
    loadUserRequest,
    loadUserSuccess,
    loadUserFailure
}
