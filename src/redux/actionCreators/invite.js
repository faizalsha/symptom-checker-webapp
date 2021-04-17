import {
  INVITE_LOADED,
  INVITE_LOADING,
  INVITE_ERROR,
  UPDATE_TOKEN,
  INVITE_CLEAR,
} from '../actions/types';

export const inviteLoading = () => ({ type: INVITE_LOADING });

export const postInviteLoaded = () => ({ type: INVITE_LOADED, payload: true });

export const postInviteError = () => ({ type: INVITE_ERROR });

export const inviteLoaded = (payload) => ({
  type: INVITE_LOADED,
  payload,
});

export const inviteError = (payload) => ({
  type: INVITE_ERROR,
  payload,
});

export const updateToken = () => ({ type: UPDATE_TOKEN });

export const clearInvite = () => ({ type: INVITE_CLEAR });
