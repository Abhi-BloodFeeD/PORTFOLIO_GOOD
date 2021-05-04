import React from "react";
import "../SCSS/Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__icon footer__icon--facebook">
          <div className="footer__icon__image"></div>
          <div className="footer__icon__text">FACEBOOK</div>
        </div>
        <div className="footer__icon footer__icon--whatsapp">
          <div className="footer__icon__image"></div>
          <div className="footer__icon__text">WHATSAPP</div>
        </div>
        <div className="footer__icon footer__icon--instagram">
          <div className="footer__icon__image"></div>
          <div className="footer__icon__text">INSTAGRAM</div>
        </div>
        <div className="footer__icon footer__icon--linkedin">
          <div className="footer__icon__image"></div>
          <div className="footer__icon__text">LINKEDIN</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
