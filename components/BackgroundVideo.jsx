import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { getYTBackgroundVideoUrl, handlePlaySoundButtonClick, loadYTIframePlayerAPI, setBackgroundVideoElementReferences } from "../modules/ytvideo.js";
import Head from "next/head.js";

function BackgroundVideo({ video }) {
  const [videoActionButtonLabel, setVideoActionButtonLabel] = useState("Play Video");
  const [videoUrl, setVideoUrl] = useState("");
  const bgVideoRef = useRef(null);
  const video1Ref = useRef(null);
  const playSoundRef = useRef(null);

  const handleVideoActionButtonClick = () => {
    setVideoActionButtonLabel(handlePlaySoundButtonClick(videoActionButtonLabel));
  };

  useEffect(() => {
    setVideoUrl(getYTBackgroundVideoUrl(video));
  }, []);

  useEffect(() => {
    setBackgroundVideoElementReferences(bgVideoRef, video1Ref, playSoundRef, setVideoActionButtonLabel);
    loadYTIframePlayerAPI();
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/components/BackgroundVideo.css" onError={(e) => logResourceLoadError(e.target)} />
      </Head>
      <div id="bgVideo" ref={bgVideoRef} className="bgVideo">
        <iframe id="video1" className="video1" ref={video1Ref} frameBorder="0" allow="autoplay; fullscreen" src={videoUrl}></iframe>
        <div className="controlButtonContainer">
          <a id="playSound" ref={playSoundRef} onClick={handleVideoActionButtonClick}>
            {videoActionButtonLabel}
          </a>
        </div>
      </div>
    </>
  );
}

export default BackgroundVideo;

BackgroundVideo.propTypes = {
  videoID: PropTypes.string.isRequired,
};
