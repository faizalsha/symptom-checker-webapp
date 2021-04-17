import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';
import { acceptInvite } from '../../redux/actions/inviteActions';
import Loader from '../loader';
import { PROFILE_ROUTE } from '../../constants/routesPath';
import { displayErrors } from '../../utlis';

const Accept = ({ setLoading }) => {
  const { token } = useParams();

  const [errors, setErrors] = useState('');

  const [password, setPassword] = useState({ password1: '', password2: '' });

  const { password1, password2 } = password;

  const { isLoading, error } = useSelector((state) => state.invite);

  const { token: authToken } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  const onChangeHandler = ({ target: { name, value } }) => {
    setPassword({ ...password, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password1.length < 8) {
      setErrors('Password should be of length atleast 8.');
    } else if (password1 !== password2) {
      setErrors("Password Doesn't match.");
    } else {
      const data = {
        password: password1,
        token,
      };
      dispatch(acceptInvite(data));
    }
  };

  if (authToken !== null) {
    return <Redirect to={PROFILE_ROUTE} />;
  }

  if (error) displayErrors(error);

  return (
    <>
      <Container>
        <h1>Welcome to Symptom Checker</h1>
        <form onSubmit={onSubmitHandler}>
          <h1>Set Your Password</h1>
          {errors}
          <div>
            <label>
              Password:{' '}
              <input
                type="password"
                required
                name="password1"
                value={password1}
                onChange={onChangeHandler}
              />
            </label>
          </div>
          <div>
            <label>
              Confirm Password:{' '}
              <input
                type="password"
                required
                name="password2"
                value={password2}
                onChange={onChangeHandler}
              />
            </label>
          </div>

          <input type="submit" />
        </form>
      </Container>
    </>
  );
};

export default Loader(Accept);
