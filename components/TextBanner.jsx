import React from "react";
import parse from "html-react-parser";
import Head from "next/head";

const TextBanner = ({ bannerText }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/components/TextBanner.css" onError={(e) => logResourceLoadError(e.target)} />
      </Head>
      <div id="banner" className="bannerContainer">
        <div className="bannerTextContainer">
          <div>
            <h1 id="usp">
              <div className="bannerText">{parse(bannerText)}</div>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextBanner;
