import React from "react";
import globalConfig from "../configs/global.json";

const FooterComponent = ({ footerProps }) => {
  return (
    <div className="footer-container">
      <footer className="footer wrapper">
        <div id="contactinfo">
          <div id="disclosure">
            <center>
              <div>{globalConfig["PAGE_FOOTER-ADDRESS_LINE1"] && globalConfig["PAGE_FOOTER-ADDRESS_LINE1"]}</div>
              <div> {globalConfig["PAGE_FOOTER-ADDRESS_LINE2"] && globalConfig["PAGE_FOOTER-ADDRESS_LINE2"]}</div>
              <div> {footerProps.displayEmail && <a href={`mailto:${globalConfig["DEFAULT-EMAIL"]}`}>{globalConfig["DEFAULT-EMAIL"]}</a>}</div>
              <div> {footerProps.displayContactNumber && globalConfig["DEFAULT-CONTACT_NUMBER"]}</div>
            </center>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
