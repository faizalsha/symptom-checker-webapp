import { fetchQuestionnaireDetails } from "../../services/companiesService";
import { changeCompanyQuestionnaireState } from "../../services/questionnaireService"
import {
    getQuestionnaireDetailsRequest,
    getQuestionnaireDetailsSuccess,
    changeQuestionnaireStateRequest,
    changeQuestionnaireStateSuccess,
    changeQuestionnaireStateClear,
    changeQuestionnaireStateFailure,
    getQuestionnaireDetailsFailure,
} from "../actionCreators/questionnaireDetails";
import { setError } from "./errorActions";

export const getQuestionnaireDetails = questionnaireId => dispatch => {
    dispatch(getQuestionnaireDetailsRequest())
    fetchQuestionnaireDetails(questionnaireId)
        .then(res => {
            dispatch(getQuestionnaireDetailsSuccess(res))
        })
        .catch(error => {
            dispatch(setError(error))
            dispatch(getQuestionnaireDetailsFailure())
        })
}

const updateQuestionnaireState = (companyId, companyQuestionnaireId, state) => dispatch => {
    dispatch(changeQuestionnaireStateRequest())
    changeCompanyQuestionnaireState(companyId, companyQuestionnaireId, state)
        .then(res => {
            console.log('success update')
            dispatch(changeQuestionnaireStateSuccess(res))
        })
        .catch(error => {
            dispatch(setError(error))
            dispatch(changeQuestionnaireStateFailure())
        })
}

const clearQuestionnaireStateRedux = () => dispatch => {
    dispatch(changeQuestionnaireStateClear())
}

export { updateQuestionnaireState, clearQuestionnaireStateRedux }
