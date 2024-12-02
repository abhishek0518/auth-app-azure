import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
import TMobileIcon from "../../../assets/images/t-mobile-icon.svg";
import CDAPLogoColor from "../../../assets/images/cdp-logo-color.svg";
import NotificationIcon from "../../../assets/images/notification-icon.svg";
import CustomerServiceIcon from "../../../assets/images/customer-service-icon.svg";
import ProfilePic from "../../../assets/images/profile-pic.svg";
import ArrowDownPink from "../../../assets/images/arrow-down-pink.svg";
import ArrowUpPink from "../../../assets/images/arrow-up-pink.svg";
import LogoutIcon from "../../../assets/images/logout-icon.svg";
import EmailIcon from "../../../assets/images/email-icon-grey.svg";
import TMobileTLogo from "../../../assets/images/t-mobile-t-logo.svg";
import { useMsal } from "@azure/msal-react";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [notificationWrap, setNotificationWrap] = useState(false);
  const notificationPanelRef = useRef(null);

  const [userProfileWrap, setUserProfileWrap] = useState(false);
  const profilePanelRef = useRef(null);

  const { instance, accounts } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };

  const navigateOnAI = () => {
    navigate("/customer-intelligence");
  };
  const openNotificationPanel = (event) => {
    event.stopPropagation();
    setNotificationWrap((prev) => !prev);
  };
  const openUserProfile = (event) => {
    event.stopPropagation();
    setUserProfileWrap((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      profilePanelRef.current &&
      !profilePanelRef.current.contains(event.target)
    ) {
      setUserProfileWrap(false);
    } else if (
      notificationPanelRef.current &&
      !notificationPanelRef.current.contains(event.target)
    ) {
      setNotificationWrap(false);
    }
  };

  useEffect(() => {
    if (notificationWrap || userProfileWrap) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [notificationWrap, userProfileWrap]);

  return (
    <div className="header">
      <div className="header__top-navbar">
        <div className="header__top-navbar__logo">
          <span className="header__top-navbar__logo__icon">
            <img src={TMobileIcon} alt="T-Mobile" />
          </span>
          <span className="header__top-navbar__logo__color-icon">
            <img src={CDAPLogoColor} alt="T-Mobile" />
          </span>
          <span className="header__top-navbar__logo__label">
            <a href="/" className="header__top-navbar__logo__label__anchor-tag">
              Prospect/Customer Data Platform (P/CDP)
            </a>
          </span>
        </div>
        <div className="header__top-navbar__right-section">
          <div className="header__top-navbar__right-section__help-wrapper">
            <img
              className="header__top-navbar__right-section__header-icons"
              src={CustomerServiceIcon}
              alt="Help"
            />
            <img
              onClick={openNotificationPanel}
              className="header__top-navbar__right-section__header-icons"
              src={NotificationIcon}
              alt="Notifications"
            />
            <div className="header__top-navbar__right-section__profile-wrap">
              <img
                className="header__top-navbar__right-section__header-icons"
                src={ProfilePic}
                alt="UserName"
              />
              <div className="header__top-navbar__right-section__profile-wrap__username">
                <div className="header__top-navbar__right-section__profile-wrap__username__name">
                  {accounts[0]?.name && accounts[0]?.name}
                </div>
                <div className="header__top-navbar__right-section__profile-wrap__arrow">
                  <img
                    src={userProfileWrap ? ArrowUpPink : ArrowDownPink}
                    alt={userProfileWrap ? "Up Arrow" : "Down Arrow"}
                    onClick={openUserProfile}
                  />
                </div>
              </div>
              {userProfileWrap && (
                <div
                  className="header__top-navbar__right-section__profile-wrap__profile-panel"
                  ref={profilePanelRef}
                >
                  <div className="header__top-navbar__right-section__profile-wrap__profile-panel__link">
                    <img src={EmailIcon} alt="Email" />
                    {accounts[0]?.username && accounts[0]?.username}
                  </div>
                  <div className="header__top-navbar__right-section__profile-wrap__profile-panel__link" onClick={() => handleLogout("popup")}>
                    <img src={LogoutIcon} alt="T-Mobile Logout" />
                    Logout Account
                  </div>
                </div>
              )}
              {notificationWrap && (
                <div
                  className="header__top-navbar__right-section__profile-wrap__notifications"
                  ref={notificationPanelRef}
                >
                  <div className="header__top-navbar__right-section__profile-wrap__notifications__head">
                    <div className="header__top-navbar__right-section__profile-wrap__notifications__head__label">
                      Notifications
                    </div>
                    <div className="header__top-navbar__right-section__profile-wrap__notifications__head__num">
                      <span>2</span>
                    </div>
                  </div>
                  <div className="header__top-navbar__right-section__profile-wrap__notifications__content">
                    <div className="header__top-navbar__right-section__profile-wrap__notifications__content__t-logo">
                      <img src={TMobileTLogo} alt="T-Mobile" />
                    </div>
                    <div className="header__top-navbar__right-section__profile-wrap__notifications__content__wrap">
                      Profile Completeness Report is ready! &nbsp;
                      <span>Check It Now </span>
                      <div className="header__top-navbar__right-section__profile-wrap__notifications__content__wrap__period">
                        8 min ago
                      </div>
                    </div>
                  </div>
                  <div className="header__top-navbar__right-section__profile-wrap__notifications__content">
                    <div className="header__top-navbar__right-section__profile-wrap__notifications__content__t-logo">
                      <img src={TMobileTLogo} alt="T-Mobile" />
                    </div>
                    <div className="header__top-navbar__right-section__profile-wrap__notifications__content__wrap">
                      Annual Report is ready! &nbsp;
                      <span>Check It Now </span>
                      <div className="header__top-navbar__right-section__profile-wrap__notifications__content__wrap__period">
                        8 min ago
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="header__links-wrapper">
        <ul className="header__links-wrapper__links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/individuals"
              className={location.pathname === "/individuals" ? "active" : ""}
            >
              Individuals
            </Link>
          </li>
          <li>
            <Link
              to="/insights"
              className={location.pathname === "/insights" ? "active" : ""}
            >
              Insights
            </Link>
          </li>
        </ul>
        <div className="header__links-wrapper__btn">
          <button
            type="button"
            className="btn-primary disabled"
            onClick={navigateOnAI}
          >
            Customer Intelligence GPT
            <div className="btn-primary__icon header__links-wrapper__btn__icon"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
