import React from "react";
import globalConfig from "../../configs/global.json";
import Head from "next/head";

const Divider = ({ displayDivider }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/components/Divider.css" onError={(e) => logResourceLoadError(e.target)} />
      </Head>
      {displayDivider && <div className="divider">{globalConfig["FORM_HEADER-DIVIDER_TEXT"]}</div>}
    </>
  );
};

export default Divider;
