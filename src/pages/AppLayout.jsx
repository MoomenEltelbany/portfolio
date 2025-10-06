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
            <main className="flex flex-col md:flex-row flex-grow">
                <SideNavLinks />
                <Portfolio />
                <section className="bg-slate-800 flex-grow min-h-[50vh] px-4 sm:px-6 md:px-8">
                    <PortfolioMenuList direction="row" />
                    <Outlet />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;
