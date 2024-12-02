import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const navigateOnContactUs = () => {
    navigate("/contact-us");
  };
  return (
    <div className="home">
      <div className="home__banner-content">
        <div>
          <div className="home__banner-content__title">
            Ask anything, know everything! Unlock the power of your <br />
            data with AI-Powered CDP/360° Individual Views
          </div>
          <div className="home__banner-content__desc">
            Unlock the power of 360° individual view, powered by AI, to uncover
            hidden insights <br /> and make smarter decisions, faster.
          </div>
          <div className="home__banner-content__btn">
            <button
              type="button"
              className="btn-border"
              onClick={navigateOnContactUs}
            >
              <div className="btn-border__icon home__banner-content__btn__icon"></div>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
