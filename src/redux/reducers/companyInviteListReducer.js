import {
    COMPANY_INVITE_LIST_REQUEST,
    COMPANY_INVITE_LIST_SUCCESS,
    COMPANY_INVITE_LIST_FAILURE,
    COMPANY_INVITE_LIST_CLEAR,
} from "../actions/types"


const initialState = {
    invites: []
}

const companyInviteListReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPANY_INVITE_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case COMPANY_INVITE_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                invites: action.invites
            }

        case COMPANY_INVITE_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case COMPANY_INVITE_LIST_CLEAR:
            return initialState
        default:
            return state
    }
}

export default companyInviteListReducer


