import {
    ADD_COMPANY_QUESTIONNIARE_RULE_REQUEST,
    ADD_COMPANY_QUESTIONNIARE_RULE_SUCCESS,
    ADD_COMPANY_QUESTIONNAIRE_RULE_CLEAR,
    ADD_COMPANY_QUESTIONNIARE_RULE_FAILURE,
} from "../actions/types"

const initialState = {
    isLoading: false,
}

const createQuestionnaireRuleReducer = (state = initialState, action) => {
    console.log('action', action.type)
    switch (action.type) {
        case ADD_COMPANY_QUESTIONNIARE_RULE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ADD_COMPANY_QUESTIONNIARE_RULE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
        case ADD_COMPANY_QUESTIONNIARE_RULE_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case ADD_COMPANY_QUESTIONNAIRE_RULE_CLEAR:
            return initialState

        default:
            return state
    }
}

export default createQuestionnaireRuleReducer
