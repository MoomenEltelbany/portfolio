const WindowControls = () => {
    return (
        <div
            className="flex items-center gap-2"
            role="group"
            aria-label="Window controls"
        >
            <span
                className="block w-3 h-3 rounded-full bg-yellow-400"
                aria-label="Minimize"
            />
            <span
                className="w-3 h-3 rounded-full bg-green-400"
                aria-label="Maximize"
            />
            <span
                className="w-3 h-3 rounded-full bg-red-400"
                aria-label="Close"
            />
        </div>
    );
};

export default WindowControls;
