"use client";
import React, { useRef } from "react";
import Script from "next/script.js";
import Head from "next/head";
import TextBanner from "../TextBanner.jsx";
import BackgroundVideo from "../BackgroundVideo.jsx";
import FeedBackForm from "../FeedBackForm.jsx";
import EmbeddedForm from "../EmbeddedForm.jsx";
import { logResourceLoadError } from "../../modules/logger.js";

const AletterLandingPage = ({ pageName, title, video, bannerText, phoneCTA, ogTags, enableGoogleOneTap, unsubscribeProps, mauticForm, pageContent, customCSSFile }) => {
  const asideRef = useRef(null);
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
        <link rel="stylesheet" href="css/lp-aletter_galeranch.css" onError={(e) => logResourceLoadError(e.target)}></link>
        <link href="css/lp.css" rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />
        <link href="css/templates/AletterLandingPage.css" rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />
        {customCSSFile && <link href={`css/pages/${pageName}.css`} rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />}
        <script type="text/javascript" src="https://accounts.google.com/gsi/client" onError={(e) => logResourceLoadError(e.target)} defer></script>
      </Head>

      <Script src="js/jquery-3.5.1.min.js" strategy="beforeInteractive" onError={(e) => logResourceLoadError(e.target)} />
      <Script src="js/bootstrap.min.js" strategy="beforeInteractive" onError={(e) => logResourceLoadError(e.target)} />

      <TextBanner bannerText={bannerText} />
      <BackgroundVideo video={video} />

      <div id="mForm" className="container">
        <div className="row form-container">
          {pageContent && (
            <div id="content" className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-12 header-container">
                  <h1>{pageContent}</h1>
                </div>
              </div>
            </div>
          )}
          <div id="aside" ref={asideRef} className="col-12">
            <EmbeddedForm formSlotIDRef={asideRef} enableGoogleOneTap={enableGoogleOneTap} phoneCTA={phoneCTA} mauticForm={mauticForm} />
          </div>
        </div>
      </div>

      {unsubscribeProps && <FeedBackForm unsubscribeProps={unsubscribeProps} />}
    </div>
  );
};

export default AletterLandingPage;
