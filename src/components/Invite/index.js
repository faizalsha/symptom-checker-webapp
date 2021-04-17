import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { createInvite } from '../../redux/actions/inviteActions';
import Loader from '../loader';
import { displayErrors } from '../../utlis';
import { clearInvite } from '../../redux/actionCreators/invite';

const Invite = ({ setLoading }) => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  const { error, isLoading, response } = useSelector((state) => state.invite);

  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const { firstName, lastName, email } = input;

  const onChangeHandler = ({ target: { name, value } }) => {
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
    };
    dispatch(createInvite(data, token));
    setInput({ firstName: '', lastName: '', email: '' });
  };

  useEffect(() => {
    return dispatch(clearInvite());
  }, [isLoading]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  if (response) displayErrors({ msg: 'Invite Sent Successfully.' });

  if (error) displayErrors(error);

  return (
    <Container>
      <h1>Invite Users to Symptom Checker</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>
            Email :{' '}
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChangeHandler}
              required
            />
          </label>
        </div>
        <div>
          <label>
            First Name :{' '}
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={onChangeHandler}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Last Name :{' '}
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <input type="submit" value="Invite" />
      </form>
    </Container>
  );
};

export default Loader(Invite);
