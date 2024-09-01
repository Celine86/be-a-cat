import Img404 from '/404.jpeg';
import './Page404.css';
import { NavLink } from 'react-router-dom';

export function Page404() {

        const visitPoints = localStorage.getItem('404-pts');
        console.log(visitPoints)
        if (visitPoints !== null) {
            const newVisitPoints = parseInt(visitPoints, 10) + 10;
            console.log(newVisitPoints)
            localStorage.setItem('404-pts', newVisitPoints);
          }

    return (
        <>
            <main>
                <img className='img404' src={Img404} />
                <button className='btn404'><NavLink to='/home'>Retour au jeu</NavLink></button>
            </main>
        </>
    )
}