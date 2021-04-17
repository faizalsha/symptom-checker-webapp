import {
    REGISTER_COMPANY_REQUEST,
    REGISTER_COMPANY_SUCCESS,
    REGISTER_COMPANY_FAILURE,
    REGISTER_COMPANY_CLEAR
} from "../actions/types";

const initialState = {
    isLoading: false
}

const companyRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_COMPANY_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case REGISTER_COMPANY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data,
            }
        case REGISTER_COMPANY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        case REGISTER_COMPANY_CLEAR:
            return initialState
        default:
            return state
    }
}

export default companyRegisterReducer
