import {
    AVAILABLE_QUESTIONNAIRE_REQUEST,
    AVAILABLE_QUESTIONNAIRE_SUCCESS,
    AVAILABLE_QUESTIONNAIRE_FAILURE,
} from "../actions/types"

const initialState = {
    isLoading: false,
    questionnaires: []
}

const availableQuestionnaireReducer = (state = initialState, action) => {
    switch (action.type) {
        case AVAILABLE_QUESTIONNAIRE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case AVAILABLE_QUESTIONNAIRE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                questionnaires: action.questionnaires
            }
        case AVAILABLE_QUESTIONNAIRE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default availableQuestionnaireReducer;
