function NavItem({ children }) {
    return (
        <li className="cursor-pointer hover:text-gray-500 duration-200 px-2 py-1 rounded transition-colors">
            {children}
        </li>
    );
}

export default NavItem;
