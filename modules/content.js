export function createMarkup(element) {
  const { type: tagName, attributes, content, children } = element;

  if (typeof tagName !== "string" && typeof attributes !== "object" && typeof children !== "object" && typeof content !== "string") {
    throw new Error("Invalid arguments. Provide a valid tag name and attributes object.");
  }
  const selfClosingTags = ["br", "hr", "img"];
  let attributesString = "";
  if (attributes) {
    attributesString = Object.entries(attributes)
      .map(([key, value]) => {
        if (key === "style" && typeof value === "object") {
          const styleString = Object.entries(value)
            .map(([styleKey, styleValue]) => `${styleKey.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${styleValue}`)
            .join("; ");
          return `style="${styleString}"`;
        } else if (typeof value === "boolean") {
          return value ? key : "";
        } else {
          return `${key}="${value}"`;
        }
      })
      .filter(Boolean)
      .join(" ");
  }

  // Handle self-closing tags
  if (selfClosingTags.includes(tagName)) {
    return `<${tagName}${attributesString ? ` ${attributesString}` : ""} />`;
  }

  const contentMarkup = content || "";
  const childrenMarkup = Array.isArray(children) ? children.map(createMarkup).join("") : "";

  return `<${tagName}${attributesString ? ` ${attributesString}` : ""}>${contentMarkup}${childrenMarkup}</${tagName}>`;
}
