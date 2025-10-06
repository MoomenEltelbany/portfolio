import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { BsFiletypeJson } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { FaMarkdown } from "react-icons/fa";

export const portfolioNavItems = [
    {
        icon: FaReact,
        fileName: "home.jsx",
        to: "/profile",
        iconColor: "text-cyan-500",
        id: "home",
    },
    {
        icon: FaHtml5,
        fileName: "about.html",
        to: "/about",
        iconColor: "text-red-500",
        id: "about",
    },
    {
        icon: FaCss3,
        fileName: "contact.css",
        to: "/contact",
        iconColor: "text-blue-400",
        id: "contact",
    },
    {
        icon: IoLogoJavascript,
        fileName: "projects.js",
        to: "/projects",
        iconColor: "text-yellow-400",
        id: "projects",
    },
    {
        icon: FaRegAddressCard,
        fileName: "card.magic",
        to: "/card",
        iconColor: "text-green-500",
        id: "card",
    },
    // {
    //     icon: BsFiletypeJson,
    //     fileName: "articles.json",
    //     to: "/articles",
    //     iconColor: "text-yellow-500",
    //     id: "articles",
    // },
    // {
    //     icon: FaMarkdown,
    //     fileName: "github.md",
    //     to: "/github",
    //     iconColor: "text-blue-500",
    //     id: "github",
    // },
];

export default portfolioNavItems;
