import { Outlet } from "react-router-dom"
import { Header } from "./Header.jsx"
import { Footer } from "./Footer.jsx"

export function Layout() {
    return (
        <>
            <Header />
                <main>
                    <Outlet />
                </main>          
            <Footer />
        </>
    )
}