import ResponsiveV2 from '/ResponsiveV2.jpeg';
import './General.css';
import {Outlet} from 'react-router-dom';
import {useDeviceType} from '../../../hooks/useDeviceType.js';
import {Header} from '../Header/Header.jsx';
import {Footer} from '../Footer/Footer.jsx';

export function General() {
    const deviceType = useDeviceType();
    return (
        <>
            <Header />
                <main>
                    {deviceType === 'toosmall' ? (
                        <div className='notCompatible'>
                            <p className='notCompatibleTxt'>Tourne ton téléphone pour voir ?</p>
                            <img className='notCompatibleImg' src={ResponsiveV2} />
                        </div>
                    ) : (
                    <Outlet />
                    )}
                </main>          
            <Footer />
        </>
    )
}
