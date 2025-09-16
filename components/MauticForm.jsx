import { useEffect } from "react";
import {
  alias,
  displayDivider1,
  formHeader,
  loadForm,
  setMauticForms,
  enablePopupForm,
  setFormHeaders,
} from "../modules/mauticForm";
import { disableGoogleOneTap, displayGSI } from "../modules/googleOauth";

const MauticForm = ({
  formSlotIDRef,
  readMore,
  setFormHeaderState,
  popupForm,
  enableGoogleOneTap,
  mauticForm,
}) => {
  let { emailFormHeader, phoneFormHeader, noFormHeader, formsets } = mauticForm;

  useEffect(() => {
    const loadFormAndScript = async () => {
      if (enableGoogleOneTap === false) disableGoogleOneTap();
      setFormHeaders(emailFormHeader, phoneFormHeader, noFormHeader);
      if (popupForm)
        enablePopupForm(
          mauticForm.timeInterval,
          mauticForm.nTimes,
          mauticForm.zDuration,
          mauticForm.controlVideos
        );
      setMauticForms(formsets);
      await loadForm(formSlotIDRef, readMore);
      setFormHeaderState({
        alias: alias,
        formHeader: formHeader,
        displayDivider1: displayDivider1,
        displayGSIButton: displayGSI,
        displayDivider2: displayGSI,
        displaySecondaryFormHeader: displayGSI,
      });
    };
    loadFormAndScript();
  }, []);

  return null;
};

export default MauticForm;
