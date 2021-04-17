import {
    DELETE_RULE_REQUEST,
    DELETE_RULE_SUCCESS,
    DELETE_RULE_FAILURE,
    DELETE_RULE_CLEAR,
} from "../actions/types"

const initialState = {
    isLoading: false
}

const deleteRuleReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_RULE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case DELETE_RULE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
        case DELETE_RULE_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        case DELETE_RULE_CLEAR:
            return initialState

        default:
            return state
    }
}

export default deleteRuleReducer;
