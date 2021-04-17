import {
    fetchCompanyDetails,
    fetchAcceptCompanyInvite,
    fetchRejectCompanyInvite,
    fetchIsAdmin,
    fetchSendInvite,
} from "../../services/companyInviteService"
import {
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
} from "../actionCreators/companyInvite"
import { setError } from "./errorActions"

/**
 * Funtion for handling dispatch event for `companyDetails`
 * @param {string} token 
 */
const getCompanyDetails = (inviteToken, token) => dispatch => {
    dispatch(companyDetailsRequest())
    fetchCompanyDetails(inviteToken, token)
        .then(res => {
            dispatch(companyDetailsSuccess(res))
        })
        .catch(error => {
            //TODO: handle error here to show error msg from backend
            dispatch(companyDetailsFailure(error))
        })
}

const acceptCompanyInvite = (inviteToken, token) => dispatch => {
    dispatch(companyInviteRequest())
    fetchAcceptCompanyInvite(inviteToken, token)
        .then(res => dispatch(companyInviteAcceptSuccess(res)))
        .catch(error => dispatch(errorCompanyInviteAction(error)))
}

const rejectCompanyInvite = (inviteToken, token) => dispatch => {
    dispatch(companyInviteRequest())
    fetchRejectCompanyInvite(inviteToken, token)
        .then(res => dispatch(companyInviteRejectSuccess(res)))
        .catch(error => dispatch(errorCompanyInviteAction(error)))
}

const cleanCompanyDetailsRedux = () => dispatch => {
    dispatch(cleanCompanyDetailsReduxAction())
}

const checkCompanyAdmin = companyId => dispatch => {
    dispatch(checkAdminRequest)
    fetchIsAdmin(companyId)
        .then(res => {
            dispatch(checkAdminSuccess())
        })
        .catch(res => dispatch(checkAdminFailure()))
}

const sendCompanyInvite = (companyId, data) => dispatch => {
    dispatch(sendInviteRequest())
    fetchSendInvite(companyId, data)
        .then(res => dispatch(sendInviteSuccess(res)))
        .catch(error => {
            dispatch(setError(error))
            dispatch(sendInviteFailure(error))
        })
}

export {
    getCompanyDetails,
    acceptCompanyInvite,
    rejectCompanyInvite,
    cleanCompanyDetailsRedux,
    checkCompanyAdmin,
    sendCompanyInvite
}
