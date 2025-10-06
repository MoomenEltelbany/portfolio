import { NavLink } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
function SideBarIcon({ icon: Icon, marginTop = false, to }) {
    const containerClasses = [
        "sidebar-item",
        "cursor-pointer",
        "p-4",
        "flex",
        "justify-center",
        "transition-all",
        "duration-200",
        marginTop && "mt-auto",
    ]
        .filter(Boolean)
        .join(" ");

    const iconClasses = ["text-xl", "transition-colors", "duration-200"].join(
        " "
    );

    return (
        <NavLink to={to} className={containerClasses}>
            <Icon className={iconClasses} />
        </NavLink>
    );
}

export default SideBarIcon;
