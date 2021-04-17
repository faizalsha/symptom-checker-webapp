import {
    AVAILABLE_QUESTIONNAIRE_FAILURE,
    AVAILABLE_QUESTIONNAIRE_REQUEST,
    AVAILABLE_QUESTIONNAIRE_SUCCESS,
    ADD_QUESTIONNAIRE_REQUEST,
    ADD_QUESTIONNAIRE_SUCCESS,
    ADD_QUESTIONNAIRE_CLEAR,
} from "../actions/types";

const availableQuestionnaireRequest = () => ({ type: AVAILABLE_QUESTIONNAIRE_REQUEST })

const availableQuestionnaireSuccess = (questionnaires) => ({
    type: AVAILABLE_QUESTIONNAIRE_SUCCESS, questionnaires
})

const availableQuestionnaireFailure = (error) => ({
    type: AVAILABLE_QUESTIONNAIRE_FAILURE, error
})

const addQuestionnaireRequest = () => ({ type: ADD_QUESTIONNAIRE_REQUEST })

const addQuestionnaireSuccess = (data) => ({ type: ADD_QUESTIONNAIRE_SUCCESS, data })

const addQuestionnaireClear = () => ({ type: ADD_QUESTIONNAIRE_CLEAR })

export {
    availableQuestionnaireRequest,
    availableQuestionnaireSuccess,
    availableQuestionnaireFailure,
    addQuestionnaireRequest,
    addQuestionnaireSuccess,
    addQuestionnaireClear
}
