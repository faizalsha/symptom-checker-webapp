import {
    COMPANY_DETAILS_ENDPOINT,
    ACCEPT_COMPANY_INVITE_ENDPOINT,
    REJECT_COMPANY_INVITE_ENDPOINT,
    CHECK_COMPANY_ADMIN_ENDPOINT,
    COMPANIES_RESOURCE,
} from "../constants/apiConstants"
import { getCurrentUserToken } from "../utlis"
import { getAuthResponse, postAuthData } from "./httpService"

const fetchCompanyDetails = (inviteToken, token) => {
    return getAuthResponse(`${COMPANY_DETAILS_ENDPOINT}/${inviteToken}/`, token)
}

const fetchAcceptCompanyInvite = (inviteToken, token) => {
    return postAuthData(ACCEPT_COMPANY_INVITE_ENDPOINT, { token: inviteToken }, token)
}

const fetchRejectCompanyInvite = (inviteToken, token) => {
    return postAuthData(REJECT_COMPANY_INVITE_ENDPOINT, { token: inviteToken }, token)
}

const fetchIsAdmin = companyId => {
    //TODO: should be changed to all places.
    const token = getCurrentUserToken()
    return getAuthResponse(`${CHECK_COMPANY_ADMIN_ENDPOINT}${companyId}/`, token)
}

const fetchSendInvite = (companyId, data) => {
    const token = getCurrentUserToken()
    return postAuthData(`${COMPANIES_RESOURCE}/${companyId}/create-company-invite/`, data, token)
}

const fetchCompanyInvites = companyId => {
    const token = getCurrentUserToken()

    return getAuthResponse(`${COMPANIES_RESOURCE}/${companyId}/company-invite/`, token)
}

export {
    fetchCompanyDetails,
    fetchAcceptCompanyInvite,
    fetchRejectCompanyInvite,
    fetchIsAdmin,
    fetchSendInvite,
    fetchCompanyInvites,
}
