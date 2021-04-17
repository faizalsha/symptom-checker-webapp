import {
    COMPANY_INVITE_LIST_REQUEST,
    COMPANY_INVITE_LIST_SUCCESS,
    COMPANY_INVITE_LIST_FAILURE,
    COMPANY_INVITE_LIST_CLEAR,
} from "../actions/types"


const companyInviteListRequest = () => ({ type: COMPANY_INVITE_LIST_REQUEST })

const companyInviteListSuccess = data => ({ type: COMPANY_INVITE_LIST_SUCCESS, invites: data })

const companyInviteListFailure = error => ({ type: COMPANY_INVITE_LIST_FAILURE, error })

const companyInviteListClear = () => ({ type: COMPANY_INVITE_LIST_CLEAR })


export {
    companyInviteListRequest,
    companyInviteListSuccess,
    companyInviteListFailure,
    companyInviteListClear,
}
