import React from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contactInfo.css";

const ContactInfo = () => {
    return (
        <div className="contact-left-container">
            <h2 className="contact-left-title">Let's discuss your project</h2>
            <div className="contact-info-container">
                <IoLogoWhatsapp className="contact-phone-icon" />
                <span>09772188985</span>
            </div>

            <div className="contact-info-container">
                <MdEmail className="contact-email-icon" />
                <span>thechinpress@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;
