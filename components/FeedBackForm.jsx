import React, { useEffect, useRef, useState } from "react";
import { enableUnsubscribe, hideFeedbackForm, resubscribe, setFeedbackModalRef, setResubscribeSuccessMessage, setUnsubscribeAnonymousUserMessage, unsubscribe, userHasUnsubscribed } from "../modules/feedbackForm.js";
import globalConfig from "../configs/global.json";
import FormHeader from "./FormHeaderComponents/FormHeader.jsx";
import Head from "next/head.js";

const FeedBackForm = ({ unsubscribeProps }) => {
  const [displayUnsubscribeMessage, setDisplayUnsubscribeMessage] = useState(true);
  const feedbackModalRef = useRef(null);
  const feedbackFormSlotRef = useRef(null);
  let { unsubsbscribeCollateralType, FEEDBACK_FORM_HEADER, UNSUBSCRIBE_INSTRUCTION, UNSUBSCRIBE_LINK_TEXT, RESUBSCRIBE_LINK_TEXT, RESUBSCRIBE_INSTRUCTION, UNSUBSCRIBE_ANONYMOUS_USER_MESSAGE, RESUBSCRIBE_SUCCESS_MESSAGE } = unsubscribeProps;

  const unsubscribeInstruction = UNSUBSCRIBE_INSTRUCTION ? UNSUBSCRIBE_INSTRUCTION : globalConfig.UNSUBSCRIBE_INSTRUCTION;
  const unsubscribeLinkText = UNSUBSCRIBE_LINK_TEXT ? UNSUBSCRIBE_LINK_TEXT : globalConfig.UNSUBSCRIBE_LINK_TEXT;
  const resubscribeInstruction = RESUBSCRIBE_INSTRUCTION ? RESUBSCRIBE_INSTRUCTION : globalConfig.RESUBSCRIBE_INSTRUCTION;
  const resubscribeLinkText = RESUBSCRIBE_LINK_TEXT ? RESUBSCRIBE_LINK_TEXT : globalConfig.RESUBSCRIBE_LINK_TEXT;
  const formHeader = FEEDBACK_FORM_HEADER ? FEEDBACK_FORM_HEADER : globalConfig.FEEDBACK_FORM_HEADER;

  const handleFeedbackClose = () => {
    hideFeedbackForm();
  };

  const handleUnsubscribeClick = (event) => {
    unsubscribe(event, feedbackFormSlotRef);
  };

  const handleResubscribeClick = async (event) => {
    let resubscribed = await resubscribe(event);
    setDisplayUnsubscribeMessage(resubscribed);
  };

  useEffect(() => {
    enableUnsubscribe(unsubsbscribeCollateralType);
    setDisplayUnsubscribeMessage(!userHasUnsubscribed());
    setFeedbackModalRef(feedbackModalRef);
    setUnsubscribeAnonymousUserMessage(UNSUBSCRIBE_ANONYMOUS_USER_MESSAGE);
    setResubscribeSuccessMessage(RESUBSCRIBE_SUCCESS_MESSAGE);
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/components/FeedbackForm.css" onError={(e) => logResourceLoadError(e.target)} />
      </Head>
      <div className="subscribeOrUnsubscribeButton">
        {displayUnsubscribeMessage ? (
          <div id="unsubscribe" className="unsubscribe">
            {unsubscribeInstruction}
            <a href="" onClick={handleUnsubscribeClick}>
              {unsubscribeLinkText}
            </a>
          </div>
        ) : (
          <div id="resubscribe" className="resubscribe">
            {resubscribeInstruction}
            <a href="" onClick={handleResubscribeClick}>
              {resubscribeLinkText}
            </a>
          </div>
        )}
      </div>
      <div id="feedbackModal" className="cmodal" ref={feedbackModalRef}>
        <div id="feedbackContent" className="cmodal-content" ref={feedbackFormSlotRef}>
          <span id="feedbackClose" className="close" onClick={handleFeedbackClose}>
            x
          </span>
          <FormHeader displayFormHeader={true} cssClassName="formHeader" formHeader={formHeader} />
        </div>
      </div>
    </>
  );
};

export default FeedBackForm;
