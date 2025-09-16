import fs from "fs/promises";
import { validateSchema } from "./schemaValidation";

export const getPropsFromDataFile = async (fileName) => {
  try {
    let data = await fs.readFile(`data/${fileName}.json`, "utf8");
    data = JSON.parse(data);
    data.pageName = fileName;
    const validSchema = validateSchema(data);
    if (!validSchema) {
      return {
        props: {},
      };
    }
    return {
      props: data,
    };
  } catch (error) {
    console.error("Error fetching property data:", error);
    return {
      props: {
        propertyData: null,
        images: [],
      },
    };
  }
};
