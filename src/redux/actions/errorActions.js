import { setErrorAction, clearErrorAction } from "../actionCreators/errors";


const setError = errors => dispatch => {
    dispatch(setErrorAction(errors))
}

const clearError = () => dispatch => {
    dispatch(clearErrorAction())
}


export { setError, clearError }
