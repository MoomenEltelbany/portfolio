import { IoIosGitBranch } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { IoWarningOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiCheckDoubleFill } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import FooterItem from "./FooterItem";

// Footer data configuration
const LEFT_SECTION_ITEMS = [
    { icon: IoIosGitBranch, text: "main", showHover: true },
    { icon: TiDeleteOutline, text: "0", showHover: false },
    { icon: IoWarningOutline, text: "0", showHover: false },
];

const RIGHT_SECTION_ITEMS = [
    { icon: FaReact, text: "ReactJS", showHover: true },
    { icon: RiCheckDoubleFill, text: "Prettier", showHover: true },
    { icon: CiBellOn, text: null, showHover: false },
];

export default function Footer() {
    return (
        <footer
            className="relative z-20 bg-slate-900 text-gray-400 flex justify-between px-2 py-1"
            role="contentinfo"
            aria-label="Status bar"
        >
            <div
                className="flex justify-center items-center transition-all gap-2"
                role="group"
                aria-label="Git status"
            >
                {LEFT_SECTION_ITEMS.map((item, index) => (
                    <FooterItem
                        key={`left-${index}`}
                        icon={item.icon}
                        text={item.text}
                        showHover={item.showHover}
                        className={index === 0 ? "mr-2" : ""}
                    />
                ))}
            </div>

            <div
                className="flex justify-center items-center gap-3 transition-all"
                role="group"
                aria-label="Development tools"
            >
                {RIGHT_SECTION_ITEMS.map((item, index) => (
                    <FooterItem
                        key={`right-${index}`}
                        icon={item.icon}
                        text={item.text}
                        showHover={item.showHover}
                    />
                ))}
            </div>
        </footer>
    );
}
