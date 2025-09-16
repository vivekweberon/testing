"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Banner from "../Banner.jsx";
import FooterComponent from "../FooterComponent.jsx";
import PopupForm from "../PopUpForm.jsx";
import { getReadMoreButtonState, setReadMoreFlag } from "../../modules/report.js";
import { logResourceLoadError } from "../../modules/logger.js";
import { getEmailSubmitted, setReportPageName } from "../../modules/mauticForm.js";
import Script from "next/script.js";
import { createMarkup } from "../../modules/content.js";
import parse from "html-react-parser";
import MenuTemplate from "../MenuTemplate.jsx";

const ReportPage = ({ pageName, title, ogTags, bannerProps, footerProps, enableGoogleOneTap, beforeEmailSubmittedContent, afterEmailSubmittedContent, mauticForm, customCSSFile, menu }) => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [displayReadMoreButton, setDisplayReadMoreButton] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  if (mauticForm.reportPageName) setReportPageName(mauticForm.reportPageName);

  const handleReadMoreButtonClick = () => {
    setReadMoreFlag();
    setDisplayReadMoreButton(false);
    setDisplayForm(true);
  };

  useEffect(() => {
    let readMoreButtonNotClicked = getReadMoreButtonState();
    setDisplayReadMoreButton(readMoreButtonNotClicked);
    setDisplayForm(!readMoreButtonNotClicked);
  }, []);

  useEffect(() => {
    if (displayForm) {
      const loadAsynFunction = async () => {
        setEmailSubmitted(await getEmailSubmitted());
      };
      loadAsynFunction();
    }
  }, [displayForm]);

  const beforeEmailSubmitted = beforeEmailSubmittedContent?.map((element, index) => createMarkup({ ...element, key: index }));

  const afterEmailSubmitted = afterEmailSubmittedContent?.map((element, index) => createMarkup({ ...element, key: index }));

  const parsedBeforeEmailSubmittedContent = beforeEmailSubmitted?.map(parse);
  const parsedAfterEmailSubmittedContent = afterEmailSubmitted?.map(parse);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta httpEquiv="content-type" content="text/html;charSet=utf-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-itunes-app" content="app-id=535886823" />

        <meta property="og:title" content={ogTags.og_title} />
        <meta property="og:description" content={ogTags.og_description} />
        <meta property="og:image" content={ogTags.og_image} />
        <meta property="og:url" content={ogTags.og_url} />

        <link href="css/sw/styles3bb8.css" rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />
        <link rel="stylesheet" href="css/sw/t1.css" type="text/css" onError={(e) => logResourceLoadError(e.target)} />
        <link href="css/customStyle.css" rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" type="text/css" onError={(e) => logResourceLoadError(e.target)} />
        <link rel="stylesheet" href="css/newui.css" onError={(e) => logResourceLoadError(e.target)} />
        <link rel="stylesheet" href="css/banner.css" onError={(e) => logResourceLoadError(e.target)} />
        <link rel="stylesheet" href="css/templates/ReportPage.css" onError={(e) => logResourceLoadError(e.target)} />
        {customCSSFile && <link href={`css/pages/${pageName}.css`} rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />}
        <script type="text/javascript" src="https://accounts.google.com/gsi/client" onError={(e) => logResourceLoadError(e.target)} defer></script>
      </Head>

      <Script src="/js/sw/scriptsccc7.js" strategy="beforeInteractive" onError={(e) => logResourceLoadError(e.target)} />
      {menu && <MenuTemplate displayPhone={menu.displayPhone} formsets={mauticForm.formsets} />}
      <div id="page-wrapper">
        <div id="content" className="bgclr0">
          <Banner bannerProps={bannerProps} formsets={mauticForm.formsets} />
          <div className="main-container">
            <div className="main wrapper clearfix bgclr6">
              <div id="greeting">
                <div id="dwc_alias" data-slot="dwc" data-param-slot-name="rpt_alias">
                  Welcome
                </div>
              </div>

              <article id="articlecntm" className="articlecnt">
                {parsedBeforeEmailSubmittedContent}
                {displayReadMoreButton && (
                  <section id="note">
                    {parsedAfterEmailSubmittedContent && (
                      <button onClick={handleReadMoreButtonClick} id="readMore">
                        Read More
                      </button>
                    )}
                  </section>
                )}
                {emailSubmitted && parsedAfterEmailSubmittedContent}
              </article>
            </div>
          </div>
        </div>

        <FooterComponent footerProps={footerProps} />
      </div>
      {displayForm && <PopupForm readMore={true} enableGoogleOneTap={enableGoogleOneTap} mauticForm={mauticForm} />}
      <div id="dwc_ucid" data-slot="dwc" data-param-slot-name="ucid"></div>
    </div>
  );
};

export default ReportPage;
