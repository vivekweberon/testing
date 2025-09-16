import React, { useEffect, useRef, useState } from "react";
import menuItemsConfig from "../configs/menuItems.json";
import PropTypes from "prop-types";
import { loadMenu, setNavBarRef, getNavBarStyle, initializeMenuInteractions } from "../modules/pageutil";
import { setFormsets } from "../modules/mauticForm";
import Head from "next/head";
import "bootstrap-icons/font/bootstrap-icons.css";

const MenuTemplateRP = ({ formsets }) => {
  const [displayMenu, setDisplayMenu] = useState(true);

  const [navBarStyle, setNavBarStyle] = useState({
    backgroundColor: "transparent",
  });
  const [currentPath, setCurrentPath] = useState("");
  const navBarRef = useRef(null);

  const handleScroll = () => {
    setNavBarStyle(getNavBarStyle());
  };

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    initializeMenuInteractions();
    setFormsets(formsets);
    let isLoadMenu = loadMenu();
    if (isLoadMenu) {
      setDisplayMenu(true);
      setNavBarRef(navBarRef);
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/components/MenuTemplate.css" onError={(e) => logResourceLoadError(e.target)} />
      </Head>
      {displayMenu && (
        <div id="menuTemplate">
          <div id="headerMenu">
            <div className="mobile-menu bgclr3" role="menubar">
              <li className="mobile-menu-button">
                <i className="fa fa-bars hamburgerIcon"></i>
              </li>
            </div>

            <nav id="navBar" className="bgclr3" style={navBarStyle} ref={navBarRef}>
              <ul className="menu container rightMenu" role="menubar">
                {Object.keys(menuItemsConfig).map((key) => (
                  <li className="bgclr3" style={{ fontFamily: 'sans-serif' }} role="menuitem" key={key}>
                    <a href={menuItemsConfig[key]?.href} className={currentPath === menuItemsConfig[key]?.href ? "active" : ""}>
                      {key}
                    </a>
                  </li>
                ))}

                {/* Add Login button here */}
                <li className="bgclr3" style={{ fontFamily: "sans-serif" }} role="menuitem">
                  <a
                    href="https://traqr.reachpersona.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="login-button"
                  >
                    Login <i className="bi bi-box-arrow-up-right" ></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuTemplateRP;

MenuTemplateRP.propTypes = {
  displayPhone: PropTypes.bool,
};
