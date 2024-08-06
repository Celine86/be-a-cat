import './Home.css';
import SleepingRoom from '/Patapouf_SleepingRoom.jpeg';
import LivingRoom from '/Patapouf_LivingRoom.jpeg';
import { HomeModal } from '../../components/parts/HomeModal.jsx';
import { NavLink } from 'react-router-dom';
import { Tooltip } from '../../components/common/Tooltip.jsx';

export function Home() {

    return (
        <>
        <div id='modal'></div>
        <HomeModal />
        <div>
            <h2>Où chercher en premier ?</h2>
        </div>
        <div className='rooms'>
            <nav>
                <NavLink className='navlink' to='/sleepingroom'>
                    <Tooltip 
                        imageSrc={SleepingRoom}
                        alt='La chambre !' 
                        tooltip='La chambre de Lilie, la maman humaine de Patapouf !' 
                        imageClass='imgMini' 
                    />
                </NavLink>
                <NavLink className='navlink' to='/livingroom'>
                    <Tooltip 
                        imageSrc={LivingRoom}
                        alt='Le salon !' 
                        tooltip="Le salon, le territoire de Teigne, l'autre chat de la maison !"
                        imageClass='imgMini' 
                    />
                </NavLink>
            </nav>
        </div>
        <NavLink className='generalBtn' to='/input'>Je sais où est la baballe !!</NavLink>
        </>
    )
}