import { getUserIDFromCookie } from "./tracker";
import globalConfig from "../configs/global.json";
import errorMessageconfig from "../messages/errorMessage.json";

export var _rollbarConfig = {
  accessToken: globalConfig.ROLLBAR_CONFIG.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  retryInterval: 5000,
  autoInstrument: {
    network: true,
    log: true,
    dom: true,
    navigation: true,
    connectivity: true,
    contentSecurityPolicy: true,
    errorOnContentSecurityPolicy: true,
  },
  payload: {
    environment: "",
  },
};

updateRollbarEnvironment();
updateRollbarPerson();

function updateRollbarEnvironment() {
  if (_rollbarConfig) {
    let hostname = globalThis?.window?.location.hostname;
    _rollbarConfig.payload.environment = globalConfig.ROLLBAR_CONFIG
      .ROLLBAR_ENVIRONMENTS[hostname]
      ? globalConfig.ROLLBAR_CONFIG.ROLLBAR_ENVIRONMENTS[hostname]
      : "NOT DEFINED";
  }
}

function updateRollbarPerson() {
  let userID;
  let interval_Rollbar_UserID = setInterval(function () {
    if (globalThis?.window?.getUserIDFromCookie) {
      userID = getUserIDFromCookie();
      if (userID) {
        if (globalThis?.window?.Rollbar) {
          Rollbar.configure({ payload: { person: { id: userID } } });
        } else {
          console.log(errorMessageconfig.ROLLBAR_ERROR);
        }
        clearInterval(interval_Rollbar_UserID);
      }
    }
  }, 1000);
}
