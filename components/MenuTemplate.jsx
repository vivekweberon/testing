import React, { useEffect, useRef, useState } from "react";
import globalConfig from "../configs/global.json";
import menuItemsConfig from "../configs/menuItems.json";
import PropTypes from "prop-types";
import { loadMenu, setNavBarRef, getNavBarStyle, initializeMenuInteractions } from "../modules/pageutil";
import { setFormsets } from "../modules/mauticForm";
import Head from "next/head";

const MenuTemplate = ({ displayPhone, formsets }) => {
  const [displayMenu, setDisplayMenu] = useState(true);

  const [navBarStyle, setNavBarStyle] = useState({
    backgroundColor: "transparent",
  });
  const navBarRef = useRef(null);

  const handleScroll = () => {
    setNavBarStyle(getNavBarStyle());
  };

  useEffect(() => {
    setFormsets(formsets);
    initializeMenuInteractions();
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
              <li className="leftMenu">
                <a target="_blank" href={`mailto:${globalConfig["DEFAULT-EMAIL"]}`} rel="noreferrer">
                  <i className="fa fa-envelope icon"></i>
                </a>
              </li>
              {displayPhone && (
                <li className="leftMenu w-phone">
                  <a href={`tel:${globalConfig["DEFAULT-CONTACT_NUMBER"]}`}>
                    <i className="fa fa-phone icon"></i>
                  </a>
                </li>
              )}

              <li className="mobile-menu-button">
                <i className="fa fa-bars hamburgerIcon"></i>
              </li>
            </div>

            <nav id="navBar" className="bgclr3" style={navBarStyle} ref={navBarRef}>
              <ul className="leftMenu">
                <li>
                  <a href={`mailto:${globalConfig["DEFAULT-EMAIL"]}`}>
                    <i className="fa fa-envelope icon"></i> <span className="aText">Email</span>
                  </a>
                </li>
                {displayPhone && (
                  <li className="w-phone">
                    <a href={`tel:${globalConfig["DEFAULT-CONTACT_NUMBER"]}`}>
                      <i className="fa fa-phone icon"></i> <span className="aText">{globalConfig["DEFAULT-CONTACT_NUMBER"]}</span>
                    </a>
                  </li>
                )}
              </ul>

              <ul className="menu container rightMenu" role="menubar">
                <li className="bgclr3" role="menuitem">
                  <a href={menuItemsConfig?.Home?.href}>HOME</a>
                </li>

                <li className="bgclr3" role="menuitem">
                  <a className="menu-head" href={menuItemsConfig?.MORE?.href}>
                    MORE<span className="triangle-bottom"></span>
                  </a>
                  <div className="sub-menu">
                    <div className="container bgclr3">
                      <div>
                        <ul role="menu">
                          {menuItemsConfig?.MORE?.subMenu?.map((menuItem, index) => (
                            <li role="menuitem" key={index}>
                              <a href={menuItem?.href}>{menuItem.title}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="bgclr3" role="menuitem">
                  <a className="menu-head" href={menuItemsConfig?.Buyers?.href}>
                    Buyers<span className="triangle-bottom"></span>
                  </a>
                  <div className="sub-menu">
                    <div className="container bgclr3">
                      <div>
                        <ul role="menu">
                          {menuItemsConfig?.Buyers?.subMenu?.map((menuItem, index) => (
                            <li role="menuitem" key={index}>
                              <a href={menuItem?.href}>{menuItem?.title}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="bgclr3" role="menuitem">
                  <a className="menu-head" href={menuItemsConfig?.Sellers?.href}>
                    Sellers<span className="triangle-bottom"></span>
                  </a>
                  <div className="sub-menu">
                    <div className="container bgclr3">
                      <div>
                        <ul role="menu">
                          {menuItemsConfig?.Sellers?.subMenu?.map((menuItem, index) => (
                            <li role="menuitem" key={index}>
                              <a href={menuItem?.href}>{menuItem?.title}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="bgclr3" role="menuitem">
                  <a className="menu-head" href={menuItemsConfig?.Contact?.href}>
                    Contact<span className="triangle-bottom"></span>
                  </a>
                  <div className="sub-menu">
                    <div className="container bgclr3">
                      <div>
                        <ul role="menu">
                          {menuItemsConfig?.Contact?.subMenu?.map((menuItem, index) => (
                            <li role="menuitem" key={index}>
                              <a href={menuItem?.href}>{menuItem?.title}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="bgclr3" role="menuitem">
                  <a href={menuItemsConfig?.Blog?.href}>Blog</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuTemplate;

MenuTemplate.propTypes = {
  displayPhone: PropTypes.bool,
};
