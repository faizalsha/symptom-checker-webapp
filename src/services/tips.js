import { getAuthResponse } from './httpService';

import { TIPS } from '../constants/apiConstants';

export const fetchTips = (responseId, token) => {
  return getAuthResponse(`${TIPS}${responseId}/`, token);
};
