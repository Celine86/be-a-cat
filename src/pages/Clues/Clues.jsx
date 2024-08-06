import './Clues.css';
import SleepingRoomClues from '/Patapouf_SleepingRoom_ClickPoints.jpeg';
import LivingRoomClues from '/Patapouf_LivingRoom_ClickPoints.jpeg';
import SleepingRoom from '/Patapouf_SleepingRoom.jpeg';
import LivingRoom from '/Patapouf_LivingRoom.jpeg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Tooltip } from '../../components/common/Tooltip.jsx';

export function Clues() {

    const [images, setImages] = useState({
        sleepingroom: SleepingRoom,
        livingroom: LivingRoom,
    });

    const handleClick = (tooltipId) => {
        if (tooltipId === 'sleepingroom') {
            setImages((prevImages) => ({
                ...prevImages,
                sleepingroom: prevImages.sleepingroom === SleepingRoom ? SleepingRoomClues : SleepingRoom
                          
            }));
        }
        else if (tooltipId === 'livingroom') {
            setImages((prevImages) => ({
                ...prevImages,
                livingroom: prevImages.livingroom === LivingRoom ? LivingRoomClues : LivingRoom
                          
            }));
        }
    };

    return (
        <>
        <div>
            <h2>Quels points veux-tu afficher ?</h2>
        </div>
        <div className='rooms'>
            <nav>
                <Tooltip 
                    id="sleepingroom"
                    imageSrc={images.sleepingroom}
                    alt='La chambre !' 
                    tooltip='Ceux de la chambre !'
                    imageClass='imgMini'
                    onClick={() => handleClick('sleepingroom')}
                />
                <Tooltip 
                    id="livingroom"
                    imageSrc={images.livingroom}
                    alt='Le salon !' 
                    tooltip='Ceux du salon !'
                    imageClass='imgMini' 
                    onClick={() => handleClick('livingroom')}
                />
            </nav>
        </div>
        <div className='clueLinks'>
            <NavLink className='generalBtn' to='/sleepingroom'>Je retourne dans la chambre !</NavLink>
            <NavLink className='generalBtn' to='/livingroom'>Je retourne dans le salon !</NavLink>
        </div>
        </>
    )
}