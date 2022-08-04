import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";

import "./socialIcon.css";

const SocialIcon = () => {
    return (
        <div className="p-2">
            <div className="flex justify-between mx-auto w-60 ">
                <a
                    href="https://www.facebook.com/peng.lian.50/"
                    target="_blank"
                    rel="noreferrer"
                    className="fa w-9 h-9 flex items-center justify-center rounded-full hover:rotate-[360deg] hover:scale-125 transition-all duration-500 cursor-pointer"
                >
                    <FaFacebookF className="text-white text-md" />
                </a>
                <a
                    href="https://www.instagram.com/salailiancungthawng/"
                    target="_blank"
                    rel="noreferrer"
                    className="instagram w-9 h-9 flex items-center justify-center rounded-full hover:rotate-[360deg] hover:scale-125 transition-all duration-500 cursor-pointer"
                >
                    <AiOutlineInstagram className="text-white text-md" />
                </a>
                <a
                    href="https://wa.me/959772188985"
                    className="bg-green-500 w-9 h-9 flex items-center justify-center rounded-full hover:rotate-[360deg] hover:scale-125 transition-all duration-500 cursor-pointer"
                >
                    <IoLogoWhatsapp className="text-white text-md" />
                </a>
                <a
                    href="https://github.com/Thawng01"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-400 w-9 h-9 flex items-center justify-center rounded-full hover:rotate-[360deg] hover:scale-125 transition-all duration-500 cursor-pointer"
                >
                    <AiOutlineGithub className="text-black text-md" />
                </a>
            </div>
        </div>
    );
};

export default SocialIcon;
