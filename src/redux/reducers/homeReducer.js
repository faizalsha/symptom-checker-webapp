import { HOME_ERROR, HOME_LOADED, HOME_LOADING } from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
  companies: 0,
  users: 0,
  questionnaires: 0,
};

const homeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_LOADING:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case HOME_LOADED:
      const { users, companies, questionnaires } = payload;
      return {
        ...state,
        isLoading: false,
        users,
        companies,
        questionnaires,
      };
    case HOME_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
