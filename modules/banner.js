import { utmCampaign } from "./tracker";
import globalConfig from "../configs/global.json";
import { isCampaignValid } from "./mauticForm";
import { currentPageName } from "./branded";

let banner_image_url = globalConfig["DEFAULT-BANNER_URL"];

export const getBannerImageURL = () => {
  let banner_image = banner_image_url;
  if (isCampaignValid() && currentPageName && utmCampaign) {
    banner_image = globalConfig["DEFAULT-BANNER_IMG_PATH"] + "c-" + currentPageName + "-" + utmCampaign + "-banner.jpg";
  } else if (currentPageName) {
    banner_image = globalConfig["DEFAULT-BANNER_IMG_PATH"] + "p-" + currentPageName + "-banner.jpg";
  }
  return banner_image;
};

export const getBannerBorderStyle = () => {
  let style = "";
  if (isCampaignValid()) {
    style = "thick solid grey";
  }
  return style;
};
