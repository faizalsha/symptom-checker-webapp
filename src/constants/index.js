export const PHONE_NUMBER_PATTERN = "[7-9]{1}[0-9]{9}";
export const DOB_PATTERN = "[0-9]{4}-[0-9]{2}-[0-9]{2}";
export const PASSWORD_PATTERN_LENGTH = "[a-zA-Z0-9]{8,}";
const BASE_URL = "http://127.0.0.1:8000";
const ACCOUNTS_RESOURCE = `${BASE_URL}/accounts`;
export const REGISTER_USER_ENDPOINT = `${ACCOUNTS_RESOURCE}/user/`;
export const LOGIN_USER_ENDPOINT = `${ACCOUNTS_RESOURCE}/login/`;
export const FORGOT_PASSWORD_ENDPOINT = `${ACCOUNTS_RESOURCE}/forget/`;
export const VERIFY_EMAIL_ENDPOINT = `${ACCOUNTS_RESOURCE}/verify`;
export const RESEND_MAIL = `${ACCOUNTS_RESOURCE}/resend/`;
export const UPDATE_USER_ENDPOINT = `${ACCOUNTS_RESOURCE}/user/`;
/**
 * TOKEN_KEY: key for storing user token
 */
export const TOKEN_KEY = "Token";
