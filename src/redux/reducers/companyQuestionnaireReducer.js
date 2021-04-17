import {
    COMPANY_QUESTIONNAIRE_REQUEST,
    COMPANY_QUESTIONNAIRE_SUCCESS,
    COMPANY_QUESTIONNAIRE_FAILURE,
} from "../actions/types"

const initialState = {
    isLoading: false,
    questionnaires: []
}

const companyQuestionnaireReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPANY_QUESTIONNAIRE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case COMPANY_QUESTIONNAIRE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                questionnaires: action.questionnaires,
            }
        case COMPANY_QUESTIONNAIRE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default companyQuestionnaireReducer;
