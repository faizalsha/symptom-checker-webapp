import {
    COMPANY_INVITE_REQUEST,
    COMPANY_INVITE_SUCCESS,
    COMPANY_INVITE_FAILURE,
    COMPANY_INVITE_ACTION_LOADING,
    COMPANY_INVITE_ACCEPT,
    COMPANY_INVITE_ERROR,
    COMPANY_INVITE_REJECT,
    COMPANY_INVITE_CLEAN,
    CHECK_ADMIN_REQUEST,
    CHECK_ADMIN_SUCCESS,
    CHECK_ADMIN_FAILURE,
    SEND_INVITE_SUCCESS,
    SEND_INVITE_FAILURE,
    SEND_INVITE_REQUEST,
} from "../actions/types"

const companyDetailsRequest = () => ({ type: COMPANY_INVITE_REQUEST })
const companyDetailsSuccess = data => ({ type: COMPANY_INVITE_SUCCESS, data })
const companyDetailsFailure = error => ({ type: COMPANY_INVITE_FAILURE, error })


const companyInviteRequest = () => ({ type: COMPANY_INVITE_ACTION_LOADING })
const companyInviteAcceptSuccess = data => ({ type: COMPANY_INVITE_ACCEPT, accept: data })
const companyInviteRejectSuccess = data => ({ type: COMPANY_INVITE_REJECT, reject: data })
const errorCompanyInviteAction = error => ({ type: COMPANY_INVITE_ERROR, actionError: error })
const cleanCompanyDetailsReduxAction = () => ({ type: COMPANY_INVITE_CLEAN })

const checkAdminRequest = () => ({ type: CHECK_ADMIN_REQUEST })
const checkAdminSuccess = () => ({ type: CHECK_ADMIN_SUCCESS })
const checkAdminFailure = () => ({ type: CHECK_ADMIN_FAILURE })

const sendInviteRequest = () => ({ type: SEND_INVITE_REQUEST })
const sendInviteSuccess = data => ({ type: SEND_INVITE_SUCCESS, sendInviteData: data })
const sendInviteFailure = error => ({ type: SEND_INVITE_FAILURE, sendInviteError: error })


export {
    companyDetailsRequest,
    companyDetailsSuccess,
    companyDetailsFailure,
    companyInviteRequest,
    companyInviteAcceptSuccess,
    companyInviteRejectSuccess,
    errorCompanyInviteAction,
    cleanCompanyDetailsReduxAction,
    checkAdminRequest,
    checkAdminSuccess,
    checkAdminFailure,
    sendInviteRequest,
    sendInviteSuccess,
    sendInviteFailure,
}
