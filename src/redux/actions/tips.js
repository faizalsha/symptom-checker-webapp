import { fetchTips } from '../../services/tips';
import { tipsError, tipsLoaded, tipsLoading } from '../actionCreators/tips';

export const getTips = (responseId, token) => (dispatch) => {
  dispatch(tipsLoading());
  fetchTips(responseId, token)
    .then((res) => dispatch(tipsLoaded(res)))
    .catch((err) => dispatch(tipsError));
};
