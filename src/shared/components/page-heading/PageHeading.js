import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PageHeading.scss";
import BackArrow from "../../../assets/images/arrow-left-black.svg";
import InputSearch from "../inputSearch/InputSearch";
import MaskedButton from "../maskedButton/MaskedButton";
import { Dialog } from "@mui/material";
import RequestAccessModal from "../dialog-request-access/RequestAccessModal";

function PageHeading({ pageHeading, showMaskedButton }) {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="page-heading">
      <div className="page-heading__wrap">
        <div className="page-heading__wrap__heading-wrap">
          <div
            className="page-heading__wrap__heading-wrap__icon"
            onClick={navigateBack}
          >
            <img src={BackArrow} alt="T-Mobile" />
          </div>
          <div className="page-heading__wrap__heading-wrap__heading">
            {pageHeading}
          </div>
        </div>
        <div className="page-heading__wrap__actions">
          <div className="page-heading__wrap__actions__masked-btn">
            {showMaskedButton && (
              <MaskedButton onClick={() => setIsModalOpen(true)} />
            )}
          </div>
          <div>
            <InputSearch></InputSearch>
          </div>
        </div>
      </div>
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <RequestAccessModal onClose={() => setIsModalOpen(false)} />
      </Dialog>
    </div>
  );
}
export default PageHeading;
