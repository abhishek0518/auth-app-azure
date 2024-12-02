import React, { useState } from "react";
import "./MetricKpi.scss";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import expandIcon from "../../../assets/images/expand-icon.svg";
import closeIcon from "../../../assets/images/close-circle-oulined-icon.svg";
import comingSoonBg from "../../../assets/images/coming-soon-bg.svg";

const MetricKpi = ({ data, activeTab, setActiveTab }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const openDialogMetrics = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const closeDialogMetrics = () => {
    setOpen(false);
  };

  return (
    <div className="metric-kpi">
      <div className="metric-kpi__tab-container">
        <div
          className={`metric-kpi__tab-container__tabs ${
            activeTab === "metrics" ? "active" : "inactive"
          }`}
          onClick={() => handleTabClick("metrics")}
        >
          Metrics
        </div>
        <div
          className={`metric-kpi__tab-container__tabs ${
            activeTab === "kpis" ? "active" : "inactive"
          }`}
          onClick={() => handleTabClick("kpis")}
        >
          KPI's
        </div>
      </div>
      <div className="metric-kpi__grid">
        <div className="metric-kpi__grid__wrap row">
          {data.map((item, index) => (
            <div
              className="metric-kpi__grid__wrap__sec-wrap col-md-4"
              key={index}
            >
              <div className="metric-kpi__grid__wrap__sec">
                <div className="metric-kpi__grid__wrap__sec__left-wrap">
                  <div className="metric-kpi__grid__wrap__sec__left-wrap__info">
                    <div className="metric-kpi__grid__wrap__sec__left-wrap__icon-wrap">
                      <img
                        className="metric-kpi__grid__wrap__sec__left-wrap__icon-wrap__icon"
                        src={item.icon}
                        alt={`${item.title} Icon`}
                      />
                    </div>
                    <div className="metric-kpi__grid__wrap__sec__left-wrap__content">
                      <div className="metric-kpi__grid__wrap__sec__left-wrap__content__label">
                        {item.title}
                      </div>
                      <div className="metric-kpi__grid__wrap__sec__left-wrap__content__value">
                        {item.value}
                      </div>
                    </div>
                  </div>
                  <div className="metric-kpi__grid__wrap__sec__left-wrap__btm-wrap">
                    <div
                      className={`metric-kpi__grid__wrap__sec__left-wrap__btm-wrap__percent ${
                        item.isPositive ? "positive" : "negative"
                      }`}
                    >
                      <img
                        src={require(`../../../assets/images/${
                          item.isPositive
                            ? "trending-up-icon.svg"
                            : "trending-down-icon.svg"
                        }`)}
                        alt={
                          item.isPositive ? "Positive Trend" : "Negative Trend"
                        }
                        className="metric-kpi__grid__wrap__sec__left-wrap__btm-wrap__icon"
                      />
                      {item.percentage}%{" "}
                    </div>

                    <span className="metric-kpi__grid__wrap__sec__left-wrap__btm-wrap__desc">
                      {item.description}
                    </span>
                  </div>
                </div>
                <div className="metric-kpi__grid__wrap__sec__right-wrap">
                  <img
                    className="metric-kpi__grid__wrap__sec__right-wrap__expand-icon"
                    src={expandIcon}
                    alt="closeIcon"
                    onClick={() => openDialogMetrics(item)}
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

export default MetricKpi;
