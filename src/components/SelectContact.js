import React from "react";
import DirectContact from "./DirectContact";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";

const SelectContact = ({ isShow }) => {
    return (
        <>
            <div
                className={`absolute bg-white dark:bg-dark overflow-hidden p-2 -top-48 sm:-top-52 transition-all duration-500 ${
                    isShow
                        ? "opacity-100 -translate-y-0"
                        : "opacity-0 translate-y-72"
                }`}
            >
                <DirectContact
                    title=""
                    icon={<MdEmail />}
                    color="text-pink-600"
                    link="mailto:thechinpress@gmail.com"
                    mb="mb-3"
                    mr="mr-0"
                    width="w-10"
                />
                <DirectContact
                    title=""
                    icon={<IoLogoWhatsapp />}
                    color="text-green-600"
                    link="https://wa.me/959772188985"
                    mb="mb-3"
                    mr="mr-0"
                    width="w-10"
                />
                <DirectContact
                    title=""
                    icon={<FaFacebookMessenger />}
                    color="text-blue-600"
                    link="https://wa.me/959772188985"
                    mb="mb-0"
                    mr="mr-0"
                    width="w-10"
                />
            </div>
        </>
    );
};

export default SelectContact;
