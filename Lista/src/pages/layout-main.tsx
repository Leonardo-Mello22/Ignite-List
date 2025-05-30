import { Outlet } from "react-router";
import { Header } from "../core-component/header";
import { MainContent } from "../core-component/main-content";
import { Footer } from "../core-component/footer";

export function LayoutMain(){
    return (
        <>
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
            <Footer />
        </>
    )
}
