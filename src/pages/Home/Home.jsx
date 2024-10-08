import './Home.css';
import SleepingRoom from '/Patapouf_SleepingRoom.jpeg';
import LivingRoom from '/Patapouf_LivingRoom.jpeg';
import {NavLink} from 'react-router-dom';

export function Home() {

    return (
        <>
        <div id='modal'></div>
        <div className='roomTitle'>
            <h1>Où chercher en premier ?</h1>
            <h2>La chambre ? Le salon ?</h2>
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
