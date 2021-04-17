import {
    ADD_QUESTIONNAIRE_REQUEST,
    ADD_QUESTIONNAIRE_SUCCESS,
    ADD_QUESTIONNAIRE_FAILURE,
    ADD_QUESTIONNAIRE_CLEAR,
} from "../actions/types"

const initialState = {
    isLoading: false,
}

const addQuestionnaireReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTIONNAIRE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ADD_QUESTIONNAIRE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
        case ADD_QUESTIONNAIRE_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case ADD_QUESTIONNAIRE_CLEAR:
            return initialState

        default:
            return state
    }
}

export default addQuestionnaireReducer
