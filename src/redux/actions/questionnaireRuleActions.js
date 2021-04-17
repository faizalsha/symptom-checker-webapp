import { createQuestionnaireRule, deleteQuestionaireRule, fetchQuestionnaireRuleList } from "../../services/questionnaireService"
import {
    addCompanyQuestionnaireRuleClear,
    addCompanyQuestionnaireRuleRequest,
    addCompanyQuestionnaireRuleSuccess,
    fetchQuestionnaireRuleRequest,
    fetchQuestionnaireRuleSuccess,
    deleteRuleRequest,
    deleteRuleSuccess,
    deleteRuleClear,
    addCompanyQuestionnaireRuleFailure,
} from "../actionCreators/questionnaireRule"
import { setError } from "./errorActions"


const setRule = (data, companyId, questionnaireId) => dispatch => {
    dispatch(addCompanyQuestionnaireRuleRequest())
    createQuestionnaireRule(data, companyId, questionnaireId)
        .then(res => {
            dispatch(addCompanyQuestionnaireRuleSuccess(res))
        })
        .catch(error => {
            dispatch(setError(error))
            dispatch(addCompanyQuestionnaireRuleFailure())
        })
}

const clearRuleRedux = () => dispatch => {
    dispatch(addCompanyQuestionnaireRuleClear())
}

const getQuestionnaireRuleList = (companyId, companyQuestionnaireId) => dispatch => {
    dispatch(fetchQuestionnaireRuleRequest())
    fetchQuestionnaireRuleList(companyId, companyQuestionnaireId)
        .then(res => {
            dispatch(fetchQuestionnaireRuleSuccess(res))
        })
        .catch(error => {
            dispatch(setError(error))
        })
}

const deleteQuestionnaireRule = (companyId, companyQuestionnaireId, ruleId) => dispatch => {
    dispatch(deleteRuleRequest())
    deleteQuestionaireRule(companyId, companyQuestionnaireId, ruleId)
        .then(res => {
            console.log('delete success')
            dispatch(deleteRuleSuccess("success"))
        })
        .catch(error => {
            console.log('while deleting error occured')
            dispatch(setError(error))
        })
}

const clearDeleteRuleRedux = () => dispatch => {
    dispatch(deleteRuleClear())
}

export {
    setRule,
    getQuestionnaireRuleList,
    clearRuleRedux,
    deleteQuestionnaireRule,
    clearDeleteRuleRedux
}
