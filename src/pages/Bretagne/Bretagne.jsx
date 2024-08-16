import './Bretagne.css';
import baballe from '/imgs/Patapouf_Baballe.png';
import { useTimestamp } from '../../hooks/useTimestamp';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export function Bretagne () {
    const startTimestamp = localStorage.getItem('start-timestamp');
    const [stopTimestamp, saveStopTimestamp] = useTimestamp('stop-timestamp');
    const location = useLocation();

    const visitPage404 = localStorage.getItem('404-pts');
    const indice1 = localStorage.getItem('indice1-pts');
    const indice2 = localStorage.getItem('indice2-pts');
    const indice3 = localStorage.getItem('indice3-pts');
    const indiceSleepingRoom = localStorage.getItem('sleepingRoom-pts');
    const indiceLivingRoom = localStorage.getItem('livingRoom-pts');

    useEffect(() => {
        if (location.pathname === '/bretagne') {
            saveStopTimestamp();
        }
    },[location, saveStopTimestamp])

    const timeDifference = startTimestamp && stopTimestamp ? stopTimestamp - startTimestamp : null;
    localStorage.setItem('diff-timestap', timeDifference);

    const timePoints = Math.round(timeDifference / 60000);
    localStorage.setItem('time-pts', timePoints);

    const totalPoints = 500 - timePoints - visitPage404 - indice1 - indice2 - indice3 - indiceLivingRoom - indiceSleepingRoom;

    return (
        <>
            <h2 className='magnifiqueBaballe'>LA PRECIEUSE BABALLE !</h2>
            <img className='precieuseBaballe' src={baballe} />
            <h3>Tu as <span className='highlight'>{totalPoints}</span> points !</h3>
        </>
    )
}