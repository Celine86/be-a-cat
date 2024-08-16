import './Home.css';
import SleepingRoom from '/imgs/Patapouf_SleepingRoom.jpeg';
import LivingRoom from '/imgs/Patapouf_LivingRoom.jpeg';
import { NavLink } from 'react-router-dom';

export function Home() {

    return (
        <>
        <div id='modal'></div>
        <div className='roomTitle'>
            <h2>Où chercher en premier ?</h2>
            <h3>La chambre ? Le salon ?</h3>
        </div>
        <div className='rooms'>
            <div>
                <NavLink className='navlink' to='/sleepingroom'>
                    <img className='imgMini' src={SleepingRoom} alt='La chambre !' />
                </NavLink>
            </div>
            <div>
                <NavLink className='navlink' to='/livingroom'>
                    <img className='imgMini' src={LivingRoom} alt='Le salon !' />
                </NavLink>
            </div>
        </div>
        <NavLink className='generalBtn' to='/input'>Je sais où est la baballe !!</NavLink>
        </>
    )
}