import { COMPANIES_RESOURCE, JOINED_COMPANIES_ENDPOINT, MY_COMPANIES_ENDPOINT, QUESTIONNAIRE } from "../constants/apiConstants"
import { getCurrentUserToken } from "../utlis"
import { getAuthResponse, postAuthData } from "./httpService"
import { REGISTER_COMPANY_ENDPOINT } from "../constants/apiConstants"
import { postAuthFormData } from "./httpService"

const fetchMyCompanies = () => {
    const token = getCurrentUserToken()
    return getAuthResponse(MY_COMPANIES_ENDPOINT, token)
}

const fetchMyEmployee = companyId => {
    const token = getCurrentUserToken()
    return getAuthResponse(`${COMPANIES_RESOURCE}/${companyId}/employee/`, token)
}

const fetchJoinedCompanies = () => {
    const token = getCurrentUserToken()
    return getAuthResponse(JOINED_COMPANIES_ENDPOINT, token);
}

const registerCompany = (companyDetails) => {
    const token = getCurrentUserToken()
    return postAuthFormData(REGISTER_COMPANY_ENDPOINT, companyDetails, token)
}

const fetchCompanyQuestionnaire = (companyId) => {
    const token = getCurrentUserToken()
    return getAuthResponse(`${COMPANIES_RESOURCE}/${companyId}/questionnaire/`, token)
}

const fetchQuestionnaireDetails = questionnaireId => {
    const token = getCurrentUserToken()
    return getAuthResponse(`${QUESTIONNAIRE}${questionnaireId}/`, token)
}

const addQuestionnaireToCompany = questionnaireId => {
    const token = getCurrentUserToken()
    const data = { 'questionnaire': questionnaireId }
    return postAuthData(`${COMPANIES_RESOURCE}/${questionnaireId}/questionnaire/`, data, token)
}

export {
    fetchMyCompanies,
    fetchMyEmployee,
    fetchJoinedCompanies,
    registerCompany,
    fetchCompanyQuestionnaire,
    fetchQuestionnaireDetails,
    addQuestionnaireToCompany,
}
