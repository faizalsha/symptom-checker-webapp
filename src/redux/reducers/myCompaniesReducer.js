import {
    MY_COMPANY_LIST_REQUEST,
    MY_COMPANY_LIST_SUCCESS,
    MY_COMPANY_LIST_FAILURE,
    MY_COMPANY_LIST_CLEAR,
} from "../actions/types";

const intialState = {
    companies: []
}

const myCompaniesListReducer = (state = intialState, action) => {
    switch (action.type) {
        case MY_COMPANY_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case MY_COMPANY_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                companies: action.companies
            }
        case MY_COMPANY_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        case MY_COMPANY_LIST_CLEAR:
            return intialState

        default:
            return state
    }
}

export default myCompaniesListReducer
