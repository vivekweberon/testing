import { getMtSendUpdateFlag } from "./mauticForm";
import { currentPageName } from "./branded";

export const getReadMoreFlag = () => {
  return globalThis?.localStorage?.getItem(currentPageName + "-readMore");
};

export const setReadMoreFlag = () => {
  let pageName = currentPageName.split(".")[0];
  let readMoreFlag = localStorage.getItem(pageName + "-readMore");
  if (readMoreFlag == "yes") {
    return;
  } else {
    localStorage.setItem(pageName + "-readMore", "yes");
  }
};

export const getReadMoreButtonState = () => {
  let ret = true;
  if (getMtSendUpdateFlag() || getReadMoreFlag() == "yes") {
    ret = false;
  }
  return ret;
};
