import { ACCEPT_INVITE, CREATE_INVITE } from '../constants/apiConstants';

import { postAuthData, postData } from './httpService';

export const postInvite = (data, token) => {
  return postAuthData(CREATE_INVITE, data, token);
};

export const postAcceptInvite = (data, ) => {
  return postData(ACCEPT_INVITE, data);
};
