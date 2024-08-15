import './Introduction.css';
import patapouf from '/Patapouf_Introduction.jpeg';
import { NavLink } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useTimestamp } from '../../hooks/useTimestamp';

export function Introduction() {

    const [startTimestamp, saveStartTimestamp] = useTimestamp('start-timestamp');

    const itemsToStore = {
        'start-timestamp': 0,
        'stop-timestamp': 0,
        'diff-timestap': 0,
        'time-pts': 0,
        '404-pts': 0,
        'sleepingRoom-pts': 0,
        'livingRoom-pts': 0,
        'indice1-pts': 0,
        'indice2-pts': 0,
        'indice3-pts': 0,
    };

    useLocalStorage(itemsToStore);

    return (
        <>
        <div>
            <h2 className='presentationTitle'>Patapouf est malheureux...</h2>
            <div className='presentationContainer'>
                <img className='presentationPatapouf' src={patapouf} />
                <div className='presentationTexte'>
                    <p className='presentationTexteCenter'> 
                        Patapouf est un chat curieux et maladroit, un peu comme tous les chats.<br/> 
                        A force de toucher à tout il a perdu sa baballe rouge et il est très malheureux.<br/>
                        Aide Patapouf a retrouver sa magnifique baballe !<br/>
                        Des indices se cachent dans le salon et la chambre.<br />
                        Appuie partout et note les indices qui te permettront de trouver les <span className='highlight'>8</span> lettres du mot mystère.<br />
                        Tu disposes de <span className='highlight'>500</span> points. Plus tu mettra de temps à trouver le mot mystère plus tu perdras de points !<br />
                        Arrivera-tu à trouver la baballe assez vite pour conserver les <span className='highlight'>500</span> points ?
                    </p>
                </div>
            </div>
        </div>
        <NavLink className='generalBtn' onClick={saveStartTimestamp} to='/home'>J'ai compris</NavLink>
        </>
    )
}