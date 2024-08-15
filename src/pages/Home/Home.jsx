import './Home.css';
import SleepingRoom from '/Patapouf_SleepingRoom.jpeg';
import LivingRoom from '/Patapouf_LivingRoom.jpeg';
import { NavLink } from 'react-router-dom';
//import { Tooltip } from '../../components/common/Tooltip.jsx';

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
                {/* <p className='roomDescription'>La chambre de Lilie, la maman humaine de Patapouf !</p> */}
                <NavLink className='navlink' to='/sleepingroom'>
                    <img className='imgMini' src={SleepingRoom} alt='La chambre !' />
                    {/* <Tooltip 
                        imageSrc={SleepingRoom}
                        alt='La chambre !' 
                        tooltip='La chambre de Lilie, la maman humaine de Patapouf !' 
                        imageClass='imgMini'
                    /> */}
                </NavLink>
            </div>
            <div>
                {/* <p className='roomDescription'>Le salon, le territoire de Teigne, l'autre chat de la maison !</p> */}
                <NavLink className='navlink' to='/livingroom'>
                    <img className='imgMini' src={LivingRoom} alt='Le salon !' />
                    { /* <Tooltip 
                        imageSrc={LivingRoom}
                        alt='Le salon !' 
                        tooltip="Le salon, le territoire de Teigne, l'autre chat de la maison !"
                        imageClass='imgMini' 
                /> */}
                </NavLink>
            </div>
        </div>
        <NavLink className='generalBtn' to='/input'>Je sais où est la baballe !!</NavLink>
        </>
    )
}