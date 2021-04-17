import { SET_ERROR, CLEAR_ERROR } from "../actions/types"

const setErrorAction = (errors) => ({ type: SET_ERROR, errors })
const clearErrorAction = () => ({ type: CLEAR_ERROR })

export {
    setErrorAction,
    clearErrorAction
}
