import {
    GET_QUESTIONNAIRE_DETAILS_REQUEST,
    GET_QUESTIONNAIRE_DETAILS_SUCCESS,
    GET_QUESTIONNAIRE_DETAILS_FAILURE,
    CHANGE_QUESTIONNAIRE_STATE_REQUEST,
    CHANGE_QUESTIONNAIRE_STATE_SUCCESS,
    CHANGE_QUESTIONNAIRE_STATE_FAILURE,
    CHANGE_QUESTIONNAIRE_STATE_CLEAR,
} from "../actions/types"

const getQuestionnaireDetailsRequest = () => ({ type: GET_QUESTIONNAIRE_DETAILS_REQUEST })

const getQuestionnaireDetailsSuccess = (questionnaire) => ({
    type: GET_QUESTIONNAIRE_DETAILS_SUCCESS,
    questionnaire
})

const getQuestionnaireDetailsFailure = () => ({
    type: GET_QUESTIONNAIRE_DETAILS_FAILURE
})

const changeQuestionnaireStateRequest = () => ({
    type: CHANGE_QUESTIONNAIRE_STATE_REQUEST
})

const changeQuestionnaireStateSuccess = data => ({
    type: CHANGE_QUESTIONNAIRE_STATE_SUCCESS,
    data
})

const changeQuestionnaireStateFailure = () => ({
    type: CHANGE_QUESTIONNAIRE_STATE_FAILURE
})

const changeQuestionnaireStateClear = () => ({
    type: CHANGE_QUESTIONNAIRE_STATE_CLEAR
})

export {
    getQuestionnaireDetailsRequest,
    getQuestionnaireDetailsSuccess,
    getQuestionnaireDetailsFailure,
    changeQuestionnaireStateRequest,
    changeQuestionnaireStateSuccess,
    changeQuestionnaireStateFailure,
    changeQuestionnaireStateClear,
}
