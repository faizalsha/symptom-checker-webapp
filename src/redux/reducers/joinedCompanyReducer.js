import {
    JOINED_COMPANY_LIST_REQUEST,
    JOINED_COMPANY_LIST_SUCCESS,
    JOINED_COMPANY_LIST_FAILURE,
    JOINED_COMPANY_LIST_CLEAR,
} from "../actions/types"

const initialState = {
    companies: []
}

const joinedCompaniesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOINED_COMPANY_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case JOINED_COMPANY_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                companies: action.companies
            }
        case JOINED_COMPANY_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case JOINED_COMPANY_LIST_CLEAR:
            return initialState

        default:
            return state
    }
}

export default joinedCompaniesListReducer
