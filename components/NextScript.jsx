import Script from "next/script";
import React from "react";
import PropTypes from "prop-types";
import { logResourceLoadError } from "../modules/logger";

const NextScript = (props) => {
  return (
    <Script
      strategy="beforeInteractive"
      src={props.src}
      onError={(e) => logResourceLoadError(e.target)}
    ></Script>
  );
};

export default NextScript;
NextScript.propTypes = {
  src: PropTypes.string,
};
