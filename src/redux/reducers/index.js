import { combineReducers } from 'redux';

// Reducers will be imported here
import registerUserReducer from './registerUserReducer';
import forgotPasswordReducer from './forgotPasswordReducer';
import sendEmailReducer from './sendEmailReducer';
import authReducer from './authReducer';
import resetPasswordReducer from './resetPasswordReducer';
import pendingQuestionnaireReducer from './pendingQuestionnaireReducer';
import questionnaireReducer from './questionnaireReducer';
import questionnaireSubmissionReducer from './questionnaireSubmissionReducer';
import activityReducer from './activityReducer';
import inviteReducer from './inviteReducer';
import tipsReducer from './tips';
import errorReducer from './errorReducers';
import companyInviteListReducer from './companyInviteListReducer';
import myCompaniesListReducer from './myCompaniesReducer';
import myEmployeesReducer from './myEmployeesReducer';
import companyInviteReducer from './companyInviteReducer';
import joinedCompaniesListReducer from './joinedCompanyReducer';
import homeReducer from './homeReducer';
import companyRegisterReducer from './companyRegisterReducer';
import companyQuestionnaireReducer from './companyQuestionnaireReducer';
import availableQuestionnaireReducer from './availableQuestionnaireReducer'
import questionnaireDetailsReducer from "./questionnaireDetailsReducers";
import addQuestionnaireReducer from "./addQuestionnaireReducer"
import questionnaireRuleListReducer from "./questionnaireRuleListReducer";
import createQuestionnaireRuleReducer from "./createQuestionnaireRuleReducer"
import deleteRuleReducer from "./deleteRuleReducer"
import companyQuestionnaireStateReducer from "./companyQuestionnaireStateReducer"

/**
 * combines all reducers
 */
const rootReducer = combineReducers({
  registerUser: registerUserReducer,
  forgotPassword: forgotPasswordReducer,
  sendEmail: sendEmailReducer,
  auth: authReducer,
  resetPassword: resetPasswordReducer,
  pending: pendingQuestionnaireReducer,
  questionnaire: questionnaireReducer,
  questionnaireSubmission: questionnaireSubmissionReducer,
  activity: activityReducer,
  invite: inviteReducer,
  tips: tipsReducer,
  errors: errorReducer,
  companyInviteList: companyInviteListReducer,
  myCompaniesList: myCompaniesListReducer,
  myEmployees: myEmployeesReducer,
  companyInvite: companyInviteReducer,
  joinedCompaniesList: joinedCompaniesListReducer,
  home: homeReducer,
  companyRegister: companyRegisterReducer,
  companyQuestionnaire: companyQuestionnaireReducer,
  availableQuestionnaire: availableQuestionnaireReducer,
  questionnaireDetails: questionnaireDetailsReducer,
  addQuestionnaire: addQuestionnaireReducer,
  questionnaireRuleList: questionnaireRuleListReducer,
  createQuestionnaireRule: createQuestionnaireRuleReducer,
  deleteRule: deleteRuleReducer,
  companyQuestionnaireState: companyQuestionnaireStateReducer,
});

export default rootReducer;
