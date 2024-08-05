import NotCompatible from '/NotCompatible.jpeg';
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
                            <p><span className='notCompatible--span'>Désolé le site n'est pas compatible avec les écrans de moins de 1024px</span></p>
                            <img className='notCompatible--img' src={NotCompatible} />
                        </div>
                    ) : (
                    <Outlet />
                    )}
                </main>          
            <Footer />
        </>
    )
}