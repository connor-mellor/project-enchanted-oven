import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactDetails from "@/data/ContactDetails";
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
                    <a 
                        href={`mailto:${contactDetails.email}?subject=Maries Cakes %26 Bakes - Order Quote Request&body=Hi Marie,%0D%0A%0D%0AI'm looking to get a quote for a cake order, i've included my details below:%0D%0A%0D%0AName: Your Name%0D%0AOrder: Include what you'd like to order here%0D%0ADietary Requirements: Include any dietary requirements here (if any)%0D%0ASpecial Requests: Include any special requests here (if any)%0D%0A%0D%0AMany thanks,%0D%0AYour Name`} 
                        className={styles.social_link}
                    >
                        <FaEnvelope className={styles.icon} />
                        <span>{contactDetails.email}</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
