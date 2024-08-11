import './Introduction.css';
import patapouf from '/Patapouf_Introduction.jpeg';
import { NavLink } from 'react-router-dom';

export function Introduction() {
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
                        Appuie partout et note les indices qui te permettront de trouver les <span className='highlight'>8</span> lettres du mot mystère !<br />
                        Trouveras-tu la baballe ?
                    </p>
                </div>
            </div>
        </div>
        <NavLink className='generalBtn' to='/home'>J'ai compris</NavLink>
        </>
    )
}