const REGISTER_ROUTE = '/register';
const EMAIL_SENT_ROUTE = '/email_sent';
const LOGIN_ROUTE = '/login';
const FORGOT_PASSWORD_ROUTE = '/forgot_password';
const VERIFY_EMAIL_ROUTE = '/accounts/verify/:token';
const RESEND_VERIFICATION_MAIL_ROUTE = '/resend';
const PROFILE_ROUTE = '/profile';
const HOME_ROUTE = '/';
const RESET_PASSWORD_ROUTE = '/accounts/reset/:token';
const PENDING_QUESTIONNAIRES = '/surveys/pending';
const QUESTIONNAIRE = '/surveys/questionnaire/:questionnaireId';
const COMPANY_QUESTIONNAIRE =
  '/surveys/company/:companyId/questionnaire/:questionnaireId';
const QUESTIONNAIRE_SUBMISSION = '/surveys/submitted';
const QUESTIONNAIRE_ACTIVITY = '/surveys/activity';
const QUESTIONNAIRE_ACTIVITY_DETAIL =
  '/surveys/activity/:questionnaireResponseId';
const INVITE = '/commons/invite';
const ACCEPT = '/commons/accept/:token';
const UPDATE_PASSWORD_ROUTE = '/profile/update-password';
const COMPANY_INVITES_ROUTE = '/companies/:companyId/invites';
const MY_COMPANIES_ROUTE = "/companies/my"
const JOINED_COMPANIES_ROUTE = "/companies/joined"
const MY_COMPANY_DETAILS_ROUTE = `${MY_COMPANIES_ROUTE}/:companyId`
const MY_EMPLOYEES_ROUTE = "/companies/:companyId/employee"
const COMPANY_INVITE = '/company-invite/:inviteToken'
const SEND_COMPANY_INVITE_ROUTE = '/companies/:companyId/send-invite'
const COMPANY_REGISTRATION_ROUTE = "/company/register";
const COMPANY_QUESTIONNAIRE_LIST_ROUTE = "/companies/my/:companyId/questionnaire"
const COMPANY_QUESTIONNAIRE_DETAILS_ROUTE = `${COMPANY_QUESTIONNAIRE_LIST_ROUTE}/:questionnaireId/companyQuestionnaire/:companyQuestionnaireId`
const AVAILABLE_QUESTIONNAIRE_ROUTE = `${COMPANY_QUESTIONNAIRE_LIST_ROUTE}/available-questionnaire`
const QUESTIONNAIRE_DETAILS_ROUTE = `${AVAILABLE_QUESTIONNAIRE_ROUTE}/:companyQuestionnaireId`
const COMPANY_QUESTIONNAIRE_RULE_ROUTE = `${COMPANY_QUESTIONNAIRE_DETAILS_ROUTE}/rules`

export {
  REGISTER_ROUTE,
  EMAIL_SENT_ROUTE,
  LOGIN_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  VERIFY_EMAIL_ROUTE,
  RESEND_VERIFICATION_MAIL_ROUTE,
  PROFILE_ROUTE,
  HOME_ROUTE,
  RESET_PASSWORD_ROUTE,
  PENDING_QUESTIONNAIRES,
  QUESTIONNAIRE,
  COMPANY_QUESTIONNAIRE,
  QUESTIONNAIRE_SUBMISSION,
  QUESTIONNAIRE_ACTIVITY,
  QUESTIONNAIRE_ACTIVITY_DETAIL,
  INVITE,
  ACCEPT,
  UPDATE_PASSWORD_ROUTE,
  COMPANY_INVITES_ROUTE,
  MY_COMPANIES_ROUTE,
  MY_COMPANY_DETAILS_ROUTE,
  MY_EMPLOYEES_ROUTE,
  COMPANY_INVITE,
  SEND_COMPANY_INVITE_ROUTE,
  JOINED_COMPANIES_ROUTE,
  COMPANY_REGISTRATION_ROUTE,
  COMPANY_QUESTIONNAIRE_LIST_ROUTE,
  AVAILABLE_QUESTIONNAIRE_ROUTE,
  QUESTIONNAIRE_DETAILS_ROUTE,
  COMPANY_QUESTIONNAIRE_DETAILS_ROUTE,
  COMPANY_QUESTIONNAIRE_RULE_ROUTE,
};

