import { jwtDecode } from "jwt-decode";
import globalConfig from "../configs/global.json";
import {
  formName,
  oauthLoginRequired,
  progressiveFormName,
  submitOauthNameAndEmail,
} from "./mauticForm.js";

export let displayGSI;
let enableGoogleOneTap = true;
let enableGoogleSignIn = true;
let GSISlotRef;

function updateDisplayGSI(newValue) {
  displayGSI = newValue;
}

export function initGoogleIdentityService() {
  if ((enableGoogleOneTap || enableGoogleSignIn) && oauthLoginRequired) {
    google.accounts.id.initialize({
      client_id: globalConfig.GOOGLE_OAUTH_CLIENT_ID,
      callback: handleCredentialResponse,
      cancel_on_tap_outside: false,
      itp_support: false,
      context: "signin",
      ux_mode: "popup",
    });
  }
}

export function initOneTapSignIn() {
  if (enableGoogleOneTap && oauthLoginRequired) {
    google.accounts.id.prompt();
  }
}

function handleCredentialResponse(response) {
  const cred = jwtDecode(response.credential);
  const selectBy = response.select_by;
  let source = "";

  if (selectBy && selectBy.includes("user")) {
    source = "Google-OneTap";
  } else if (selectBy && selectBy.includes("btn")) {
    source = "Google-SignIn";
  }

  if (cred.email) {
    submitOauthNameAndEmail(cred.email, cred.name, source);
  }
}

export const setGSISlotRef = (newValue) => {
  GSISlotRef = newValue;
};

export function initGoogleSignIn() {
  let email = globalThis?.document?.getElementById(
    "mauticform_input_" + formName + "_f_email"
  );
  if (formName == progressiveFormName && email && oauthLoginRequired) {
    updateDisplayGSI(true);
    google.accounts.id.renderButton(GSISlotRef.current, {
      theme: "filled_blue",
      size: "large",
      type: "standard",
      shape: "rectangular",
      text: "signin_with",
      logo_alignment: "left",
      width: "240px",
    });
  }
}

export function disableGoogleOneTap() {
  enableGoogleOneTap = false;
}
