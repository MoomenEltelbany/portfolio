function NavItem({ children, onClick }) {
    return (
        <li
            className="cursor-pointer hover:text-gray-500 duration-200 px-2 py-1 rounded transition-colors"
            onClick={onClick}
            role="menuitem"
            tabIndex={0}
        >
            {children}
        </li>
    );
}

export default NavItem;
