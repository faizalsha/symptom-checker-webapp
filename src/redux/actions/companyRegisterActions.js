import { registerCompany } from "../../services/companiesService";
import {
    registerCompanyRequest,
    registerCompanySuccess,
    registerCompanyFailure,
    registerCompanyClear
} from "../actionCreators/companyRegister";
import { setError } from "./errorActions";


const registerNewCompany = (companyDetails) => dispatch => {
    dispatch(registerCompanyRequest())
    registerCompany(companyDetails).then(response => {
        dispatch(registerCompanySuccess(response))
    }).catch(error => {
        dispatch(setError(error))
        dispatch(registerCompanyFailure(error))
    })
}

const clearRegisterCompanyRedux = () => dispatch => {
    dispatch(registerCompanyClear())
}

export { registerNewCompany, clearRegisterCompanyRedux };
