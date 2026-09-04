import React from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";
import { BsGithub, BsLinkedin, BsWhatsapp, BsEnvelopeFill } from "react-icons/bs";

// ====================================================================
//  WhatsApp number: country code + number, digits only
// ====================================================================
const WHATSAPP_NUMBER = "918396091712";

// Email is used only inside the link - it is never shown as text on the page
const EMAIL_ADDRESS = "aanandmahawal048@gmail.com";
const EMAIL_SUBJECT = "Regarding your portfolio";

// Pre-filled WhatsApp message
const WHATSAPP_MESSAGE =
  "Hi Aanand! I saw your portfolio and would like to connect.";

const Contact = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;
  const emailLink = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
    EMAIL_SUBJECT
  )}`;

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <Fade left>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="contact"
                      className="image"
                    />
                  </Fade>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Fade right>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="contact-panel text-center">
                    <h4 className="contact-title">Let&apos;s Connect</h4>
                    <p className="contact-subtitle">
                      Have an opportunity or an idea? Reach me directly - I
                      usually reply within a few hours.
                    </p>

                    <div className="contact-actions">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn contact-btn-whatsapp"
                      >
                        <BsWhatsapp size={20} className="me-2" />
                        WhatsApp Me
                      </a>
                      <a
                        href={emailLink}
                        className="contact-btn contact-btn-email"
                      >
                        <BsEnvelopeFill size={20} className="me-2" />
                        Email Me
                      </a>
                    </div>

                    <div className="contact-divider my-4">
                      <div className="line" />
                      <small className="or text-center">OR FIND ME ON</small>
                      <div className="line" />
                    </div>

                    <div className="contact-socials">
                      <a
                        href="https://www.linkedin.com/in/aanand-mahawal-31478526a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-circle social-linkedin"
                        aria-label="LinkedIn"
                      >
                        <BsLinkedin size={26} />
                      </a>
                      <a
                        href="https://github.com/aanandmahawal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-circle social-github"
                        aria-label="GitHub"
                      >
                        <BsGithub size={26} />
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
