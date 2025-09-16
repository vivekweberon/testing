"use client";
import React from "react";
import fs from "fs/promises";
import path from "path";
import WebsitePage from "../components/templates/WebsitePage";
import ReportPage from "../components/templates/ReportPage";
import AletterLandingPage from "../components/templates/AletterLandingPage";
import FestivalPage from "../components/templates/FestivalPage";
import HomewardBoundLandingPage from "../components/templates/HomewardBoundLandingPage";
import { getPropsFromDataFile } from "../modules/pageBuilderUtility";
import GenericPage from "../components/templates/GenericPage";
import PricingPage from "../components/templates/PricingPage";

function BrandedWebsitePage(props) {
  return (
    <>
      {props.pageType == "WebsitePage" && <WebsitePage {...props} />}
      {props.pageType == "ReportPage" && <ReportPage {...props} />}
      {props.pageType == "AletterLandingPage" && <AletterLandingPage {...props} />}
      {props.pageType == "FestivalPage" && <FestivalPage {...props} />}
      {props.pageType == "HomewardBoundLandingPage" && <HomewardBoundLandingPage {...props} />}
      {props.pageType == "GenericPage" && <GenericPage {...props} />}
      {props.pageType == "PricingPage" && <PricingPage {...props} />}
    </>
  );
}

export default BrandedWebsitePage;

export async function getStaticPaths() {
  try {
    const dataFolderPath = path.join(process.cwd(), "data");
    const files = await fs.readdir(dataFolderPath);
    const paths = files.map((file) => ({
      params: { websitePageName: file.split(".")[0] },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching static paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps(context) {
  const { websitePageName } = context.params;
  return getPropsFromDataFile(websitePageName);
}
