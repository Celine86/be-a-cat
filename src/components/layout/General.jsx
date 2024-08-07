import NotCompatible from '/NotCompatible.jpeg';
import ResponsiveV2 from '/ResponsiveV2.jpeg';
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
                        <div className='notCompatible'>
                            <p className='notCompatible--txt'>Ton écran fait moins de 1024x168px</p>
                            <img className='notCompatible--img' src={NotCompatible} />
                            <p className='notCompatible--txt'>Une V2 responsive est prévue !</p>
                            <img className='notCompatible--img' src={ResponsiveV2} />
                        </div>
                    ) : (
                    <Outlet />
                    )}
                </main>          
            <Footer />
        </>
    )
}