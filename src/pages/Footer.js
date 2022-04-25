import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <h3>Thawng</h3>
                <div className="footer-info-container">
                    <a
                        href="https://www.facebook.com/peng.lian.50/"
                        className="social-icons fa"
                    >
                        <FaFacebookF className="fa-icon" />
                    </a>
                    <a className="social-icons instagram">
                        <IoLogoInstagram className="instagram-icon" />
                    </a>
                    <a className="social-icons twitter">
                        <IoLogoTwitter className="twitter-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
