import {
    FETCH_QUESTIONNAIRE_RULE_LIST_REQUEST,
    FETCH_QUESTIONNAIRE_RULE_LIST_SUCCESS,
    FETCH_QUESTIONNAIRE_RULE_LIST_FAILURE,
} from "../actions/types"

const initialState = {
    isLoading: false,
    questionnaireRuleList: []
}

const questionnaireRuleListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUESTIONNAIRE_RULE_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_QUESTIONNAIRE_RULE_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                questionnaireRuleList: action.questionnaireRuleList
            }
        case FETCH_QUESTIONNAIRE_RULE_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
            }

        default:
            return state
    }
}

export default questionnaireRuleListReducer
