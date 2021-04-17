import {
    MY_COMPANY_EMPLOYEES_REQUEST,
    MY_COMPANY_EMPLOYEES_SUCCESS,
    MY_COMPANY_EMPLOYEES_FAILURE,
    MY_COMPANY_EMPLOYEES_CLEAR,
} from "../actions/types"

const myEmployeesRequest = () => ({ type: MY_COMPANY_EMPLOYEES_REQUEST })

const myEmployeesSuccess = employees => ({ type: MY_COMPANY_EMPLOYEES_SUCCESS, employees })

const myEmployeesFailure = error => ({ type: MY_COMPANY_EMPLOYEES_FAILURE, error })

const myEmployeesClear = () => ({ type: MY_COMPANY_EMPLOYEES_CLEAR })

export {
    myEmployeesRequest,
    myEmployeesSuccess,
    myEmployeesFailure,
    myEmployeesClear,
}
