import { VscVscode } from "react-icons/vsc";
import NavItem from "./NavItem";
import WindowControls from "./WindowControls";

// Navigation menu items
const NAV_ITEMS = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help"];

const Header = () => {
    return (
        <header className="bg-slate-900 text-gray-400 flex items-center justify-between p-2 font-vscode transition-all">
            <div className="flex items-center gap-3">
                <VscVscode className="text-blue-500 text-[24px]" />

                <nav
                    className="hidden sm:block"
                    role="navigation"
                    aria-label="Main navigation"
                >
                    <ul className="flex items-center gap-2">
                        {NAV_ITEMS.map((item) => (
                            <NavItem key={item}>{item}</NavItem>
                        ))}
                    </ul>
                </nav>
            </div>

            <h1 className="text-sm font-medium">
                Moomen Eltelbany - Visual Studio Code
            </h1>

            <WindowControls />
        </header>
    );
};

export default Header;
