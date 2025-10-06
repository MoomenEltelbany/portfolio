function SkillsItem({ icon: Icon, color, shadow }) {
    return (
        <li className="group">
            <div
                className={`${color} text-4xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg`}
                style={{
                    filter: `drop-shadow(0 0 10px ${
                        shadow === "red"
                            ? "#ef4444"
                            : shadow === "blue"
                            ? "#3b82f6"
                            : shadow === "yellow"
                            ? "#eab308"
                            : shadow === "cyan"
                            ? "#06b6d4"
                            : shadow === "orange"
                            ? "#f97316"
                            : "#6b7280"
                    })`,
                }}
            >
                <Icon />
            </div>
        </li>
    );
}

export default SkillsItem;
