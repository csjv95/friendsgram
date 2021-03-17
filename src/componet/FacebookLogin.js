import React from "react";

const FacebookLogin = () => {
  return (
    <div
      className="fb-login-button"
      data-width=""
      data-size="large"
      data-button-type="continue_with"
      data-layout="default"
      data-auto-logout-link="true"
      data-use-continue-as="true"
    ></div>
  );
};

export default FacebookLogin;
