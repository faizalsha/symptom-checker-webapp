import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTips } from '../../redux/actions/tips';
import Loader from '../loader';
import { displayErrors } from '../../utlis';

const Tips = ({ responseId, setLoading }) => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  const { isLoading, error, tips } = useSelector((state) => state.tips);

  useEffect(() => {
    dispatch(getTips(responseId, token));
  }, []);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  if (error) displayErrors(error);

  return (
    <div>
      <h1 className="text-center">Tips</h1>
      <ul>
        {tips.map((tip) => {
          return <li key={tip.id}>{tip.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Loader(Tips);
