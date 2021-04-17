import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import {
  HOME_ROUTE,
  REGISTER_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  PENDING_QUESTIONNAIRES,
  QUESTIONNAIRE_ACTIVITY,
  INVITE,
  MY_COMPANIES_ROUTE,
  JOINED_COMPANIES_ROUTE,
  COMPANY_REGISTRATION_ROUTE,
} from '../constants/routesPath';
import { logoutUser } from '../redux/actions/loginActions';

const NavBar = () => {
  const { userDetails } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutUser());
  };
  return (
    <Navbar sticky="top" bg="dark" variant="dark" className="mb-3">
      <Navbar.Brand as={NavLink} to={HOME_ROUTE} activeClassName="active-link">
        Symptom Checker
      </Navbar.Brand>
      <Nav className="ml-auto">
        {userDetails && (
          <>
            <Nav.Link
              as={NavLink}
              to={COMPANY_REGISTRATION_ROUTE}
            >
              Create new company
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={JOINED_COMPANIES_ROUTE}
            >
              Joined Companies
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={MY_COMPANIES_ROUTE}
            >
              My Companies
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={QUESTIONNAIRE_ACTIVITY}
            >
              Activity
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={PENDING_QUESTIONNAIRES}
            >
              Pending
            </Nav.Link>
            <Nav.Link as={NavLink} to={INVITE}>
              Invite
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={PROFILE_ROUTE}
            >
              Profile
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={HOME_ROUTE}
              onClick={handleClick}
              activeClassName="active-link"
            >
              Log out
            </Nav.Link>
          </>
        )}

        {!userDetails && (
          <>
            <Nav.Link
              as={NavLink}
              to={LOGIN_ROUTE}
            >
              Login
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={REGISTER_ROUTE}
            >
              Register
            </Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
