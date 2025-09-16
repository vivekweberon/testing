import React, { useEffect, useRef } from "react";
import { setGSISlotRef } from "../../modules/googleOauth";
import Head from "next/head";

const GoogleSignInButton = ({ displayGSIButton }) => {
  const googleSignInButton = useRef();
  useEffect(() => {
    setGSISlotRef(googleSignInButton);
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/components/BackgroundVideo.css" onError={(e) => logResourceLoadError(e.target)} />
      </Head>
      {displayGSIButton && <div className="googleSignInButton" ref={googleSignInButton}></div>}
    </>
  );
};

export default GoogleSignInButton;
