export let currentPageName = getCurrentPageName();

export const getPageID = () => {
  return currentPageName.split(".")[0];
};

function getCurrentPageName() {
  let pageName;
  let path = globalThis?.window?.location.pathname;
  path = decodeURIComponent(path);
  if (path == "/") {
    pageName = "index";
  } else {
    let arr = path.split("/");
    pageName = arr[arr.length - 1];
    pageName = pageName.split(".")[0];
  }
  return pageName;
}
