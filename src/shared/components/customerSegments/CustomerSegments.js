import React, { useState } from "react";
import "./CustomerSegments.scss";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import expandIcon from "../../../assets/images/expand-icon.svg";
import closeIcon from "../../../assets/images/close-circle-oulined-icon.svg";
import comingSoonBg from "../../../assets/images/coming-soon-bg.svg";
import highRetentionCustIcon from "../../../assets/images/high-retention-cust-icon.svg";
import lowRetentionCusticon from "../../../assets/images/low-retention-cust-icon.svg";
import dataHeavyCustIcon from "../../../assets/images/data-heavy-cust-icon.svg";
import voiceHeavyCustIcon from "../../../assets/images/voice-heavy-cust-icon.svg";
import growingCustomersIcon from "../../../assets/images/growing-customers-icon.svg";

const iconMap = {
  "High retention customers": highRetentionCustIcon,
  "Low retention customers": lowRetentionCusticon,
  "Data heavy customers": dataHeavyCustIcon,
  "Voice heavy customers": voiceHeavyCustIcon,
  "Growing customers": growingCustomersIcon,
};
const CustomerSegments = ({ segmentData }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const segments = Object.keys(segmentData).map((key) => ({
    title: key
      .replace(/([A-Z])/g, " $1")
      .trim()
      .replace(/^./, (str) => str.toUpperCase()),
    value: segmentData[key],
    icon: iconMap[key],
  }));
  const openDialogMetrics = (segment) => {
    setSelectedItem(segment);
    setOpen(true);
  };

  const closeDialogMetrics = () => {
    setOpen(false);
  };

  return (
    <div className="customer-segment">
      <div className="customer-segment__grid">
        <div className="customer-segment__grid__wrap row">
          {segments.map((segment, index) => (
            <div
              className="customer-segment__grid__wrap__sec-wrap col-md-6"
              key={index}
            >
              <div className="customer-segment__grid__wrap__sec">
                <div className="customer-segment__grid__wrap__sec__left-wrap">
                  <div className="customer-segment__grid__wrap__sec__left-wrap__info">
                    <div className="customer-segment__grid__wrap__sec__left-wrap__icon-wrap">
                      <img
                        className="customer-segment__grid__wrap__sec__left-wrap__icon-wrap__icon"
                        src={segment.icon}
                        alt={`${segment.title} Icon`}
                      />
                    </div>
                    <div className="customer-segment__grid__wrap__sec__left-wrap__content">
                      <div className="customer-segment__grid__wrap__sec__left-wrap__content__label">
                        {segment.title}
                      </div>
                      <div className="customer-segment__grid__wrap__sec__left-wrap__content__value">
                        {segment.value}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="metric-kpi__grid__wrap__sec__right-wrap">
                  <img
                    className="metric-kpi__grid__wrap__sec__right-wrap__expand-icon"
                    src={expandIcon}
                    alt="closeIcon"
                    onClick={() => openDialogMetrics(segment)}
                  />
                  <Dialog
                    open={open}
                    onClose={closeDialogMetrics}
                    className="general-dialog"
                  >
                    <DialogTitle className="custom-dialog-title">
                      {selectedItem && selectedItem.title}
                      <img
                        className="close-icon"
                        src={closeIcon}
                        alt="close icon"
                        onClick={closeDialogMetrics}
                      />
                    </DialogTitle>
                    <DialogContent className="dialog-feedback">
                      <img
                        className="metric-kpi__grid__wrap__sec__right-wrap__coming-soon-bg"
                        src={comingSoonBg}
                        alt="Coming Soon"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSegments;
