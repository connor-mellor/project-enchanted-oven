import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
    const contact = {
        mobile: '+(447) 12345123456',
        email: 'mariescakesandbakes@outlook.com',
        facebook: {
            pageName: 'Marie\'s Cakes & Bakes',
            link: 'https://www.facebook.com/profile.php?id=61569650397474'
        },
        instagram: {
            pageName: 'Marie\'s Cakes & Bakes',
            link: 'https://www.instagram.com/mariescakesandbakes_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
        }
    };

    return (
        <section className="contact">
            <div className="section-title">
            <h1>Contact Us</h1>
            </div>

            <div className="contact-info">
            <div className="contact-item">
                <FaPhoneAlt className="icon" />
                <span>{ contact.mobile }</span>
            </div>
            <div className="social-links">
                <a
                href={ contact.facebook.link }
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                >
                <FaFacebook className="icon" />
                { contact.facebook.pageName }
                </a>
                <a
                href={ contact.instagram.link }
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                >
                <FaInstagram className="icon" />
                { contact.instagram.pageName }
                </a>
            </div>
            <div className="contact-item">
                <FaEnvelope className="icon" />
                <span>{ contact.email }</span>
            </div>
            </div>
        </section>
    );
};

export default Contact;
