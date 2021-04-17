import {
    companyInviteListRequest,
    companyInviteListSuccess,
    companyInviteListFailure,
    companyInviteListClear,
} from "../actionCreators/companyInviteList";
import { setError } from "./errorActions";
import { fetchCompanyInvites } from "../../services/companyInviteService"


const getCompanyInvites = companyId => dispatch => {
    dispatch(companyInviteListRequest())
    fetchCompanyInvites(companyId)
        .then(res => {
            dispatch(companyInviteListSuccess(res))
        })
        .catch(error => {
            dispatch(setError(error))
            dispatch(companyInviteListFailure(error))
        })
}

const clearCompanyInvites = () => dispatch => {
    dispatch(companyInviteListClear())
}

export { getCompanyInvites, clearCompanyInvites }
