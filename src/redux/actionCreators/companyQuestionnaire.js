import {
    COMPANY_QUESTIONNAIRE_FAILURE,
    COMPANY_QUESTIONNAIRE_REQUEST,
    COMPANY_QUESTIONNAIRE_SUCCESS,
} from "../actions/types"

const companyQuestionnaireRequest = () => ({ type: COMPANY_QUESTIONNAIRE_REQUEST })

const companyQuestionnaireSuccess = questionnaires => ({
    type: COMPANY_QUESTIONNAIRE_SUCCESS,
    questionnaires
})

const companyQuestionnaireFailure = error => ({
    type: COMPANY_QUESTIONNAIRE_FAILURE,
    error
})

export {
    companyQuestionnaireRequest,
    companyQuestionnaireSuccess,
    companyQuestionnaireFailure,
}
