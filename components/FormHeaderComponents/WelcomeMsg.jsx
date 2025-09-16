import React from "react";
import PropTypes from "prop-types";
import globalConfig from "../../configs/global.json";

const WelcomeMsg = ({ alias }) => {
  return alias && <div className="welcomeMessage">{`${globalConfig["FORM_HEADER-WELCOME_MSG"]} ${alias}`}</div>;
};

export default WelcomeMsg;

WelcomeMsg.propTypes = {
  alias: PropTypes.string,
};
