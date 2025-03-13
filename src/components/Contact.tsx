import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactDetails from '../data/ContactDetails'

const Contact: React.FC = () => {
    return (
        <section className="contact">
            <div className="section-title">
            <h1>Contact Us</h1>
            </div>

            <div className="contact-info">
            <div className="contact-item">
                <FaPhoneAlt className="icon" />
                <span>{ contactDetails.mobile }</span>
            </div>
            <div className="social-links">
                <a
                href={ contactDetails.facebook.link }
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                >
                <FaFacebook className="icon" />
                { contactDetails.facebook.pageName }
                </a>
                <a
                href={ contactDetails.instagram.link }
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                >
                <FaInstagram className="icon" />
                { contactDetails.instagram.pageName }
                </a>
            </div>
            <div className="contact-item">
                <FaEnvelope className="icon" />
                <span>{ contactDetails.email }</span>
            </div>
            </div>
        </section>
    );
};

export default Contact;
