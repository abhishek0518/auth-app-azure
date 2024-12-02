import React from "react";
import "./Individuals.scss";
import CDAPLogoColor from "../../assets/images/cdp-logo-color.svg";
import InputSearch from "../../shared/components/inputSearch/InputSearch";

function Individuals() {
  return (
    <div className="individuals">
      <div className="individuals__wrapper">
        <div className="individuals__wrapper__content">
          <img
            src={CDAPLogoColor}
            alt="T-Mobile"
            className="individuals__wrapper__content__icon"
          />
          <div className="individuals__wrapper__content__title">
            Prospect/Customer Data Platform (P/CDP)
          </div>
        </div>
        <InputSearch></InputSearch>
      </div>
    </div>
  );
}
export default Individuals;
