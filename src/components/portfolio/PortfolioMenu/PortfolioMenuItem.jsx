import { NavLink } from "react-router-dom";

function PortfolioMenuItem({ item }) {
    return (
        <NavLink
            to={item.to}
            className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-slate-700 transition-colors text-slate-300"
            activeClassName="active"
        >
            <item.icon className={`w-4 h-4 ${item.iconColor}`} />
            <span className="text-slate-300 text-lg">{item.fileName}</span>
        </NavLink>
    );
}

export default PortfolioMenuItem;
