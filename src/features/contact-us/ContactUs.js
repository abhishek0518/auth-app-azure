import React from "react";
import "./ContactUs.scss";
import PageHeading from "../../shared/components/page-heading/PageHeading";
import comingSoonBg from "../../assets/images/coming-soon-bg.svg";

function ContactUs() {
  return (
    <div className="contact-us">
      <PageHeading pageHeading="Contact Us"></PageHeading>
      <div className="contact-us__wrapper">
        <img
          className="contact-us__wrapper__coming-soon-bg"
          src={comingSoonBg}
          alt="Coming Soon"
        />
      </div>
    </div>
  );
}
export default ContactUs;
