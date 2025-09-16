"use client";
import React from "react";
import Head from "next/head";
import Script from "next/script.js";
import PhoneCTAButton from "../FormHeaderComponents/PhoneCTAButton.jsx";
import TextBanner from "../TextBanner.jsx";
import BackgroundVideo from "../BackgroundVideo.jsx";
import PopupForm from "../PopUpForm.jsx";
import { logResourceLoadError } from "../../modules/logger.js";

const FestivalPage = ({ pageName, title, ogTags, video, bannerText, phoneCTA, controlVideos, enableGoogleOneTap, timeInterval, nTimes, zDuration, mauticForm, customCSSFile }) => {
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
        <link href="css/templates/FestivalPage.css" rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />
        {customCSSFile && <link href={`css/pages/${pageName}.css`} rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />}
        <script type="text/javascript" src="https://accounts.google.com/gsi/client" onError={(e) => logResourceLoadError(e.target)} defer></script>
      </Head>

      <Script src="js/jquery-3.5.1.min.js" strategy="beforeInteractive" onError={(e) => logResourceLoadError(e.target)} />
      <Script src="js/bootstrap.min.js" strategy="beforeInteractive" onError={(e) => logResourceLoadError(e.target)} />

      <TextBanner bannerText={bannerText} />
      <BackgroundVideo video={video} />
      <PhoneCTAButton phoneCTA={phoneCTA} />
      <div id="dwc_alias" data-slot="dwc" data-param-slot-name="festivals_alias" className="welcomeMessage"></div>
      <PopupForm controlVideos={controlVideos} enableGoogleOneTap={enableGoogleOneTap} mauticForm={mauticForm} timeInterval={timeInterval} nTimes={nTimes} zDuration={zDuration} />
    </div>
  );
};

export default FestivalPage;
