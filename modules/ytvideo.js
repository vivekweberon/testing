import { logError, logResourceLoadError } from "./logger.js";

let player;
let player2;
let pausedByCode = false;
let pausedByUser = false;
let playedByCode = false;
let playedByUser = false;
let pausedByForm = false;
let bgVideoElement;
let emVideoElement;
let video1Element;
let video2Element;
let playSoundElement;
let bgVideoStart = 0;
let updateBgVideoActionButtonLabel;

export function setBackgroundVideoElementReferences(bgVideoRef, video1Ref, playSoundRef, setVideoActionButtonLabel) {
  bgVideoElement = bgVideoRef;
  video1Element = video1Ref;
  playSoundElement = playSoundRef;
  updateBgVideoActionButtonLabel = setVideoActionButtonLabel;
}

function setEmbeddedVideoElementReferences(emVideoRef, video2Ref) {
  emVideoElement = emVideoRef;
  video2Element = video2Ref;
}

if (typeof window !== "undefined") {
  window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
}

function onYouTubeIframeAPIReady() {
  if (bgVideoElement && isVisible(bgVideoElement)) {
    player = new YT.Player(video1Element.current.id, {
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
        onError: onPlayerError,
      },
    });
  }
  if (emVideoElement && isVisible(emVideoElement)) {
    player2 = new YT.Player(video2Element.current.id, {
      events: {
        onStateChange: onPlayer2StateChange,
        onError: onPlayerError,
      },
    });
  }
  window.onscroll = playVisibleVideos;
}

function onPlayerError(event) {
  let errMsg = "yt_video_load_error: " + event.data;
  if (sessionStorage.getItem(errMsg) != "yes") {
    sessionStorage.setItem(errMsg, "yes");
    logError("Youtube Player Error: " + event.data);
    location.reload();
  }
}

function onPlayer2StateChange(event) {
  let playerStatus = event.data;
  if (playerStatus == 2 && !pausedByCode) {
    setVideoStateVariables(false, true, false, false);
  } else if (playerStatus == 1 && !playedByCode) {
    setVideoStateVariables(true, false, false, false);
  }
}

function setVideoStateVariables(userPlay, userPause, codePlay, codePause) {
  pausedByCode = codePause;
  pausedByUser = userPause;
  playedByCode = codePlay;
  playedByUser = userPlay;
}

function onPlayerReady(event) {
  //player.playVideo();
}

function onPlayerStateChange(event) {
  let playerStatus = event.data;
  if (playerStatus == -1) {
    console.log("unstarted");
  } else if (playerStatus == 0) {
    console.log("ended");
    //player.seekTo(bgVideoStart);
    //player.pauseVideo();
    //playSoundElement.current.innerHTML = "Play Video";
    player.stopVideo();
    updateBgVideoActionButtonLabel("Play Video");
    video1Element.current.style.pointerEvents = "auto";
  } else if (playerStatus == 1) {
    console.log("playing");
    //playSoundElement.current.innerHTML = "Pause Video";
    video1Element.current.style.pointerEvents = "none";
    updateBgVideoActionButtonLabel("Pause Video");
  } else if (playerStatus == 2) {
    console.log("paused");
  } else if (playerStatus == 3) {
    console.log("buffering");
  } else if (playerStatus == 5) {
    console.log("video cued");
  }
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  let contentHeight = document.documentElement.clientHeight;
  let top = rect.top;
  let bottom = rect.bottom;
  let topVisible = top >= 75 && top < contentHeight;
  let bottomVisible = bottom < contentHeight && bottom > 80;
  let middleVisible = top < 75 && bottom > contentHeight;
  return topVisible || bottomVisible || middleVisible;
}

function playVideo(iframePlayer) {
  let state = iframePlayer.getPlayerState();
  if (state == 2) {
    iframePlayer.playVideo();
  }
}

function pauseVideo(iframePlayer) {
  let state = iframePlayer.getPlayerState();
  if (state != 2) {
    iframePlayer.pauseVideo();
  }
}

function isVisible(sectionID) {
  let ret = false;
  let element = sectionID.current;
  if (element) {
    let display = element.style.display;
    if (display != "none") {
      ret = true;
    }
  }
  return ret;
}

function playVisibleVideos() {
  if (bgVideoElement && isVisible(bgVideoElement)) {
    if (isInViewport(video1Element.current)) {
      let action = playSoundElement.current.innerHTML;
      if (action != "Play Video"){
        playVideo(player); 
      }
    } else {
      pauseVideo(player);
    }
  }
  if (emVideoElement && isVisible(emVideoElement)) {
    if (isInViewport(video2Element.current)) {
      if (pausedByCode) {
        setVideoStateVariables(false, false, true, false);
        playVideo(player2);
      }
    } else {
      if (playedByCode || playedByUser) {
        setVideoStateVariables(false, false, false, true);
        pauseVideo(player2);
      }
    }
  }
}

export const getYTBackgroundVideoUrl = (video) => {
  let { videoID, videoStart, videoEnd, cc_load_policy } = video;
  if (videoID) {
    let videoURL = "https://www.youtube.com/embed/" + videoID + "?cc_load_policy=1&controls=0&showinfo=0&disablekb=1&modestbranding=1&rel=0&autoplay=0&mute=0&playsinline=1&enablejsapi=1";

    if (videoStart) {
      videoURL += "&start=" + videoStart;
      bgVideoStart = videoStart;
    }
    if (videoEnd) {
      videoURL += "&end=" + videoEnd;
    }
    if(cc_load_policy === 0){
      videoURL = videoURL.replace("cc_load_policy=1", "cc_load_policy=0");
    }
    let origin = `&origin=https%3A%2F%2F${globalThis?.window?.location.hostname}`;
    return videoURL + origin;
  }
};

export const handlePlaySoundButtonClick = (playerAction) => {
  let ret = "";
  if (player.isMuted()) {
    playBGVideoFromBeginning();
    ret = "Pause Video";
  } else {
    if (playerAction == "Play Video") {
      let state = player.getPlayerState();
      if (state == 0) {
        playBGVideoFromBeginning();
        ret = "Pause Video";
      } else {
        resumeBGVideo();
        ret = "Pause Video";
      }
    } else if (playerAction == "Pause Video") {
      player.pauseVideo();
      ret = "Play Video";
    }
  }
  return ret;
};

function playBGVideoFromBeginning() {
  player.seekTo(bgVideoStart);
  player.unMute();
}

function resumeBGVideo() {
  player.playVideo();
}

const getYTEmbeddedVideoUrl = (embeddedVideoID) => {
  if (embeddedVideoID && embeddedVideoID != "") {
    const videoURL = "https://www.youtube.com/embed/" + embeddedVideoID + "?rel=0&controls=1&autoplay=0&cc_load_policy=1&modestbranding=1&showinfo=0&playsinline=1&enablejsapi=1" + "&origin=" + globalThis?.window?.location.hostname;
    return videoURL;
  }
};

export function loadYTIframePlayerAPI() {
  var tag = document.createElement("script");
  tag.id = "iframe-yt";
  tag.src = "https://www.youtube.com/iframe_api";
  tag.onerror = function () {
    logResourceLoadError(this);
  };
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

export function playVideosIfPaused() {
  if (player && isInViewport(video1Element.current)) {
    playVideo(player);
  }
  if (player2 && isInViewport(video2Element.current) && pausedByForm) {
    playVideo(player2);
    pausedByForm = false;
  }
}

export function pauseVideosIfPlaying() {
  if (player && isInViewport(video1Element.current)) {
    pauseVideo(player);
  }
  if (player2 && isInViewport(video2Element.current)) {
    let state = player2.getPlayerState();
    if (state != 2) {
      player2.pauseVideo();
      pausedByForm = true;
    }
  }
}
