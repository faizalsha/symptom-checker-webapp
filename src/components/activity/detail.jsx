import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getActivity } from '../../redux/actions/activityActions';
import Loader from '../loader';
import ShowDetails from './showDetails';
import { displayErrors } from '../../utlis';

const Detail = ({ setLoading }) => {
  // Getting questionnaireResponseId from the Url Parameter.
  const { questionnaireResponseId } = useParams();
  // Getting Activity Slice from Store.
  const { isLoading, error, activity } = useSelector((state) => state.activity);
  const dispatch = useDispatch();
  // Getting Token from Auth Slice of Store.
  const { token } = useSelector((state) => state.auth);

  // Fetching Activity related data.
  useEffect(() => {
    dispatch(getActivity(questionnaireResponseId, token));
  }, []);

  useEffect(() => setLoading(isLoading), [isLoading]);

  if (error) displayErrors(error);

  return (
    <>
      {isLoading && <Loader />}
      {activity && <ShowDetails />}
    </>
  );
};

export default Loader(Detail);
