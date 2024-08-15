import './Clues.css';
import SleepingRoomClues from '/Patapouf_SleepingRoom_ClickPoints.jpeg';
import LivingRoomClues from '/Patapouf_LivingRoom_ClickPoints.jpeg';
import SleepingRoom from '/Patapouf_SleepingRoom.jpeg';
import LivingRoom from '/Patapouf_LivingRoom.jpeg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import { Tooltip } from '../../components/common/Tooltip.jsx';

export function Clues() {

    const [images, setImages] = useState({
        sleepingroom: SleepingRoom,
        livingroom: LivingRoom,
    });

    const handleClick = (roomId) => {
        if (roomId === 'sleepingroom') {
            setImages((prevImages) => ({
                ...prevImages,
                sleepingroom: prevImages.sleepingroom === SleepingRoom ? SleepingRoomClues : SleepingRoom           
            }));
            localStorage.setItem('sleepingRoom-pts', 50);
        }
        else if (roomId === 'livingroom') {
            setImages((prevImages) => ({
                ...prevImages,
                livingroom: prevImages.livingroom === LivingRoom ? LivingRoomClues : LivingRoom
            }));
            localStorage.setItem('livingRoom-pts', 50);
        }
    };

    return (
        <>
        <div className='roomTitle'>
            <h2>Quels points veux-tu afficher ?</h2>
            <h3>Attention chaque chambre coûte <span className='highlight'>50</span>points !</h3>
        </div>
        <div className='rooms'>
            <div>
            <img 
                id="sleepingroom"
                src={images.sleepingroom}
                alt='La chambre !' 
                className='imgMini'
                onClick={() => handleClick('sleepingroom')}
            />
            {/* <Tooltip 
                id="sleepingroom"
                imageSrc={images.sleepingroom}
                alt='La chambre !' 
                //tooltip='Ceux de la chambre !'
                imageClass='imgMini'
                onClick={() => handleClick('sleepingroom')}
            /> */}
            </div>
            <div>
            <img 
                id="livingroom"
                src={images.livingroom}
                alt='Le salon !' 
                className='imgMini'
                onClick={() => handleClick('livingroom')}
            />
            {/* <Tooltip 
                id="livingroom"
                imageSrc={images.livingroom}
                alt='Le salon !' 
                //tooltip='Ceux du salon !'
                imageClass='imgMini' 
                onClick={() => handleClick('livingroom')}
            /> */}
            </div>
        </div>
        <div className='clueLinks'>
            <NavLink className='generalBtn' to='/sleepingroom'>Je retourne dans la chambre !</NavLink>
            <NavLink className='generalBtn' to='/livingroom'>Je retourne dans le salon !</NavLink>
        </div>
        </>
    )
}