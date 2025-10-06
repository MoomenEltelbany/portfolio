import PortfolioMenuItem from "./PortfolioMenuItem";
import { portfolioNavItems } from "../../../constants";

function PortfolioMenuList({ direction = "col" }) {
    return (
        <div
            className={`flex flex-${direction} gap-3 sm:gap-4 text-[28px] sm:text-[40px] md:text-[60px] flex-wrap`}
        >
            {portfolioNavItems.map((item) => (
                <PortfolioMenuItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default PortfolioMenuList;
