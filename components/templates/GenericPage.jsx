"use client";
import React, { useEffect, useRef } from "react";
import Script from "next/script.js";
import Head from "next/head";
import TextBanner from "../TextBanner.jsx";
import BackgroundVideo from "../BackgroundVideo.jsx";
import FeedBackForm from "../FeedBackForm.jsx";
import EmbeddedForm from "../EmbeddedForm.jsx";
import { logResourceLoadError } from "../../modules/logger.js";
import BannerRP from "../BannerRP.jsx";
import { createMarkup } from "../../modules/content.js";
import parse from "html-react-parser";
import MenuTemplateRP from "../MenuTemplateRP.jsx";
import globalConfig from "../../configs/global.json";

const GenericPage = ({ pageName, title, video, bannerText, bannerProps, phoneCTA, ogTags, enableGoogleOneTap, unsubscribeProps, mauticForm, pageContent, customCSSFile, menu, chatBot }) => {
  const asideRef = useRef(null);
  let chatBotDFAgent;
  if (chatBot.enableChatBot) {
    chatBotDFAgent = chatBot.chatbotDFAgent ? chatBot.chatbotDFAgent : globalConfig["DEFAULT-CHATBOT-DF-AGENT"];
  }

  const setPageCampaignSource = () => {
    if (typeof setChatbotDFAgent === "function") {
      console.log("chatBotDFAgent", chatBotDFAgent);
      setChatbotDFAgent(chatBotDFAgent);
    }
  };

  const content = Array.isArray(pageContent) ? pageContent?.map((element, index) => createMarkup({ ...element, key: index })) : [];
  const parsedContent = content?.map(parse);
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

        {menu && (
          <>
            <link href="css/sw/styles3bb8.css?v=AUcpKiC1BEGp1mp0rFd8QrbpJS68UXwJcjvhlicFcHQ1" rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />
            <link rel="stylesheet" href="css/sw/t1.css" type="text/css" onError={(e) => logResourceLoadError(e.target)} />
            <link href="css/customStyle.css" rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />
            <link rel="stylesheet" href="css/newui.css" onError={(e) => logResourceLoadError(e.target)} />
          </>
        )}

        <link rel="stylesheet" href="css/bootstrap.min.css" onError={(e) => logResourceLoadError(e.target)} />
        <link rel="stylesheet" href="css/fa.min.css" onError={(e) => logResourceLoadError(e.target)} />
        <link href="css/lp.css" rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />
        <link rel="stylesheet" href="css/banner.css" onError={(e) => logResourceLoadError(e.target)} />
        <link rel="stylesheet" href="css/rp.css" onError={(e) => logResourceLoadError(e.target)} />
        <link rel="stylesheet" href="css/templates/GenericPage.css" onError={(e) => logResourceLoadError(e.target)} />
        {chatBot.enableChatBot && <link rel="stylesheet" href="/css/chatbot.css" onError={(e) => logResourceLoadError(e.target)} />}
        {customCSSFile && <link href={`css/pages/${pageName}.css`} rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />}
        <script type="text/javascript" src="https://accounts.google.com/gsi/client" onError={(e) => logResourceLoadError(e.target)} defer></script>
      </Head>

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

      <Script src="js/jquery-3.5.1.min.js" strategy="beforeInteractive" onError={(e) => logResourceLoadError(e.target)} />
      <Script src="js/bootstrap.min.js" strategy="beforeInteractive" onError={(e) => logResourceLoadError(e.target)} />
      <div id="content">
        {menu && <MenuTemplateRP menu={menu} />}
        {bannerText && <TextBanner bannerText={bannerText} />}
        {bannerProps && <BannerRP bannerProps={bannerProps} formsets={mauticForm.formsets} />}
        {video && <BackgroundVideo video={video} />}
        <div className="pageContent">{parsedContent && parsedContent}</div>
      </div>

      <div id="mForm" className="container">
        <div className="row form-container">
          <div id="aside" ref={asideRef} className="col-12">
            <EmbeddedForm formSlotIDRef={asideRef} enableGoogleOneTap={enableGoogleOneTap} phoneCTA={phoneCTA} mauticForm={mauticForm} />
          </div>
        </div>
      </div>

      {unsubscribeProps && <FeedBackForm unsubscribeProps={unsubscribeProps} />}
      {chatBot.enableChatBot && <div id="chatContain"></div>}
    </div>
  );
};

export default GenericPage;
