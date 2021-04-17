import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SendVerificationEmail from './components/resendVerificationEmail';
import RegisterForm from './components/registerForm';
import EmailSent from './components/emailSent';
import ForgotPasswordContainer from './components/forgotPasword';
import VerifyEmail from './components/verifyEmail';
import Login from './components/login';
import UpdateProfile from './components/updateProfile';
import NavBar from './components/navBar';
import ResetPassword from './components/resetPassword';
import ProtectedRoute from './components/common/protectedRoute';
import PendingQuestionnaire from './components/pendingQuestionnaires';
import Questionnaire from './components/questionnaire';
import QuestionnaireSubmission from './components/questionnaire/questionnaireSubmission';
import NotFound404 from './components/common/notFound404';
import Home from './components/home';
import Activity from './components/activity';
import Detail from './components/activity/detail';
import Invite from './components/Invite';
import Accept from './components/Invite/accept';
import UpdatePassword from './components/updatePassword/updatePassword';
import CompanyInvite from './components/companyInvite/companyInvite';
import MyCompanies from "./components/companies/myCompanies";
import MyCompanyDetails from "./components/companies/myCompanyDetails";
import CompanyEmployee from "./components/companyEmployee/companyEmployees";
import CompanyDetails from './components/companyInvite';
import SendCompanyInvite from './components/companyInvite/sendCompanyInvite';
import JoinedCompanies from './components/companies/joinedCompanies';
import CompanyRegistration from './components/companyRegistration/companyRegistration';

import {
  EMAIL_SENT_ROUTE,
  REGISTER_ROUTE,
  LOGIN_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  VERIFY_EMAIL_ROUTE,
  RESEND_VERIFICATION_MAIL_ROUTE,
  PROFILE_ROUTE,
  RESET_PASSWORD_ROUTE,
  PENDING_QUESTIONNAIRES,
  COMPANY_QUESTIONNAIRE,
  QUESTIONNAIRE,
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
  REGISTER_COMPANY_ROUTE,
  COMPANY_REGISTRATION_ROUTE,
  COMPANY_QUESTIONNAIRE_LIST_ROUTE,
  AVAILABLE_QUESTIONNAIRE_ROUTE,
  QUESTIONNAIRE_DETAILS_ROUTE,
  COMPANY_QUESTIONNAIRE_DETAILS_ROUTE,
  COMPANY_QUESTIONNAIRE_RULE_ROUTE,
} from './constants/routesPath';
import CompanyQuestionnaires from './components/questionnaires/companyQuestionnaires';
import AvailableQuestionnaire from './components/questionnaires/availableQuestionnaires';
import QuestionnaireDetails from './components/questionnaires/questionnaireDetails';
import DetailedQuestionnaire from './components/questionnaires/detailedQuestionnaire';
import MyQuestionnaireDetails from './components/questionnaires/myQuestionnaireDetails';
import QuestionnaireRule from './components/questionnaires/questionaireRule';



const Routes = () => {
  return (
    <Router>
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path={RESEND_VERIFICATION_MAIL_ROUTE}
          component={SendVerificationEmail}
        />
        <Route exact path={VERIFY_EMAIL_ROUTE} component={VerifyEmail} />
        <Route exact path={RESET_PASSWORD_ROUTE} component={ResetPassword} />
        <Route
          exact
          path={FORGOT_PASSWORD_ROUTE}
          component={ForgotPasswordContainer}
        />
        <Route exact path={LOGIN_ROUTE} component={Login} />
        <Route exact path={REGISTER_ROUTE} component={RegisterForm} />
        <Route exact path={EMAIL_SENT_ROUTE} component={EmailSent} />
        <ProtectedRoute
          path={UPDATE_PASSWORD_ROUTE}
          component={UpdatePassword}
        />
        <ProtectedRoute exact path={PROFILE_ROUTE} component={UpdateProfile} />
        <ProtectedRoute
          exact
          path={PENDING_QUESTIONNAIRES}
          component={PendingQuestionnaire}
        />
        <ProtectedRoute
          exact
          path={COMPANY_QUESTIONNAIRE}
          component={Questionnaire}
        />
        <ProtectedRoute exact path={QUESTIONNAIRE} component={Questionnaire} />
        <ProtectedRoute
          exact
          path={QUESTIONNAIRE_SUBMISSION}
          component={QuestionnaireSubmission}
        />
        <ProtectedRoute exact path={INVITE} component={Invite} />
        <Route exact path={ACCEPT} component={Accept} />
        <ProtectedRoute
          exact
          path={QUESTIONNAIRE_ACTIVITY}
          component={Activity}
        />
        <ProtectedRoute
          exact
          path={QUESTIONNAIRE_ACTIVITY_DETAIL}
          component={Detail}
        />
        <ProtectedRoute
          exact
          path={COMPANY_INVITES_ROUTE}
          component={CompanyInvite}
        />
        <ProtectedRoute exact path={MY_COMPANY_DETAILS_ROUTE} component={MyCompanyDetails} />
        <ProtectedRoute exact path={UPDATE_PASSWORD_ROUTE} component={UpdatePassword} />
        <ProtectedRoute exact path={MY_COMPANIES_ROUTE} component={MyCompanies} />
        <ProtectedRoute exact path={JOINED_COMPANIES_ROUTE} component={JoinedCompanies} />
        <ProtectedRoute exact path={MY_EMPLOYEES_ROUTE} component={CompanyEmployee} />
        <ProtectedRoute
          exact
          path={COMPANY_INVITE}
          component={CompanyDetails}
        />
        <ProtectedRoute
          exact
          path={SEND_COMPANY_INVITE_ROUTE}
          component={SendCompanyInvite}
        />
        <ProtectedRoute exact path={COMPANY_REGISTRATION_ROUTE} component={CompanyRegistration} />
        <ProtectedRoute exact path={COMPANY_QUESTIONNAIRE_LIST_ROUTE} component={CompanyQuestionnaires} />
        <ProtectedRoute exact path={AVAILABLE_QUESTIONNAIRE_ROUTE} component={AvailableQuestionnaire} />
        <ProtectedRoute exact path={QUESTIONNAIRE_DETAILS_ROUTE} component={DetailedQuestionnaire} />
        <ProtectedRoute exact path={COMPANY_QUESTIONNAIRE_RULE_ROUTE} component={QuestionnaireRule} />
        <ProtectedRoute exact path={COMPANY_QUESTIONNAIRE_DETAILS_ROUTE} component={MyQuestionnaireDetails} />
        <Route component={NotFound404} />
      </Switch>
    </Router >
  );
};

export default Routes;
