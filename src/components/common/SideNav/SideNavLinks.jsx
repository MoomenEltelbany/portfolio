import { HiOutlinePencil } from "react-icons/hi2";
import { BsEnvelope } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import SideBarIcon from "./SideBarIcon";

const NAVIGATION_ITEMS = [
    {
        icon: FaRegCopy,
        label: "Copy/Clone",
        isActive: true,
        id: "copy",
        to: "/profile",
    },
    {
        icon: FaCode,
        label: "Code Projects",
        isActive: false,
        id: "code",
        to: "/projects",
    },
    {
        icon: HiOutlinePencil,
        label: "Blog/Articles",
        isActive: false,
        id: "blog",
        to: "/card",
    },
    {
        icon: BsEnvelope,
        label: "Contact",
        isActive: false,
        id: "contact",
        to: "/contact",
    },
    {
        icon: FiUser,
        label: "About Me",
        isActive: false,
        id: "about",
        marginTop: true,
        to: "/about",
    },
    {
        icon: BsGear,
        label: "Settings",
        isActive: false,
        id: "settings",
        to: "/",
    },
];

function SideNavLinks() {
    return (
        <nav
            className="bg-slate-900 text-gray-400 text-[22px] sm:text-[24px] md:text-[25px] hidden md:flex flex-col gap-2 font-extrabold "
            role="navigation"
            aria-label="Side navigation"
        >
            {NAVIGATION_ITEMS.map((item) => (
                <SideBarIcon
                    key={item.id}
                    icon={item.icon}
                    marginTop={item.marginTop}
                    label={item.label}
                    to={item.to}
                />
            ))}
        </nav>
    );
}

export default SideNavLinks;
