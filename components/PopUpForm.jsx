import React, { useEffect, useRef, useState } from "react";
import WelcomeMsg from "./FormHeaderComponents/WelcomeMsg";
import FormHeader from "./FormHeaderComponents/FormHeader";
import GoogleSignInButton from "./FormHeaderComponents/GoogleSignInButton";
import Divider from "./FormHeaderComponents/Divider";
import globalConfig from "../configs/global.json";
import MauticForm from "./MauticForm";
import { playVideosIfPaused } from "../modules/ytvideo";
import { getLocalStorageLpModalCloseClickCount, getNTimes, hidePopupForm, setLocalStorageLpModalCloseClickCount, setLpModalCloseRef, setLpModalContentRef, setLpModalRef, showPopupForm } from "../modules/mauticForm";
import Head from "next/head";

const PopupForm = ({ readMore, enableGoogleOneTap, mauticForm }) => {
  const [formHeaderState, setFormHeaderState] = useState({
    alias: "",
    formHeader: "",
    displayDivider1: false,
    displayDivider2: false,
    displayGSIButton: true,
    displaySecondaryFormHeader: false,
  });
  const [lpModalCloseClickCount, setLpModalCloseClickCount] = useState(getLocalStorageLpModalCloseClickCount());
  const lpModalContentRef = useRef(null);
  const lpModalRef = useRef(null);
  const lpModalCloseRef = useRef(null);

  const handleLpModalClose = async () => {
    if (lpModalCloseClickCount < getNTimes()) {
      hidePopupForm();
      let count = lpModalCloseClickCount + 1;
      setLocalStorageLpModalCloseClickCount(count);
      setLpModalCloseClickCount(count);
      if (mauticForm.controlVideos) {
        playVideosIfPaused();
      }
      showPopupForm();
    }
  };

  useEffect(() => {
    setLpModalRef(lpModalRef);
    setLpModalContentRef(lpModalContentRef);
    setLpModalCloseRef(lpModalCloseRef);
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/components/PopUpForm.css" onError={(e) => logResourceLoadError(e.target)} />
      </Head>
      <div id="lpModal" ref={lpModalRef} className="cmodal">
        <div id="lpModalContent" className="cmodal-content" ref={lpModalContentRef}>
          <span id="lpModalClose" className="close" onClick={handleLpModalClose} ref={lpModalCloseRef}>
            x
          </span>
          <span>
            <WelcomeMsg alias={formHeaderState.alias} />
            <FormHeader displayFormHeader={formHeaderState.formHeader} formHeader={formHeaderState.formHeader} cssClassName="formHeader" />
            <GoogleSignInButton displayGSIButton={formHeaderState.displayGSIButton} />
            <Divider displayDivider={formHeaderState.displayDivider2} />
            <FormHeader displayFormHeader={formHeaderState.displaySecondaryFormHeader} formHeader={globalConfig["FORM_HEADER-SECONDARY_FORM_HEADER"]} cssClassName="secondaryFormHeader" />
          </span>
          <MauticForm formSlotIDRef={lpModalContentRef} readMore={readMore} setFormHeaderState={setFormHeaderState} popupForm={true} enableGoogleOneTap={enableGoogleOneTap} mauticForm={mauticForm} />
        </div>
      </div>
    </>
  );
};

export default PopupForm;
