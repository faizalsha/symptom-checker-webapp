import { createCompanyQuestionnaire, fetchAvailableQuestionnaires } from "../../services/questionnaireService"
import {
    addQuestionnaireClear,
    addQuestionnaireRequest,
    addQuestionnaireSuccess,
    availableQuestionnaireRequest,
    availableQuestionnaireSuccess,
} from "../actionCreators/availableQuestionnaire"

import { setError } from "../actions/errorActions"


const getAvailableQuestionnaires = companyId => dispatch => {
    dispatch(availableQuestionnaireRequest())
    fetchAvailableQuestionnaires(companyId)
        .then(res => {
            dispatch(availableQuestionnaireSuccess(res))
        })
        .catch(error => {
            dispatch(setError(error))
        })
}

const addQuestionnaire = (companyId, questionnaireId) => dispatch => {
    dispatch(addQuestionnaireRequest())
    createCompanyQuestionnaire(companyId, questionnaireId)
        .then(res => {
            dispatch(addQuestionnaireSuccess(res))
        })
        .catch(error => {
            dispatch(setError(error))
        })
}

const clearAddQuestionnaire = () => dispatch => {
    dispatch(addQuestionnaireClear())
}

export { getAvailableQuestionnaires, addQuestionnaire, clearAddQuestionnaire }
