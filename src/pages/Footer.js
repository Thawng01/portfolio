import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";

import "./footer.css";

const Footer = () => {
    return (
        <div className="bg-gray-700 p-5">
            <div className="flex justify-between mx-auto w-60 ">
                <a
                    href="https://www.facebook.com/peng.lian.50/"
                    target="_blank"
                    rel="noreferrer"
                    className="fa w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
                >
                    <FaFacebookF className="text-white text-md" />
                </a>
                <a
                    href="https://www.instagram.com/salailiancungthawng/"
                    target="_blank"
                    rel="noreferrer"
                    className="instagram w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
                >
                    <AiOutlineInstagram className="text-white text-md" />
                </a>
                <a
                    href="https://wa.me/959772188985"
                    className="bg-green-500 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
                >
                    <IoLogoWhatsapp className="text-white text-md" />
                </a>
                <a
                    href="https://github.com/Thawng01"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-400 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
                >
                    <AiOutlineGithub className="text-black text-md" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
