import { Outlet } from "react-router-dom";
import { useDeviceType } from '../hooks/useDeviceType.js';
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";

export function Layout() {

    const deviceType = useDeviceType();

    return (
        <>
            <Header />
                <main className="home">
                    {deviceType === 'mobileOrTablet' && (
                        <div className='modalContainer'>
                            <p className='notCompatible'>Pas compatible</p>
                        </div>
                    )}                    
                    {deviceType === 'desktop' && (
                    <Outlet />
                    )}
                </main>          
            <Footer />
        </>
    )
}