import {
    MY_COMPANY_EMPLOYEES_REQUEST,
    MY_COMPANY_EMPLOYEES_SUCCESS,
    MY_COMPANY_EMPLOYEES_FAILURE,
    MY_COMPANY_EMPLOYEES_CLEAR,
} from "../actions/types";

const intialState = {
    employees: []
}

const employeeReducer = (state = intialState, action) => {
    switch (action.type) {
        case MY_COMPANY_EMPLOYEES_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case MY_COMPANY_EMPLOYEES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                employees: action.employees
            }
        case MY_COMPANY_EMPLOYEES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case MY_COMPANY_EMPLOYEES_CLEAR:
            return intialState
        default:
            return state;
    }
}

export default employeeReducer;
