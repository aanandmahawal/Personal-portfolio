import React from "react";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

// ====================================================================
//  WRITE YOUR WHATSAPP NUMBER HERE (country code + number, digits only)
//  Example for India: 919876543210  (91 = country code, then 10 digits)
// ====================================================================
const WHATSAPP_NUMBER = "918396091712";

// Pre-filled message the visitor's WhatsApp opens with (edit freely)
const WHATSAPP_MESSAGE =
  "Hi Aanand! I saw your portfolio and would like to connect.";

const Contact = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="contact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <a
                          href="https://www.linkedin.com/in/aanand-mahawal-31478526a/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <BsLinkedin color="blue" size={30} />
                        </a>
                        <a
                          href="https://github.com/aanandmahawal"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <BsGithub color="black" size={30} />
                        </a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>

                    <div className="whatsapp-box text-center">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-icon-wrap"
                        aria-label="Chat on WhatsApp"
                      >
                        <BsWhatsapp className="whatsapp-icon" />
                      </a>
                      <h5 className="whatsapp-title">
                        Let&apos;s talk on WhatsApp
                      </h5>
                      <p className="whatsapp-subtitle">
                        Fastest way to reach me - I usually reply within a few
                        hours.
                      </p>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-btn"
                      >
                        <BsWhatsapp size={20} className="me-2" />
                        WhatsApp Me
                      </a>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
