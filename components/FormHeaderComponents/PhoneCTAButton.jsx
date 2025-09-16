import React from "react";
import globalConfig from "../../configs/global.json";
import { logError } from "../../modules/logger";
import errorMessageConfig from "../../messages/errorMessage.json";
import Head from "next/head";

const PhoneCTAButton = ({ phoneCTA }) => {
  function trackPhoneCTA(href) {
    let arr = href.split(",");
    let pageTitle = "Tried Calling: " + arr[0];
    pageTitle += arr.length > 1 ? " ext:" + arr[arr.length - 1] : "";
    if (window.mt) {
      mt(
        "send",
        "pageview",
        { page_title: pageTitle },
        {
          onerror: function () {
            logError(errorMessageConfig.MT_ERROR);
          },
        }
      );
    } else {
      let err = "mt method not found";
      logError(err);
      console.log(err);
    }
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/components/PhoneCTAButton.css" onError={(e) => logResourceLoadError(e.target)} />
      </Head>
      {phoneCTA.label && phoneCTA.href && (
        <p id="cta" className="cta">
          <a className="cta_button" href={phoneCTA.href} onClick={() => trackPhoneCTA(phoneCTA.href)}>
            {globalConfig["PHONE_CTA-LABEL_PREFIX"]} {phoneCTA.label}
            <i className="fa fa-phone cta_icon"></i>
          </a>
        </p>
      )}
    </>
  );
};

export default PhoneCTAButton;
