import { homeError, homeLoaded, homeLoading } from '../actionCreators/home';

import {
  fetchCompanyCount,
  fetchQuestionnaireCount,
  fetchUserCount,
} from '../../services/home';

export const getHomeData = () => (dispatch) => {
  dispatch(homeLoading());
  Promise.all([
    fetchUserCount(),
    fetchQuestionnaireCount(),
    fetchCompanyCount(),
  ])
    .then(([userCount, questionnaireCount, companieCount]) => {
      const payload = {
        users: userCount.Count,
        questionnaires: questionnaireCount.Count,
        companies: companieCount.Count,
      };
      dispatch(homeLoaded(payload));
    })
    .catch((err) => dispatch(homeError(err)));
};
