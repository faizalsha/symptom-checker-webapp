import { INVITE_ERROR, INVITE_LOADED, INVITE_LOADING, INVITE_CLEAR } from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
  response: null,
};

const inviteReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INVITE_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case INVITE_LOADED:
      return {
        ...state,
        isLoading: false,
        response: payload,
      };
    case INVITE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case INVITE_CLEAR:
      return {
        ...state,
        response: null
      }
    default:
      return state;
  }
};
export default inviteReducer;
