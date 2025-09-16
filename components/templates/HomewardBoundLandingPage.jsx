"use client";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Script from "next/script.js";
import TextBanner from "../TextBanner.jsx";
import BackgroundVideo from "../BackgroundVideo.jsx";
import PopupForm from "../PopUpForm.jsx";
import Divider from "../FormHeaderComponents/Divider.jsx";
import PhoneCTAButton from "../FormHeaderComponents/PhoneCTAButton.jsx";
import { enableEmbeddedFormForKnownContacts, setReferralFormHeader } from "../../modules/mauticForm.js";
import { getEmailSubmitted } from "../../modules/mauticForm.js";
import { logResourceLoadError } from "../../modules/logger.js";

function HomewardBoundLandingPage({ pageName, title, video, bannerText, phoneCTA, enableGoogleOneTap, ogTags, mauticForm, zDuration, timeInterval, nTimes, controlVideos, customCSSFile }) {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const asideRef = useRef(null);

  useEffect(() => {
    enableEmbeddedFormForKnownContacts(asideRef);
    setReferralFormHeader(mauticForm.referralFormHeader);

    const loadAsynFunction = async () => {
      setEmailSubmitted(await getEmailSubmitted());
    };
    loadAsynFunction();
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="apple-itunes-app" content="app-id=535886823" />

        <meta property="og:title" content={ogTags.og_title} />
        <meta property="og:description" content={ogTags.og_description} />
        <meta property="og:image" content={ogTags.og_image} />
        <meta property="og:url" content={ogTags.og_url} />

        <link rel="stylesheet" href="css/bootstrap.min.css" onError={(e) => logResourceLoadError(e.target)} />
        <link rel="stylesheet" href="css/fa.min.css" onError={(e) => logResourceLoadError(e.target)} />
        <link href="css/lp.css" rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />
        <link href="css/templates/HomewardBoundLandingPage.css" rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />
        {customCSSFile && <link href={`css/pages/${pageName}.css`} rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />}
        <script type="text/javascript" src="https://accounts.google.com/gsi/client" onError={(e) => logResourceLoadError(e.target)} defer />
      </Head>

      <Script src="/js/jquery-3.5.1.min.js" strategy="beforeInteractive" onError={(e) => logResourceLoadError(e.target)} />
      <Script src="js/bootstrap.min.js" strategy="beforeInteractive" onError={(e) => logResourceLoadError(e.target)} />

      <TextBanner bannerText={bannerText} />
      <BackgroundVideo video={video} />

      <div id="mForm" className="container">
        <PhoneCTAButton phoneCTA={phoneCTA} />
        <Divider displayDivider={emailSubmitted} />
        <div className="row form-container">
          <div id="aside" ref={asideRef} className="col-12"></div>
        </div>
      </div>

      <PopupForm controlVideos={controlVideos} enableGoogleOneTap={enableGoogleOneTap} timeInterval={timeInterval} nTimes={nTimes} zDuration={zDuration} mauticForm={mauticForm} />
    </div>
  );
}

export default HomewardBoundLandingPage;
