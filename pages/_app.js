import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { loadGTMScript } from "../modules/gtm";

function MyApp({ Component, pageProps }) {
  // To load GTM script for all the pages
  useEffect(() => {
    loadGTMScript();
  }, []);

  return (
    <>
      <Component {...pageProps}></Component>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
