function FooterItem({
    icon: Icon,
    text,
    showHover = true,
    className = "",
    onClick,
}) {
    const baseClasses =
        "flex items-center justify-center transition-all duration-300";
    const hoverClasses = showHover
        ? "hover:bg-slate-500 hover:text-slate-800"
        : "";
    const combinedClasses =
        `${baseClasses} ${hoverClasses} ${className}`.trim();

    return (
        <div
            className={combinedClasses}
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            aria-label={text ? `${text} status` : undefined}
        >
            <Icon />
            {text && <span className="ml-1">{text}</span>}
        </div>
    );
}

export default FooterItem;
