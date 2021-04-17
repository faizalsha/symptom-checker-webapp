import {
  inviteError,
  inviteLoaded,
  inviteLoading,
  postInviteError,
  postInviteLoaded,
  updateToken,
} from '../actionCreators/invite';
import { postAcceptInvite, postInvite } from '../../services/inviteService';
import { saveToLocalStorage } from '../../utlis';
import { TOKEN_KEY } from '../../constants/commonConstants';

export const createInvite = (data, token) => (dispatch) => {
  dispatch(inviteLoading());
  postInvite(data, token)
    .then(() => dispatch(postInviteLoaded()))
    .catch(() => dispatch(postInviteError()));
};

export const acceptInvite = (data) => (dispatch) => {
  dispatch(inviteLoading());
  postAcceptInvite(data)
    .then((res) => {
      const { token } = res;
      saveToLocalStorage(TOKEN_KEY, token);
      dispatch(updateToken());
      dispatch(inviteLoaded(res));
    })
    .catch((err) => dispatch(inviteError(err)));
};
