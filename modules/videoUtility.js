// This function is not invoked anywhere and the videoRef should be passed from the component to modules through function and instead of passing the parentTag id parentTag ref should be passed
function loadVideo(params, parentTagRef) {
  let osWidth;
  if (parentTagRef != undefined && parentTagRef != null) {
    let parentElement = parentTagRef.current;
    if (parentElement != null) {
      let width = parentElement.offsetWidth;
      videoRef.current.style.width = "" + (width - 30) + "px";
      osWidth = width;
    }
  }
  if (params != undefined) {
    setVideoWidthAndParams(params, osWidth);
  }
}

function setVideoWidthAndParams(params, osWidth) {
  let vtimer0 = setInterval(function () {
    let iframe = globalThis?.document?.getElementById("me_youtube_0_container");
    if (iframe != null && iframe.getAttribute("src") != null) {
      if (osWidth != undefined) {
        iframe.style.width = "" + (osWidth - 30) + "px";
        globalThis.document.getElementById("mep_0").style.width = "" + (osWidth - 30) + "px";
      }
      let isource = iframe.getAttribute("src");
      let arr = isource.split("controls=0");
      let nsource = arr[0] + params + arr[1];
      iframe.setAttribute("src", nsource);
      clearInterval(vtimer0);
    }
  }, 200);
}

// currently this function is not used any of the created landing page template
// when the function is invoked it should has parentTagRef as a parameter and videoRef should be passed down from that component to this module
const resizeVideo = (parentTagRef) => {
  if (parentTagRef != undefined && parentTagRef != null) {
    let parentElement = parentTagRef.current;
    if (parentElement != null) {
      let width = parentElement.offsetWidth;
      let mp = document.getElementById("mep_0");
      if (mp != null) {
        mp.style.width = "" + (width - 30) + "px";
      }
      let video = videoRef.current;
      if (video != null) {
        video.style.width = "" + (width - 30) + "px";
      }
      let iframe = document.getElementById("me_youtube_0_container");
      if (iframe != null && iframe.getAttribute("src") != null) {
        iframe.style.width = "" + (width - 30) + "px";
      }
    }
  }
};
