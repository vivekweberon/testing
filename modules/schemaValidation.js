import WebsitePageSchema from "../schema/WebsitePage.json";
import AletterLandingPageSchema from "../schema/AletterLandingPage.json";
import FestivalPageSchema from "../schema/FestivalPage.json";
import HomewardBoundLandingPageSchema from "../schema/HomewardBoundLandingPage.json";
import ReportPageSchema from "../schema/ReportPage.json";
import fs from "fs";
import path from "path";
import GenericPage from "../schema/GenericPage.json";
import PricingPage from "../schema/PricingPage.json";

const filePath = path.join(process.cwd(), "schema_validation_error.log");
let pageSchema;
let pageType;

export function validateSchema(data, schema, parentKey = "") {
  let invalidKeys = [];

  if (data.pageType) {
    schema = getPageSchema(data);
    pageSchema = schema;
    pageType = data.pageType;
  }

  for (const key in data) {
    const fullKeyPath = buildKeyPath(parentKey, key);

    if (!isValidKey(key, schema, parentKey)) {
      invalidKeys.push(fullKeyPath);
    } else if (isPropertyAnObject(data, key, schema)) {
      const nestedInvalidKeys = validateSchema(data[key], schema[key], fullKeyPath);
      invalidKeys = invalidKeys.concat(nestedInvalidKeys);
    } else if (isPropertyAnArray(data, key)) {
      data[key].map((element) => {
        let elementSchema = getElementSchema(key, parentKey);
        const contentInvalidKeys = validateSchema(element, elementSchema, fullKeyPath);
        invalidKeys = invalidKeys.concat(contentInvalidKeys);
      });
    }
  }

  if (parentKey === "" && invalidKeys.length > 0) {
    logErrors(data.pageName, invalidKeys);
    console.log(`Invalid properties in the data file ${data.pageName}.json:`, invalidKeys);
    return false;
  }

  return invalidKeys;
}

const getPageSchema = (data) => {
  let schema;
  if (data.pageType === "WebsitePage") schema = WebsitePageSchema;
  else if (data.pageType === "ReportPage") schema = ReportPageSchema;
  else if (data.pageType === "AletterLandingPage") schema = AletterLandingPageSchema;
  else if (data.pageType === "FestivalPage") schema = FestivalPageSchema;
  else if (data.pageType === "HomewardBoundLandingPage") schema = HomewardBoundLandingPageSchema;
  else if (data.pageType === "GenericPage") schema = GenericPage;
  else if (data.pageType === "PricingPage") schema = PricingPage;
  return schema;
};

const buildKeyPath = (parent, key) => {
  return parent ? `${parent}.${key}` : key;
};

const isValidKey = (key, schema, parentKey) => {
  return key in schema || (parentKey == "mauticForm.formsets" && key.startsWith("cf:")) || (key == "children" && parentKey.endsWith(".children"));
};

const isPropertyAnObject = (data, key, schema) => {
  return typeof data[key] === "object" && data[key] !== null && typeof schema[key] === "object" && !Array.isArray(schema[key]) && key !== "attributes";
};

const isPropertyAnArray = (data, key) => {
  return (key === "pageContent" || key === "children" || key === "beforeEmailSubmittedContent" || key === "afterEmailSubmittedContent") && Array.isArray(data[key]);
};

const getElementSchema = (key, parentKey) => {
  let schema;
  if ((pageType == "WebsitePage" || pageType == "GenericPage") && key == "pageContent") {
    schema = pageSchema.pageContent[0];
  } else if ((pageType == "WebsitePage" || pageType == "GenericPage") && key == "children") {
    schema = pageSchema.pageContent[0].children[0];
  } else if (pageType == "ReportPage" && key == "children") {
    schema = pageSchema[parentKey.split(".")[0]][0].children[0];
  } else if (pageType == "ReportPage" && key == "beforeEmailSubmittedContent") {
    schema = pageSchema.beforeEmailSubmittedContent[0];
  } else if (pageType == "ReportPage" && key == "afterEmailSubmittedContent") {
    schema = pageSchema.afterEmailSubmittedContent[0];
  }
  return schema;
};

function logErrors(pageName, invalidKeys) {
  if (!Array.isArray(invalidKeys)) {
    throw new Error("Errors should be an array of strings.");
  }
  const errorContent = `Invalid properties in the data file ${pageName}.json :\n${invalidKeys.map((key) => `  - ${key}`).join("\n")}\n\n`;

  fs.appendFile(filePath, errorContent, (err) => {
    if (err) {
      console.error("Failed to append to the file:", err);
    } else {
      console.log("Errors successfully appended to the file.");
    }
  });
}
