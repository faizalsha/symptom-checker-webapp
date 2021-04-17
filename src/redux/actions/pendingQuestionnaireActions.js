import {
  pendingQuestionnaireError,
  pendingQuestionnairesLoaded,
  pendingQuestionnaireLoading,
} from '../actionCreators/pendingQuestionnaires';

import {
  fetchMandatoryQuestionnaires,
  fetchPendingQuestionnaires,
} from '../../services/questionnaireService';

/**
 * Function to get pending questionnaires of the user.
 * @param {String} token
 * @param {*} dispatch
 */
export const getPendingQuestionnaires = (token) => (dispatch) => {
  dispatch(pendingQuestionnaireLoading());
  Promise.all([
    fetchPendingQuestionnaires(token),
    fetchMandatoryQuestionnaires(token),
  ])
    .then(([pending, mandatory]) =>
      dispatch(
        pendingQuestionnairesLoaded({
          companyQuestionnaires: pending,
          mandatoryQuestionnaires: mandatory,
        })
      )
    )
    .catch((err) => dispatch(pendingQuestionnaireError(err)));
};
