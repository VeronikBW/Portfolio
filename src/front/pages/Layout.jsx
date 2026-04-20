import { useEffect } from "react";
import { Outlet } from "react-router-dom/dist";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/Footer";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Layout = () => {
    const { store } = useGlobalReducer();

    useEffect(() => {
        // Sync the theme attribute with the document body
        document.body.setAttribute("data-theme", store.theme);
    }, [store.theme]);

    return (
        <ScrollToTop>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </ScrollToTop>
    );
};