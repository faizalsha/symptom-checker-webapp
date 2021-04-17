import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { verifyEmail } from "../redux/actions/registerActions";
import InfoComponent from "./infoComponent";
import Loader from "./loader";
import {
  EMAIL_VERIFIED,
  EMAIL_VERIFIED_MESSAGE,
  BAD_LINK,
  UNABLE_TO_VERIFY_EMAIL,
} from "../constants/commonConstants";
import { RESEND_VERIFICATION_MAIL_ROUTE } from "../constants/routesPath";
import { DANGER, SUCCESS } from "../constants/componentVariants";

const VerifyEmail = (props) => {

  const { setLoading } = props;

  const dispatch = useDispatch();

  const authSelector = useSelector((state) => state.auth);

  const { isLoading, token, verifyEmailError } = authSelector;

  const { token: paramToken } = useParams();

  /**
   * Handling loader state
   */
  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  /**
   * Trying to verify email on component load
   */
  useEffect(() => {
    dispatch(verifyEmail(paramToken));
  }, []);

  const successProps = {
    variant: SUCCESS,
    title: EMAIL_VERIFIED,
    message: EMAIL_VERIFIED_MESSAGE,
  };

  return (
    <Container>
      {token && <InfoComponent {...successProps} />}
      {!token && verifyEmailError && (
        <>
          <InfoComponent
            variant={DANGER}
            title={UNABLE_TO_VERIFY_EMAIL}
            message={BAD_LINK}
          />
          <Link to={RESEND_VERIFICATION_MAIL_ROUTE}>
            click here to resend verification email
          </Link>
        </>
      )}
    </Container>
  );
};

export default Loader(VerifyEmail);
