import React from "react";
import WebsitePage from "../components/templates/WebsitePage";
import { getPropsFromDataFile } from "../modules/pageBuilderUtility";

const index = (props) => {
  return (
    <>
      <WebsitePage {...props} />
    </>
  );
};

export default index;

export async function getStaticProps() {
  return getPropsFromDataFile("index");
}