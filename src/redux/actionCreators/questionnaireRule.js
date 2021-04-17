import {
    ADD_COMPANY_QUESTIONNIARE_RULE_REQUEST,
    ADD_COMPANY_QUESTIONNIARE_RULE_SUCCESS,
    ADD_COMPANY_QUESTIONNIARE_RULE_FAILURE,
    ADD_COMPANY_QUESTIONNAIRE_RULE_CLEAR,
    FETCH_QUESTIONNAIRE_RULE_LIST_REQUEST,
    FETCH_QUESTIONNAIRE_RULE_LIST_SUCCESS,
    FETCH_QUESTIONNAIRE_RULE_LIST_FAILURE,
    DELETE_RULE_REQUEST,
    DELETE_RULE_SUCCESS,
    DELETE_RULE_FAILURE,
    DELETE_RULE_CLEAR,
} from "../actions/types"

const addCompanyQuestionnaireRuleRequest = () => ({ type: ADD_COMPANY_QUESTIONNIARE_RULE_REQUEST })

const addCompanyQuestionnaireRuleSuccess = data => ({
    type: ADD_COMPANY_QUESTIONNIARE_RULE_SUCCESS,
    data
})

const addCompanyQuestionnaireRuleFailure = () => ({
    type: ADD_COMPANY_QUESTIONNIARE_RULE_FAILURE
})

const addCompanyQuestionnaireRuleClear = () => ({
    type: ADD_COMPANY_QUESTIONNAIRE_RULE_CLEAR
})

const fetchQuestionnaireRuleRequest = () => ({ type: FETCH_QUESTIONNAIRE_RULE_LIST_REQUEST })

const fetchQuestionnaireRuleSuccess = (questionnaireRuleList) => ({
    type: FETCH_QUESTIONNAIRE_RULE_LIST_SUCCESS,
    questionnaireRuleList
})

const fetchQuestionnaireRuleFailure = () => ({
    type: FETCH_QUESTIONNAIRE_RULE_LIST_FAILURE
})

const deleteRuleRequest = () => ({ type: DELETE_RULE_REQUEST })

const deleteRuleSuccess = data => ({ type: DELETE_RULE_SUCCESS, data })

const deleteRuleFailure = () => ({ type: DELETE_RULE_FAILURE })

const deleteRuleClear = () => ({ type: DELETE_RULE_CLEAR })

export {
    addCompanyQuestionnaireRuleRequest,
    addCompanyQuestionnaireRuleSuccess,
    addCompanyQuestionnaireRuleFailure,
    addCompanyQuestionnaireRuleClear,
    fetchQuestionnaireRuleRequest,
    fetchQuestionnaireRuleSuccess,
    fetchQuestionnaireRuleFailure,
    deleteRuleRequest,
    deleteRuleSuccess,
    deleteRuleFailure,
    deleteRuleClear,
}
