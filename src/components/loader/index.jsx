import React, { useState } from "react";

import "./loader.css";

export const Loader = (WrappedComponent) => {
  const HOC = (props) => {
    const [isLoading, setLoading] = useState(true);
    const setLoadingState = isComponentLoading => {
      setLoading(isComponentLoading);
    }
    return (
      <>
        {isLoading && <div className="loading">Loading&#8230;</div>}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  }
  return HOC;
}

export default Loader;
