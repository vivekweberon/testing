"use client";
import React, { useRef } from "react";
import Head from "next/head";
import FooterComponent from "../FooterComponent";
import EmbeddedForm from "../EmbeddedForm";
import { logResourceLoadError } from "../../modules/logger";
import Script from "next/script";
import { setReferralFormHeader, setReportPageName } from "../../modules/mauticForm";
import { createMarkup } from "../../modules/content";
import parse from "html-react-parser";
import MenuTemplateRP from "../MenuTemplateRP";
import BannerRP from "../BannerRP";
import BackgroundVideo from "../BackgroundVideo";
import globalConfig from "../../configs/global.json";
import MenuTemplate from "../MenuTemplate";
import Banner from "../Banner";

function WebsitePage(props) {
  const { pageName, title, ogTags, bannerProps, phoneCTA, menu, enableGoogleOneTap, footerProps, mauticForm, pageContent, footerImage, customCSSFile, video, chatBot } = props;
  let chatBotDFAgent;
  if (chatBot.enableChatBot) {
    chatBotDFAgent = chatBot.chatbotDFAgent ? chatBot.chatbotDFAgent : globalConfig["DEFAULT-CHATBOT-DF-AGENT"];
  }

  const asideRef = useRef(null);
  setReportPageName(mauticForm.reportPageName);

  if (mauticForm.referralFormHeader) setReferralFormHeader(mauticForm.referralFormHeader);

  let articleWidth = !mauticForm.formsets ? { width: "100%" } : {};
  let asideWidth = !mauticForm.formsets ? { width: "0px", display: "none" } : !pageContent ? { width: "100%" } : {};

  const content = Array.isArray(pageContent) ? pageContent?.map((element, index) => createMarkup({ ...element, key: index })) : [];
  const parsedContent = content?.map(parse);

  const setPageCampaignSource = () => {
    if (typeof setChatbotDFAgent === "function") {
      setChatbotDFAgent(chatBotDFAgent);
    }
  };
  return (
    <>
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

        <link href="css/sw/styles3bb8.css?v=AUcpKiC1BEGp1mp0rFd8QrbpJS68UXwJcjvhlicFcHQ1" rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />
        <link rel="stylesheet" href="css/sw/t1.css" type="text/css" onError={(e) => logResourceLoadError(e.target)} />
        <link href="css/customStyle.css" rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" type="text/css" onError={(e) => logResourceLoadError(e.target)} />
        <link rel="stylesheet" href="css/newui.css" onError={(e) => logResourceLoadError(e.target)} />
        <link rel="stylesheet" href="css/banner.css" onError={(e) => logResourceLoadError(e.target)} />
        <link rel="stylesheet" href="css/bootstrap.min.css" onError={(e) => logResourceLoadError(e.target)} />
        <link rel="stylesheet" href="css/fa.min.css" onError={(e) => logResourceLoadError(e.target)} />
        <link rel="stylesheet" href="css/templates/WebsitePage.css" onError={(e) => logResourceLoadError(e.target)} />
        {video && <link href="css/lp.css" rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />}
        <link rel="stylesheet" href="css/rp.css" onError={(e) => logResourceLoadError(e.target)} />
        {chatBot.enableChatBot && <link rel="stylesheet" href="/css/chatbot.css" onError={(e) => logResourceLoadError(e.target)} />}
        {customCSSFile && <link href={`css/pages/${pageName}.css`} rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />}
        <script async type="text/javascript" src="https://accounts.google.com/gsi/client" onError={(e) => logResourceLoadError(e.target)} />
      </Head>

      <Script src="js/jquery-3.5.1.min.js" strategy="beforeInteractive" onError={(e) => logResourceLoadError(e.target)} />

      {chatBot.enableChatBot && (
        <>
          <Script
            src="/js/chatbot.js"
            onLoad={() => {
              setPageCampaignSource();
            }}
            onError={(e) => logResourceLoadError(e.target)}
          />
          <Script src="/js/index.js" onError={(e) => logResourceLoadError(e.target)} />
          <Script src="https://kit.fontawesome.com/c3c47df7d6.js" onError={(e) => logResourceLoadError(e.target)} />
        </>
      )}

      <div id="page-wrapper">
        <div id="content" className="bgclr0">
          {menu && <MenuTemplateRP displayPhone={menu.displayPhone} formsets={mauticForm.formsets} />}
          <BannerRP bannerProps={bannerProps} formsets={mauticForm.formsets} />
          <div className="main-container">
            <div className="main wrapper clearfix bgclr6">
              <article className="bgclr8" style={articleWidth}>
                <div id="articlecntm" className="articlecnt">
                  {video && <BackgroundVideo video={video} />}
                  {parsedContent && parsedContent}
                </div>
              </article>
              <aside style={asideWidth} className="bgclr3" id="aside" ref={asideRef}>
                {mauticForm.formsets && <EmbeddedForm formSlotIDRef={asideRef} phoneCTA={phoneCTA} enableGoogleOneTap={enableGoogleOneTap} mauticForm={mauticForm} />}
              </aside>
            </div>
          </div>
          {footerImage && (
            <div class="wrapper clearfix bgclr8">
              <img src={footerImage.src} width="100%" alt={footerImage.alt} onError={(e) => logResourceLoadError(e.target)} />
            </div>
          )}
        </div>
        {footerProps && <FooterComponent footerProps={footerProps} />}
      </div>
      {chatBot.enableChatBot && <div id="chatContain"></div>}
    </>
  );
}

export default WebsitePage;
