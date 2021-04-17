import { TIP_ERROR, TIP_LOADED, TIP_LOADING } from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
  tips: [],
};

const tipsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TIP_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case TIP_LOADED:
      return {
        ...state,
        isLoading: false,
        tips: payload,
      };
    case TIP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default tipsReducer;
