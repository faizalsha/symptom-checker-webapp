import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

import { getCurrentUserToken } from "./utlis";
import loadUser from "./redux/actions/loadUserActions";
import Routes from "./routes";

function App() {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  /**
   * Loading user when `App` component loads or when auth.token gets update
   */
  useEffect(() => {
    const storedToken = getCurrentUserToken();
    if (storedToken) loadUser(storedToken, dispatch);
  }, [token]);

  return <Routes />;
}

export default App;
