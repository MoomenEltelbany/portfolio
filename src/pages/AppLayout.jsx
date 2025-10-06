import { Outlet } from "react-router-dom";
import PortfolioMenuList from "../components/portfolio/PortfolioMenu/PortfolioMenuList";
import Portfolio from "../components/portfolio/PortfolioMenu/Portfolio";
import SideNavLinks from "../components/common/SideNav/SideNavLinks";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

function AppLayout() {
    return (
        <div className="flex flex-col h-[100vh]">
            <Header />
            <main className="flex flex-grow">
                <SideNavLinks />
                <Portfolio />
                <section className="bg-slate-800 flex-grow">
                    <PortfolioMenuList direction="row" />
                    <Outlet />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;
