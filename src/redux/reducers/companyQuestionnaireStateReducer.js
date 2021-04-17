import {
    CHANGE_QUESTIONNAIRE_STATE_REQUEST,
    CHANGE_QUESTIONNAIRE_STATE_SUCCESS,
    CHANGE_QUESTIONNAIRE_STATE_FAILURE,
    CHANGE_QUESTIONNAIRE_STATE_CLEAR,
} from "../actions/types"

const initialState = {
    isLoading: false
}

const companyQuestionnaireStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_QUESTIONNAIRE_STATE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case CHANGE_QUESTIONNAIRE_STATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
        case CHANGE_QUESTIONNAIRE_STATE_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        case CHANGE_QUESTIONNAIRE_STATE_CLEAR:
            return initialState

        default:
            return state;
    }
}

export default companyQuestionnaireStateReducer
