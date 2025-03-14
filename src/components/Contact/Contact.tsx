import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactDetails from '../../data/ContactDetails'
import styles from './Contact.module.css'

const Contact: React.FC = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.section_title}>
                <h1>Contact Us</h1>
            </div>

            <div className={styles.contact_info}>
                <div className={styles.contact_item}>
                    <FaPhoneAlt className={styles.icon} />
                    <span>{contactDetails.mobile}</span>
                </div>
                <div className={styles.social_links}>
                    <a
                        href={contactDetails.facebook.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social_link}
                    >
                        <FaFacebook className={styles.icon} />
                        {contactDetails.facebook.pageName}
                    </a>
                    <a
                        href={contactDetails.instagram.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social_link}
                    >
                        <FaInstagram className={styles.icon} />
                        {contactDetails.instagram.pageName}
                    </a>
                </div>
                <div className={styles.contact_item}>
                    <FaEnvelope className={styles.icon} />
                    <span>{contactDetails.email}</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;
