import { fetchMyEmployee } from "../../services/companiesService";
import {
    myEmployeesRequest,
    myEmployeesSuccess,
    myEmployeesFailure,
    myEmployeesClear,
} from "../actionCreators/employees";
import { setError } from "./errorActions";

const getMyEmployee = companyId => dispatch => {
    dispatch(myEmployeesRequest())
    fetchMyEmployee(companyId)
        .then(res => {
            dispatch(myEmployeesSuccess(res))
        })
        .catch(error => {
            dispatch(setError(error))
            dispatch(myEmployeesFailure(error))
        })
}

const clearMyEmployee = () => dispatch => {
    dispatch(myEmployeesClear())
}

export { getMyEmployee, clearMyEmployee }
