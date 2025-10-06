import PortfolioMenuItem from "./PortfolioMenuItem";
import { portfolioNavItems } from "../../../constants";

function PortfolioMenuList({ direction = "col" }) {
    return (
        <div className={`flex flex-${direction} gap-4 text-[60px] `}>
            {portfolioNavItems.map((item) => (
                <PortfolioMenuItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default PortfolioMenuList;
