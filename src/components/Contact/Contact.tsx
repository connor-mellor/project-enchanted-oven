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
                    <a href={`tel:${contactDetails.mobile}`} className={styles.social_link}>
                        <FaPhoneAlt className={styles.icon} />
                        <span>{contactDetails.mobile}</span>
                    </a>
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
                    <a href={`mailto:${contactDetails.email}?subject=Inquiry: Custom Cake Quote&body=Ayup.`} className={styles.social_link}>
                        <FaEnvelope className={styles.icon} />
                        <span>{contactDetails.email}</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
