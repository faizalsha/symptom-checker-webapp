import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { PROFILE_IMAGE_KEY } from '../../constants/commonConstants';
import { updateProfile } from '../../redux/actions/updateProfileActions';
import { displayErrors, removeNullProperties } from '../../utlis';
import UpdateProfileComponent from './updateProfileComponent';
import Loader from '../loader';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { UPDATE_PASSWORD_ROUTE } from '../../constants/routesPath';
import { clearError } from '../../redux/actions/errorActions';

const UpdateProfile = ({ setLoading }) => {

  const dispatch = useDispatch();

  // mark update button `disable` in profile form and mark enable when some input is changed
  const [formChanged, setFormChanged] = useState(false);

  const {
    userDetails,
    isLoading,
    updateSuccess,
    updateProfileError,
  } = useSelector((state) => state.auth);

  const errorsSelector = useSelector((state) => state.errors);

  const { allErrors } = errorsSelector;

  // controlling value for user profile form
  const [user, setUser] = useState({
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    dob: '',
  });

  const [profileImage, setProfileImage] = useState();

  // updating `user` useState hook when `userDetails` useSelector hook gets update
  useEffect(() => {
    if (userDetails) {
      const userDetailsWithOutNullKeys = removeNullProperties(userDetails);
      setUser({ ...user, ...userDetailsWithOutNullKeys });
    }
  }, [userDetails]);

  /**
   * Handling loader state
   */
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    displayErrors(allErrors);
    return () => dispatch(clearError())
  }, [allErrors]);

  // Handle form changes
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setUser({
      ...user,
      [id]: value,
    });
    setFormChanged(true);
  };

  /**
   * Handle image change action
   * @param {event}
   */
  const handleImageChange = ({ target }) => {
    setProfileImage(target.files[0]);
    setFormChanged(true);
  };

  /**
   * Handle form submission
   * @param {event}
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    // creating a copy of user details
    let updatedUser = { ...user };

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      // Deleting email and profile_image key from request payload
      delete updatedUser.email;
      delete updatedUser.profile_image;

      // Creating FormData object
      const uploadData = new FormData();

      // Appending key value pairs in `FormData` object
      for (const property in updatedUser) {
        uploadData.append(`${property}`, updatedUser[property]);
      }

      // Adding image file to `FormData` object if image file is selected in form by user
      if (profileImage) {
        uploadData.append(PROFILE_IMAGE_KEY, profileImage, profileImage.name);
      }
      // Making update profile api call
      dispatch(updateProfile(uploadData, updatedUser.id));
    }
  };

  const history = useHistory();

  const handleClick = () => {
    history.push(UPDATE_PASSWORD_ROUTE);
  };

  // props object to be passed to `UpdateProfileComponent` component
  const propsToPass = {
    updateProfileError,
    updateSuccess,
    formChanged,
    ...user,
    profileImage,
    handleChange,
    handleSubmit,
    handleImageChange,
  };
  return (
    <>
      <UpdateProfileComponent {...propsToPass} />
      <Container className="w-50">
        <hr />
        <Button onClick={handleClick}>Change password?</Button>
      </Container>
    </>
  );
};

UpdateProfile.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

export default Loader(UpdateProfile);
