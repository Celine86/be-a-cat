import { Outlet } from "react-router-dom";
import { useDeviceType } from '../../hooks/useDeviceType.js';
import { Header } from "../layout/Header.jsx";
import { Footer } from "../layout/Footer.jsx";

export function Nav() {

    const deviceType = useDeviceType();

    return (
        <>
            <Header />
                <main>
                    {deviceType === 'mobileOrTablet' ? (
                        <div>
                            <p className='notCompatible'>Pas compatible</p>
                        </div>
                    ) : (
                    <Outlet />
                    )}
                </main>          
            <Footer />
        </>
    )
}