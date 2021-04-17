import {
    REGISTER_COMPANY_REQUEST,
    REGISTER_COMPANY_SUCCESS,
    REGISTER_COMPANY_FAILURE,
    REGISTER_COMPANY_CLEAR,
} from "../actions/types";

const registerCompanyRequest = () => ({
    type: REGISTER_COMPANY_REQUEST
})

const registerCompanySuccess = (data) => ({
    type: REGISTER_COMPANY_SUCCESS,
    data
})

const registerCompanyFailure = (error) => ({
    type: REGISTER_COMPANY_FAILURE,
    error,
})

const registerCompanyClear = () => ({ type: REGISTER_COMPANY_CLEAR })

export { registerCompanyRequest, registerCompanySuccess, registerCompanyFailure, registerCompanyClear }
