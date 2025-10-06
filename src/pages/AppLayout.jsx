import { Outlet } from "react-router-dom";
import PortfolioMenuList from "../components/portfolio/PortfolioMenu/PortfolioMenuList";
import Portfolio from "../components/portfolio/PortfolioMenu/Portfolio";
import SideNavLinks from "../components/SideNav/SideNavLinks";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function AppLayout() {
    return (
        <div className="flex flex-col min-h-dvh">
            <Header />
            <main className="flex flex-col md:flex-row flex-grow overflow-auto">
                <SideNavLinks />
                <Portfolio />
                <section className="bg-slate-800 flex-grow min-h-[50vh] pt-0 pb-4 pl-4 pr-4 sm:pl-6 sm:pr-6 sm:pb-6 md:pl-8 md:pr-8 md:pb-8">
                    <PortfolioMenuList direction="row" />
                    <Outlet />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;
