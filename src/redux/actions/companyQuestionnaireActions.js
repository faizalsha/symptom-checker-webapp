import { fetchCompanyQuestionnaire } from "../../services/companiesService"
import {
    companyQuestionnaireRequest,
    companyQuestionnaireSuccess,
} from "../actionCreators/companyQuestionnaire"
import { setError } from "./errorActions"

const getCompanyQuestionnaire = companyId => dispatch => {
    dispatch(companyQuestionnaireRequest())
    fetchCompanyQuestionnaire(companyId)
        .then(res => {
            dispatch(companyQuestionnaireSuccess(res))
        })
        .catch(error => {
            dispatch(setError(error))
        })
}

export default getCompanyQuestionnaire
