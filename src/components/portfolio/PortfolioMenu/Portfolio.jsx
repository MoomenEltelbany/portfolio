import portfolioNavItems from "../../../constants/portfolioNavItems";
import PortfolioMenuItem from "./PortfolioMenuItem";

function Portfolio() {
    return (
        <div className="w-56 sm:w-60 md:w-64 bg-slate-900 border-r border-slate-700 hidden md:block">
            <div className="px-3 py-4 sm:px-4">
                <h2 className="text-white text-lg font-semibold mb-4">
                    Portfolio
                </h2>
                <div className="space-y-2">
                    {portfolioNavItems.map((item) => (
                        <PortfolioMenuItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
