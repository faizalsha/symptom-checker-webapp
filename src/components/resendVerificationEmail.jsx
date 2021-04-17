import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { EMAIL_SENT_ROUTE } from "../constants/routesPath";
import { getCurrentUserToken } from "../utlis";
import {
  LOGIN_AGAIN_TO_RESEND,
  UNABLE_TO_SEND_VERIFICATION_MAIL,
} from "../constants/commonConstants";
import {
  sendVerificationMail,
  invalidTokenAction,
} from "../redux/actions/resendEmailActions";
import InfoComponent from "./infoComponent";
import Loader from "./loader";
import { DANGER } from "../constants/componentVariants";

const SendVerificationEmail = (props) => {
  const { setLoading } = props;
  const dispatch = useDispatch();

  const sendEmailSelector = useSelector((state) => state.sendEmail);

  const { isLoading, data } = sendEmailSelector;

  useEffect(() => {
    const token = getCurrentUserToken();
    if (token) {
      dispatch(sendVerificationMail(token))
    } else {
      dispatch(invalidTokenAction());
    }
  }, []);

  /**
   * Handling loader state
   */
  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])


  const propsToPass = {
    variant: DANGER,
    title: UNABLE_TO_SEND_VERIFICATION_MAIL,
    message: LOGIN_AGAIN_TO_RESEND,
  };

  return (
    <Container>
      {data && <Redirect to={EMAIL_SENT_ROUTE} />}
      {!data && <InfoComponent {...propsToPass} />}
    </Container>
  );
};

export default Loader(SendVerificationEmail);
