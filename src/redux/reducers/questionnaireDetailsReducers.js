import {
    GET_QUESTIONNAIRE_DETAILS_REQUEST,
    GET_QUESTIONNAIRE_DETAILS_SUCCESS,
    GET_QUESTIONNAIRE_DETAILS_FAILURE,
} from "../actions/types";

const initialState = {
    isLoading: false,
}

const questionnaireDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTIONNAIRE_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_QUESTIONNAIRE_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                questionnaire: action.questionnaire
            }
        case GET_QUESTIONNAIRE_DETAILS_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}

export default questionnaireDetailsReducer
