import {
    COMPANY_INVITE_REQUEST,
    COMPANY_INVITE_SUCCESS,
    COMPANY_INVITE_FAILURE,
    COMPANY_INVITE_ACTION_LOADING,
    COMPANY_INVITE_ACCEPT,
    COMPANY_INVITE_ERROR,
    COMPANY_INVITE_REJECT,
    SEND_INVITE_REQUEST,
    SEND_INVITE_SUCCESS,
    SEND_INVITE_FAILURE,
} from '../actions/types'

const initialState = {
    isLoading: false,
    actionLoading: false,
}

const companyInviteReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPANY_INVITE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case COMPANY_INVITE_SUCCESS:
            return {
                ...state,
                data: action.data,
                error: null,
                isLoading: false,
            }
        case COMPANY_INVITE_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            }
        case COMPANY_INVITE_ACTION_LOADING:
            return {
                ...state,
                actionLoading: true,
            }
        case COMPANY_INVITE_ACCEPT:
            return {
                ...state,
                accept: true,
                reject: false,
                actionError: null,
                actionLoading: false
            }
        case COMPANY_INVITE_REJECT:
            return {
                ...state,
                accept: false,
                reject: true,
                actionError: null,
                actionLoading: false
            }
        case COMPANY_INVITE_ERROR:
            return {
                ...state,
                accept: false,
                reject: false,
                actionError: action.actionError,
                actionLoading: false
            }
        case SEND_INVITE_REQUEST:
            return {
                ...state,
                sendInviteLoading: true
            }
        case SEND_INVITE_SUCCESS:
            return {
                ...state,
                sendInviteData: action.sendInviteData,
                sendInviteError: null,
                sendInviteLoading: false
            }
        case SEND_INVITE_FAILURE:
            return {
                ...state,
                sendInviteError: action.sendInviteError,
                sendInviteData: null,
                sendInviteLoading: false
            }
        default:
            return state
    }
}

export default companyInviteReducer
