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
                    {deviceType === 'toosmall' ? (
                        <div className='notCompatible'>
                            <p className='notCompatible--txt'>Tourne ton téléphone pour voir ?</p>
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