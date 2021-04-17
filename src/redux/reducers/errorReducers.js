import { SET_ERROR, CLEAR_ERROR } from "../actions/types";
const initialState = {}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return {
                allErrors: action.errors
            }
        case CLEAR_ERROR:
            return initialState;

        default:
            return state
    }
}

export default errorReducer;
