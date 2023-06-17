import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

import "./socialIcon.css";

const SocialIcon = () => {
    return (
        <div className="p-2">
            <div className="flex justify-center mx-auto w-60 ">
                <a
                    href="https://wa.me/959772188985"
                    className="bg-whatsapp w-9 h-9 mr-4 flex items-center justify-center rounded-full hover:rotate-[360deg] hover:scale-125 transition-all duration-500 cursor-pointer"
                >
                    <IoLogoWhatsapp className="text-white text-md" />
                </a>
                <a
                    href="https://github.com/Thawng01"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-light dark:bg-lightDark w-9 h-9 mlx-4 flex items-center justify-center rounded-full hover:rotate-[360deg] hover:scale-125 transition-all duration-500 cursor-pointer"
                >
                    <AiOutlineGithub className="text-black dark:text-white text-md" />
                </a>
                <a
                    href="https://www.linkedin.com/in/lian-cung-thawng-bba5bb187/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-linkedin w-9 h-9 ml-4 flex items-center justify-center rounded-full hover:rotate-[360deg] hover:scale-125 transition-all duration-500 cursor-pointer"
                >
                    <FaLinkedinIn className="text-white text-md" />
                </a>
            </div>
        </div>
    );
};

export default SocialIcon;
