import { Outlet } from 'react-router-dom';
import { useDeviceType } from '../../hooks/useDeviceType.js';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

export function General() {
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