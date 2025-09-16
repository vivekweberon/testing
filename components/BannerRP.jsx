import React, { useEffect, useRef, useState } from "react";
import { getBannerBorderStyle, getBannerImageURL } from "../modules/banner";
import globalConfig from "../configs/global.json";
import { logResourceLoadError } from "../modules/logger";
import { setHeaderContainerRef } from "../modules/pageutil";
import { setFormsets } from "../modules/mauticForm";
import parse from "html-react-parser";
import Head from "next/head";

const BannerRP = ({ bannerProps, formsets }) => {
  let defaultImgURL = bannerProps.imageSrc ? bannerProps.imageSrc : globalConfig["DEFAULT-BANNER_URL"];
  const [bannerImage, setBannerImage] = useState(defaultImgURL);
  const [bannerImageBorder, setBannerImageBorder] = useState("");
  const headerContainerRef = useRef(null);
  const bannerStyle = bannerProps.imageSrc ? "banner" : "animatedBanner";

  useEffect(() => {
    if (!bannerProps.imageSrc) {
      setFormsets(formsets);
      setBannerImage(getBannerImageURL());
      setBannerImageBorder(getBannerBorderStyle());
    }
    setHeaderContainerRef(headerContainerRef);
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/components/BannerRP.css" onError={(e) => logResourceLoadError(e.target)} />
      </Head>
      <div className="headerContainer" ref={headerContainerRef} role="banner">
        <div className="butterBarContainer"></div>
        <header className="wrapper clearfix bgclr8 banner" style={bannerImageBorder ? { borderTop: `${bannerImageBorder}` } : null}>
          <div className="praveenImg">
            <div className="pp">{bannerProps.imgOverlay && <img src={globalConfig["DEFAULT-PRAVEEN_IMG_SRC"]} width="100%" alt="praveen image" onError={(e) => logResourceLoadError(e.target)} />}</div>

            <div className="bannerTextContainer">
              {bannerProps.text.map((header) => (
                <h2>{parse(header)}</h2>
              ))}
            </div>
          </div>

          <img className={bannerStyle} src={bannerImage} alt={bannerProps.imageAlt} onError={(e) => logResourceLoadError(e.target)} />
        </header>
      </div>
    </>
  );
};

export default BannerRP;
