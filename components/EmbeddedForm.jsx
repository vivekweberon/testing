import React, { useState } from "react";
import WelcomeMsg from "./FormHeaderComponents/WelcomeMsg";
import FormHeader from "./FormHeaderComponents/FormHeader";
import GoogleSignInButton from "./FormHeaderComponents/GoogleSignInButton";
import PhoneCTAButton from "./FormHeaderComponents/PhoneCTAButton";
import Divider from "./FormHeaderComponents/Divider";
import globalConfig from "../configs/global.json";
import MauticForm from "./MauticForm";
import PropTypes from "prop-types";

const EmbeddedForm = ({ formSlotIDRef, enableGoogleOneTap, phoneCTA, mauticForm }) => {
  const [formHeaderState, setFormHeaderState] = useState({
    alias: "",
    formHeader: "",
    displayDivider1: false,
    displayGSIButton: true,
    displayDivider2: false,
    displaySecondaryFormHeader: false,
  });

  return (
    <>
      <span>
        <PhoneCTAButton phoneCTA={phoneCTA} />

        {phoneCTA.label && phoneCTA.href && <Divider displayDivider={formHeaderState.displayDivider1} />}

        <WelcomeMsg alias={formHeaderState.alias} />
        <FormHeader displayFormHeader={formHeaderState.formHeader} formHeader={formHeaderState.formHeader} cssClassName="formHeader" />
        <GoogleSignInButton displayGSIButton={formHeaderState.displayGSIButton} />
        <Divider displayDivider={formHeaderState.displayDivider2} />
        <FormHeader displayFormHeader={formHeaderState.displaySecondaryFormHeader} formHeader={globalConfig["FORM_HEADER-SECONDARY_FORM_HEADER"]} cssClassName="secondaryFormHeader" />
      </span>
      <MauticForm popupForm={false} formSlotIDRef={formSlotIDRef} setFormHeaderState={setFormHeaderState} enableGoogleOneTap={enableGoogleOneTap} mauticForm={mauticForm} />
    </>
  );
};

export default EmbeddedForm;

EmbeddedForm.propTypes = {
  formSlotIDRef: PropTypes.object,
};
