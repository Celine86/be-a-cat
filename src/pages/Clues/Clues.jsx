import './Clues.css';
import SleepingRoomClues from '/Patapouf_SleepingRoom_ClickPoints.jpeg';
import LivingRoomClues from '/Patapouf_LivingRoom_ClickPoints.jpeg';
import SleepingRoom from '/Patapouf_SleepingRoom.jpeg';
import LivingRoom from '/Patapouf_LivingRoom.jpeg';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';

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
            <h1>Quels points veux-tu afficher ?</h1>
            <h2>Attention chaque chambre coûte <span className='highlight'>50</span>points !</h2>
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
            </div>
            <div>
            <img 
                id="livingroom"
                src={images.livingroom}
                alt='Le salon !' 
                className='imgMini'
                onClick={() => handleClick('livingroom')}
            />
            </div>
        </div>
        <div className='clueLinks'>
            <NavLink className='generalBtn' to='/sleepingroom'>Je retourne dans la chambre !</NavLink>
            <NavLink className='generalBtn' to='/livingroom'>Je retourne dans le salon !</NavLink>
        </div>
        </>
    )
}
