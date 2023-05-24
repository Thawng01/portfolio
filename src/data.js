import { IoHomeOutline, IoAppsOutline, IoPersonOutline } from "react-icons/io5";
import { AiOutlineProject } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";

export const MENU = ["Home", "Projects", "Service", "About", "Contact"];

export const menuWithIcon = [
    { id: 1, title: "Home", icon: <IoHomeOutline /> },
    { id: 2, title: "Projects", icon: <AiOutlineProject /> },
    { id: 3, title: "Contacts", icon: <IoAppsOutline /> },
    { id: 4, title: "Service", icon: <MdOutlineDesignServices /> },
    { id: 5, title: "About", icon: <IoPersonOutline /> },
];
