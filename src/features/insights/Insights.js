import React, { useEffect, useState } from "react";
import "./Insights.scss";
import MetricKpi from "../../shared/components/metricKpi/MetricKpi";
import CustomerSegments from "../../shared/components/customerSegments/CustomerSegments";
import PredictedIntents from "../../shared/components/predictedIntents/PredictedIntents";
import PageHeading from "../../shared/components/page-heading/PageHeading";

import activeUserIcon from "../../assets/images/active-user-icon.svg";
import newUserIcon from "../../assets/images/new-user-icon.svg";
import prospectsUserIcon from "../../assets/images/prospects-user-icon.svg";
import leadsUserIcon from "../../assets/images/leads-user-icon.svg";
import uidCustomerIcon from "../../assets/images/uid-customer-icon.svg";
import highNetworkScoreCustomerIcon from "../../assets/images/high-network-score-customer-icon.svg";
import dataIntegrationIcon from "../../assets/images/connection-icon.svg";
import complianceIcon from "../../assets/images/compliance-icon.svg";
import userprofileIcon from "../../assets/images/user-profile-icon.svg";
import searchprofileIcon from "../../assets/images/search-profile-icon.svg";
import categorizationIcon from "../../assets/images/categorization-icon.svg";
import comingSoonBg from "../../assets/images/coming-soon-bg.svg";

const iconMap = {
  "Active Individuals": activeUserIcon,
  "New Individuals": newUserIcon,
  "Prospects Count": prospectsUserIcon,
  "Leads Count": leadsUserIcon,
  "Total UID's": uidCustomerIcon,
  "High Network Score Customers": highNetworkScoreCustomerIcon,
  "SLA Compliance Rate": highNetworkScoreCustomerIcon,
  "Data Integration": dataIntegrationIcon,
  "CCPA & USGCI Compliance Percentage": complianceIcon,
  "Customer Profile Completeness": userprofileIcon,
  "Prospect Profile Completeness": searchprofileIcon,
  "CDI Match Rate": categorizationIcon,
};

const InsightPage = () => {
  const [activeTab, setActiveTab] = useState("metrics");
  const [data, setData] = useState(null);

  useEffect(() => {
    const response = {
      status: "success",
      data: {
        user: {
          name: "Andrew Smith",
        },
        metrics: [
          {
            title: "Active Individuals",
            value: "40,689",
            percentage: 8.5,
            isPositive: true,
            description: "Up last 30 days",
            icon: iconMap["Active Individuals"],
          },
          {
            title: "New Individuals",
            value: "570",
            percentage: -2.2,
            isPositive: false,
            description: "Down last 30 days",
            icon: iconMap["New Individuals"],
          },
          {
            title: "Prospects Count",
            value: "20,567",
            percentage: 4.5,
            isPositive: true,
            description: "Up last 30 days",
            icon: iconMap["Prospects Count"],
          },
          {
            title: "Leads Count",
            value: "10,063",
            percentage: -1.5,
            isPositive: false,
            description: "Down last 30 days",
            icon: iconMap["Leads Count"],
          },
          {
            title: "Total UID's",
            value: "47,000",
            percentage: 8.5,
            isPositive: true,
            description: "Up last 30 days",
            icon: iconMap["Total UID's"],
          },
          {
            title: "High Network Score Customers",
            value: "12,563",
            percentage: -1.5,
            isPositive: false,
            description: "Down last 30 days",
            icon: iconMap["High Network Score Customers"],
          },
        ],
        kpis: [
          {
            title: "SLA Compliance Rate",
            value: "89%",
            percentage: 8.5,
            isPositive: true,
            description: "Down last 30 days",
            icon: iconMap["SLA Compliance Rate"],
          },
          {
            title: "Data Integration",
            value: "78%",
            percentage: -2.2,
            isPositive: false,
            description: "Down last 30 days",
            icon: iconMap["Data Integration"],
          },
          {
            title: "CCPA & USGCI Compliance Percentage",
            value: "98%",
            percentage: 4.5,
            isPositive: true,
            description: "Up last 30 days",
            icon: iconMap["CCPA & USGCI Compliance Percentage"],
          },
          {
            title: "Customer Profile Completeness",
            value: "96%",
            percentage: -1.5,
            isPositive: false,
            description: "Down last 30 days",
            icon: iconMap["Customer Profile Completeness"],
          },
          {
            title: "Prospect Profile Completeness",
            value: "79%",
            percentage: 8.5,
            isPositive: true,
            description: "Up last 30 days",
            icon: iconMap["Prospect Profile Completeness"],
          },
          {
            title: "CDI Match Rate",
            value: "78%",
            percentage: 1.5,
            isPositive: true,
            description: "Up last 30 days",
            icon: iconMap["CDI Match Rate"],
          },
        ],
        customerSegment: {
          "High retention customers": "12%",
          "Low retention customers": "20%",
          "Data heavy customers": "30%",
          "Voice heavy customers": "10%",
          "Growing customers": "13%",
        },
        predictedIntents: [
          "Monitor and analyze the performance of advertising campaigns to ensure effectiveness.",
          "Design and distribute surveys to gather customer feedback.",
          "Utilize data analytics to track the performance of digital marketing campaigns and adjust strategies accordingly.",
          "Develop joint marketing-sales initiatives to drive revenue growth.",
          "Analyze customer data weekly to identify trends and preferences.",
        ],
      },
      message: "Data fetched successfully",
      errors: [],
    };

    setData(response.data);
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="insights">
      <div className="insights__head">
        <PageHeading pageHeading="Insights"></PageHeading>
      </div>
      <div className="insights__metrickpi">
        <div className="insights__metrickpi__wrapper">
          <MetricKpi
            data={activeTab === "metrics" ? data.metrics : data.kpis}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
      <div className="insights__segment-container row">
        <div className="insights__segment-container__customer-segment col-md-8">
          <div className="insights__segment-container__customer-segment__head">
            Your Customer Segments
          </div>
          <CustomerSegments segmentData={data.customerSegment} />
        </div>

        <div className="insights__segment-container__top-predicted-intents col-md-4">
          <div className="insights__segment-container__top-predicted-intents__head">
            Top 5 Predictive Intents
          </div>
          <PredictedIntents intents={data.predictedIntents} />
        </div>
      </div>
      <div className="insights__customer-care-calls">
        <div className="insights__customer-care-calls__head">
          Customer Care Calls
        </div>
        <img
          className="insights__customer-care-calls__coming-soon-bg"
          src={comingSoonBg}
          alt="Coming Soon"
        />
      </div>
    </div>
  );
};

export default InsightPage;
